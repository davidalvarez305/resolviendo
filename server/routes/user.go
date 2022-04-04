package routes

import (
	"github.com/davidalvarez305/resolviendo/server/database"
	"github.com/davidalvarez305/resolviendo/server/sessions"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
	Password  []byte `json:"password"`
	Phone     string `json:"phone"`
}

func GetUsers(c *fiber.Ctx) error {
	var users []User

	result := database.DB.Raw("SELECT * FROM users;").Scan(&users)

	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Not found.",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"data": users,
	})
}

func GetUser(c *fiber.Ctx) error {
	var user User

	id := c.Params("id")
	result := database.DB.Where("id = ?", id).First(&user)

	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Not found.",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"data": user,
	})
}

func CreateUser(c *fiber.Ctx) error {

	type User struct {
		FirstName string `json:"first_name"`
		LastName  string `json:"last_name"`
		Email     string `json:"email"`
		Password  string `json:"password"`
		Phone     string `json:"phone"`
	}

	var user User
	err := c.BodyParser(&user)

	result := database.DB.Create(user)

	if result.Error != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Bad Input.",
		})
	}

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Bad Request.",
		})
	}

	return c.Status(201).JSON(fiber.Map{
		"data": user,
	})
}

func UpdateUser(c *fiber.Ctx) error {
	var user User
	var body User
	err := c.BodyParser(&body)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Bad Request.",
		})
	}

	id := c.Params("id")
	result := database.DB.Where("id = ?", id).First(&user)

	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Not Found.",
		})
	}

	user.Email = body.Email
	user.FirstName = body.FirstName
	user.LastName = body.LastName
	user.Password = body.Password
	user.Phone = body.Phone

	database.DB.Where("id = ?", id).Save(&user)

	return c.Status(201).JSON(fiber.Map{
		"data": user,
	})
}

func DeleteUser(c *fiber.Ctx) error {
	var user User

	id := c.Params("id")
	result := database.DB.Where("id = ?", id).First(&user)

	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Not Found.",
		})
	}

	database.DB.Where("id = ?", id).Delete(&user)

	return c.Status(200).JSON(fiber.Map{
		"data": "Deleted.",
	})
}

func Login(c *fiber.Ctx) error {
	var user User
	type body struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	var reqBody body
	err := c.BodyParser(&reqBody)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Bad Input.",
		})
	}

	result := database.DB.Where("email = ?", &reqBody.Email).First(&user)

	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Incorrect e-mail.",
		})
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(reqBody.Password), bcrypt.DefaultCost)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	err = bcrypt.CompareHashAndPassword(hashedPassword, user.Password)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Incorrect password.",
		})
	}

	id := sessions.Sessions.KeyGenerator()

	sess, err := sessions.Sessions.Get(c)
	if err != nil {
		panic(err)
	}

	sess.Set("cub_id", id)

	if err := sess.Save(); err != nil {
		panic(err)
	}

	return c.Status(200).JSON(fiber.Map{
		"data": id,
	})
}

func Me(c *fiber.Ctx) error {
	sess, err := sessions.Sessions.Get(c)
	if err != nil {
		panic(err)
	}

	k := sess.Get("cub_id")

	if k == nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Not found.",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"data": k,
	})
}

func Logout(c *fiber.Ctx) error {

	sess, err := sessions.Sessions.Get(c)
	if err != nil {
		panic(err)
	}

	if err := sess.Destroy(); err != nil {
		panic(err)
	}

	return c.Status(200).JSON(fiber.Map{
		"data": "Logged out!",
	})
}

func ChangePassword(c *fiber.Ctx) error {
	return c.Status(200).SendString("Change Password")
}

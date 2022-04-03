package routes

import (
	"fmt"
	"time"

	"github.com/davidalvarez305/resolviendo/server/database"
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

type Data struct {
	Data string `json:"data"`
}

type UsersResponse struct {
	Data []User `json:"data"`
}

type UserResponse struct {
	Data User `json:"data"`
}

func GetUsers(c *fiber.Ctx) error {
	var users []User

	result := database.DB.Raw("SELECT * FROM users;").Scan(&users)

	if result.Error != nil {
		msg := Data{
			"Not found.",
		}
		return c.Status(404).JSON(msg)
	}

	res := UsersResponse{
		users,
	}

	return c.Status(200).JSON(res)
}

func GetUser(c *fiber.Ctx) error {
	var user User

	id := c.Params("id")
	result := database.DB.Where("id = ?", id).First(&user)

	if result.Error != nil {
		msg := Data{
			"Not found.",
		}
		return c.Status(404).JSON(msg)
	}

	res := UserResponse{
		user,
	}

	return c.Status(200).JSON(res)
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

	msg := Data{
		"Bad Request",
	}

	result := database.DB.Create(user)

	if result.Error != nil {
		msg := Data{
			"Bad Input.",
		}
		return c.Status(400).JSON(msg)
	}

	if err != nil {
		return c.Status(400).JSON(msg)
	}

	return c.Status(201).JSON(user)
}

func UpdateUser(c *fiber.Ctx) error {
	var user User
	var body User
	err := c.BodyParser(&body)

	if err != nil {
		msg := Data{
			"Bad Request",
		}
		return c.Status(400).JSON(msg)
	}

	id := c.Params("id")
	result := database.DB.Where("id = ?", id).First(&user)

	if result.Error != nil {
		msg := Data{
			"Not found.",
		}
		return c.Status(404).JSON(msg)
	}

	user.Email = body.Email
	user.FirstName = body.FirstName
	user.LastName = body.LastName
	user.Password = body.Password
	user.Phone = body.Phone

	database.DB.Where("id = ?", id).Save(&user)

	res := UserResponse{
		user,
	}

	return c.Status(201).JSON(res)
}

func DeleteUser(c *fiber.Ctx) error {
	var user User

	id := c.Params("id")
	result := database.DB.Where("id = ?", id).First(&user)

	if result.Error != nil {
		msg := Data{
			"Not found.",
		}
		return c.Status(404).JSON(msg)
	}

	database.DB.Where("id = ?", id).Delete(&user)

	msg := Data{
		"Deleted.",
	}

	return c.Status(200).JSON(msg)
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
		msg := Data{
			"Bad Input.",
		}
		return c.Status(400).JSON(msg)
	}

	result := database.DB.Where("email = ?", &reqBody.Email).First(&user)

	if result.Error != nil {
		msg := Data{
			"Incorrect e-mail.",
		}
		return c.Status(404).JSON(msg)
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(reqBody.Password), bcrypt.DefaultCost)

	if err != nil {
		msg := Data{
			err.Error(),
		}
		return c.Status(500).JSON(msg)
	}

	err = bcrypt.CompareHashAndPassword(hashedPassword, user.Password)

	if err != nil {
		msg := Data{
			"Incorrect password.",
		}
		return c.Status(400).JSON(msg)
	}

	data := UserResponse{
		user,
	}

	cookie := new(fiber.Cookie)
	cookie.Name = "cub_id"
	cookie.Value = "test"
	cookie.Expires = time.Now().Add(24 * time.Hour)

	c.Cookie(cookie)

	Sessions.Get()

	return c.Status(200).JSON(data)
}

func Me(c *fiber.Ctx) error {
	cookie := c.Cookies("cub_id")
	fmt.Println("cookie: ", cookie)
	return c.Status(200).SendString("Me")
}

func Logout(c *fiber.Ctx) error {

	c.ClearCookie("cub_id")
	return c.Status(200).JSON(fiber.Map{
		"data": "Logged out!",
	})
}

func ChangePassword(c *fiber.Ctx) error {
	return c.Status(200).SendString("Change Password")

}

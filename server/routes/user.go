package routes

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
)

type User struct {
	id        uint   `json:"id"`
	firstName string `json:"first_name"`
	lastName  string `json:"last_name"`
	email     string `json:"email"`
	password  string `json:"password"`
	phone     string `json:"phone"`
}

func GetUsers(c *fiber.Ctx) error {
	query := `SELECT * FROM users;`

	rows, err := database.db.Query(query)
	if err != nil {
		return c.Status(500).JSON(err.Error())
	}
	defer rows.Close()

	fmt.Println("rows", rows)

	return c.Status(200).JSON("GetUsers Route")
}

func GetUser(c *fiber.Ctx) error {
	return c.Status(200).JSON("GetUser Route")
}

func CreateUser(c *fiber.Ctx) error {
	return c.Status(201).JSON("User created")
}

func UpdateUser(c *fiber.Ctx) error {
	return c.Status(200).JSON("UpdateUser Route")
}

func DeleteUser(c *fiber.Ctx) error {
	return c.Status(200).JSON("DeleteUser Route")
}

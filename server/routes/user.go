package routes

import (
	"github.com/davidalvarez305/resolviendo/server/database"
	"github.com/gofiber/fiber/v2"
)

type User struct {
	ID        uint   `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	Phone     string `json:"phone"`
}

func GetUsers(c *fiber.Ctx) error {
	var user User
	database.DB.First(&user)

	return c.Status(200).JSON("Users")
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

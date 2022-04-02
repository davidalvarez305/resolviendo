package user

import (
	"github.com/gofiber/fiber"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	first_name string `json:"first_name"`
	last_name  string `json:"last_name"`
	email      string `json:"email"`
	password   string `json:"password"`
	phone      string `json:"phone"`
}

func GetUsers(c *fiber.Ctx) {
	var users []User
	return users
}

func GetUser(c *fiber.Ctx) {
	var user User
	return user
}

func CreateUser(c *fiber.Ctx) {
	var user User
	return user
}

func UpdateUser(c *fiber.Ctx) {
	var user User
	return user
}

func DeleteUser(c *fiber.Ctx) {
	var user User
	return user
}

func Start() {
	db
}

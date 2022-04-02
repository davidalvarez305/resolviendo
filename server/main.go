package main

import (
	"github.com/davidalvarez305/resolviendo/server/database"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	database.Connect()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World 👋!")
	})

	app.Listen(":3000")
}

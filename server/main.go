package main

import (
	"github.com/davidalvarez305/resolviendo/server/database"
	"github.com/davidalvarez305/resolviendo/server/routes"
	"github.com/gofiber/fiber/v2"
)

func Router(app *fiber.App) {
	app.Get("/api/v1/user", routes.GetUsers)
	app.Get("/api/v1/user/:id", routes.GetUser)
	app.Post("/api/v1/user", routes.CreateUser)
	app.Put("/api/v1/user", routes.UpdateUser)
	app.Delete("/api/v1/user", routes.DeleteUser)
}

func main() {
	app := fiber.New()
	database.Connect()
	Router(app)

	app.Listen(":4006")
}

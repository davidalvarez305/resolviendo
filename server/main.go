package main

import (
	"github.com/davidalvarez305/resolviendo/server/database"
	"github.com/davidalvarez305/resolviendo/server/routes"
	"github.com/davidalvarez305/resolviendo/server/sessions"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/session"
)

func Router(app *fiber.App) {
	app.Get("/api/v1/user", routes.GetUsers)
	app.Get("/api/v1/user/me", routes.Me)
	app.Get("/api/v1/user/:id", routes.GetUser)
	app.Post("/api/v1/user", routes.CreateUser)
	app.Put("/api/v1/user/:id", routes.UpdateUser)
	app.Delete("/api/v1/user/:id", routes.DeleteUser)
	app.Post("/api/v1/user/login", routes.Login)
	app.Post("/api/v1/user/logout", routes.Logout)
	app.Post("/api/v1/user/change-password", routes.ChangePassword)
}

var Sessions *session.Store

func main() {
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:4006",
	}))
	database.Connect()
	sessions.Init()
	Router(app)

	app.Listen(":4006")
}

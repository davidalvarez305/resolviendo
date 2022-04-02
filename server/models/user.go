package models

import (
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

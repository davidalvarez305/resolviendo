package user

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	name     string `json:"name"`
	province string `json:"province"`
}

func main() {

}

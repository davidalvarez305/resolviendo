package database
import (
	"gorm.io/gorm"
	"gorm.io/driver/postgres"
	"github.com/joho/godotenv"
	"fmt"
	"os"
)

var db *gorm.DB

type connection struct {
	Host string
	Port int
	User string
	Password string
	DB string
}

func Connect() {
	err := godotenv.load()
	if err != nil {
		log.Fatal("Error loading dot env file")
	}

	conn := connection {
		Host: os.Getenv("POSTGRES_HOST")
		Port: os.Getenv("POSTGRES_PORT")
		User: os.Getenv("POSTGRES_USER")
		Password: os.Getenv("POSTGRES_PASSWORD")
		DB: os.Getenv("POSTGRES_DB")
	}

	db, err := gorm.Open(postgres.Open(connToString(conn)), &gorm.Config{})

	if err != nil {
		fmt.Printf("Error connecting to the DB: %s\n", err.Error())
		return
	} else {
		fmt.Printf("DB is open\n")
	}

	err = db.Ping()
	if err != nil {
		fmt.Printf("Error could not ping database: %s\n", err.Error())
		return
	} else {
		fmt.Printf("DB pinged successfully\n")
	}

	func connToString(info connection) string {
		return fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
			info.Host, info.Port, info.User, info.Password, info.DBName)
	}
}
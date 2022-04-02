package Model
import (
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
)

type connection struct {
	Host string
	Port int
	User string
	Password string
	DB string
}

func main() {
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

	func connToString(info connection) string {
		return fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
			info.Host, info.Port, info.User, info.Password, info.DBName)
	}

	db, connErr := gorm.Open(postgres.Open(connToString(conn)), &gorm.Config{})

	if connErr != nil {
		fmt.Printf("Error connecting to the DB: %s\n", connErr.Error())
		return
	} else {
		fmt.Printf("DB is open\n")
	}

	connErr = db.Ping()
	if connErr != nil {
		fmt.Printf("Error could not ping database: %s\n", connErr.Error())
		return
	} else {
		fmt.Printf("DB pinged successfully\n")
	}
}
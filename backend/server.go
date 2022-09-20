package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"net/http"
)

type ToDo struct {
	Id      string `json:"id"`
	Content string `json:"content"`
	Done    bool   `json:"done"`
}

var todoList = []ToDo{

	{Id: "1", Content: "Banana", Done: true},
	{Id: "2", Content: "Potato", Done: false},
}

func getTodos(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, todoList)
}

func deleteTodo(c *gin.Context) {
	id := c.Param("id")
	for index, todo := range todoList {
		if todo.Id == id {
			todoList = append(todoList[:index], todoList[index+1:]...)
			c.IndentedJSON(http.StatusOK, todoList)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "todo not found"})
}

func addTodo(c *gin.Context) {
	var newTodo ToDo

	if err := c.Bind(&newTodo); err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "todo not found"})

		return
	}

	todoList = append(todoList, newTodo)
	c.IndentedJSON(http.StatusOK, todoList)

}

func toggleDoneTodo(c *gin.Context) {
	id := c.Param("id")
	for index, todo := range todoList {
		if todo.Id == id {
			todoList[index].Done = !todoList[index].Done
			c.IndentedJSON(http.StatusOK, todoList)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "todo not found"})
}

func main() {

	app := gin.Default()
	// CORS for https://foo.com and https://github.com origins, allowing:
	// - PUT and PATCH methods
	// - Origin header
	// - Credentials share
	// - Preflight requests cached for 12 hours
	app.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"PUT", "POST", "DELETE", "GET"},
		AllowHeaders:     []string{"Origin",  "Content-Type",},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: false,
		// AllowOriginFunc: func(origin string) bool {
		//   return origin == "https://github.com"
		// },
		// MaxAge: 12 * time.Hour,
	}))
	// app.Use(cors.Default())
	app.DELETE("/todos/:id", deleteTodo)
	app.PUT("/todos/:id", toggleDoneTodo)
	app.POST("/todos", addTodo)
	app.GET("/todos", getTodos)

	app.Run("localhost:8080")
}

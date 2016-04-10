package routers

import (
	"angular2test/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/api/fruits/?:id", &controllers.FruitController{})
	beego.Router("/*", &controllers.MainController{})

}

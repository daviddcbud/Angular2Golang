package routers

import (
	"angular2test/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/api/fruits/?:id", &controllers.FruitController{})
	beego.Router("/api/songs/?:id", &controllers.SongsController{})
    beego.Router("/api/searchSong", &controllers.SongsController{},"post:Search")
	beego.Router("/*", &controllers.MainController{})

}

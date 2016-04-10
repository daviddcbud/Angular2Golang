package main

import (
	_ "angular2test/routers"

	"angular2test/DAL/mongoDB"

	"github.com/astaxie/beego"
)

func main() {
	var session = mongoDB.CreateMongoSession()
	defer session.Close()
	beego.SetStaticPath("/css", "static/css")
	beego.SetStaticPath("/img", "static/img")
	beego.SetStaticPath("/node_modules", "node_modules")
	beego.SetStaticPath("/js", "static/js")
	beego.SetStaticPath("/views", "static/views")
	beego.Run()
}

package controllers

import (
	"angular2test/DAL/fruitRepo"
	"angular2test/models"
	"encoding/json"
	"log"

	"github.com/astaxie/beego"
	"gopkg.in/mgo.v2/bson"
)

type FruitController struct {
	beego.Controller
}

func (this *FruitController) Get() {
	var data = fruitRepo.GetFruits()
	this.Data["json"] = &data
	this.ServeJSON()
}
func (this *FruitController) Delete() {
	id := this.Ctx.Input.Param(":id")
	fruitRepo.Delete(bson.ObjectIdHex(id))
	this.Data["json"] = id
	this.ServeJSON()
}

func (this *FruitController) Post() {
	f := models.Fruit{}
	json.Unmarshal(this.Ctx.Input.RequestBody, &f)
	log.Printf("posting %v\n", f)
	if IsEmpty(f.Id) {
		fruitRepo.Insert(f)
	} else {
		fruitRepo.Update(f)
	}

	this.Data["json"] = &f
	this.ServeJSON()

}

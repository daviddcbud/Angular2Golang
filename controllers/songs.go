package controllers

import (
	"angular2test/DAL/songRepo"
	"angular2test/models"
	"encoding/json"
	"log"

	"github.com/astaxie/beego"
	"gopkg.in/mgo.v2/bson"
)

type SongsController struct {
	beego.Controller
}
type SearchOptions struct{
    searchText string
}

func (this *SongsController) Search(){
    options:= SearchOptions{}
    json.Unmarshal(this.Ctx.Input.RequestBody, &options)
    log.Printf("Searching %v", options.searchText)
    var data=songRepo.SearchByName(options.searchText)
    this.Data["json"] =&data
    this.ServeJSON()    
    
}

func (this *SongsController) Get() {
	var data = songRepo.GetSongs()
	this.Data["json"] = &data
	this.ServeJSON()
}
func (this *SongsController) Delete() {
	id := this.Ctx.Input.Param(":id")
	songRepo.Delete(bson.ObjectIdHex(id))
	this.Data["json"] = id
	this.ServeJSON()
}

func (this *SongsController) Post() {
	f := models.Song{}
	json.Unmarshal(this.Ctx.Input.RequestBody, &f)
	log.Printf("posting %v %v\n", f,IsEmpty(f.Id))
	if IsEmpty(f.Id) {
		songRepo.Insert(f)
	} else {
		songRepo.Update(f)
	}

	this.Data["json"] = &f
	this.ServeJSON()

}

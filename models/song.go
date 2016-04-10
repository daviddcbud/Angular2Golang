package models

import "gopkg.in/mgo.v2/bson"

//Song struct
type Song struct {
	Id     bson.ObjectId `json:"id" bson:"_id"`
	Name   string        `json:"name" bson:"name"`
	Artist string        `json:"artist" bson:"artist"`
}

//GetId return id
func (song Song) GetId() bson.ObjectId {
	return song.Id
}

//SetId set the id
func (song Song) SetId(id bson.ObjectId) {
	song.Id = id
}

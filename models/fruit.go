package models

import "gopkg.in/mgo.v2/bson"

type Fruit struct {
	Id   bson.ObjectId `json:"id" bson:"_id"`
	Name string        `json:"name" bson:"name"`
}

func (f Fruit) GetId() bson.ObjectId {
    
	return f.Id
}

func (f Fruit) SetId(id bson.ObjectId) {
	f.Id = id
}

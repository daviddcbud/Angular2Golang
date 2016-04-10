package models

import "gopkg.in/mgo.v2/bson"

//BaseInterface base model
type BaseInterface interface {
	GetId() bson.ObjectId
	SetId(id bson.ObjectId)
}

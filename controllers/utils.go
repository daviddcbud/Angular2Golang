package controllers

import "gopkg.in/mgo.v2/bson"

//at the moment, this is the only way I know to check for an empty objectid ""
func IsEmpty(id bson.ObjectId) bool {
	var emptyId bson.ObjectId
	return string(id) == string(emptyId)
}

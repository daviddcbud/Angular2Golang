package controllers

import "gopkg.in/mgo.v2/bson"

 
func IsEmpty(id bson.ObjectId) bool {
   return !bson.IsObjectIdHex(string(id));	
}

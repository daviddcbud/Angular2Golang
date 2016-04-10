package fruitRepo

import (
	"angular2test/DAL/mongoDB"
	"angular2test/models"
	"log"

	"gopkg.in/mgo.v2/bson"
)

const collectionName = "fruits"

//Delete by id
func Delete(id bson.ObjectId) {
	mongoDB.Delete(id, collectionName)
}

//Insert f into collection
func Insert(f models.Fruit) {
	mongoDB.Insert(f, collectionName)
}

//Update f by id
func Update(f models.Fruit) {

	mongoDB.Update(f, collectionName)
}

//GetFruits  return all fruits from mongodb
func GetFruits() []models.Fruit {
	sessionCopy, collection := mongoDB.GetCollection(collectionName)
	defer sessionCopy.Close()
	var fruits []models.Fruit
	err := collection.Find(nil).All(&fruits)
	if err != nil {
		log.Println(err)
	}

	return fruits
}

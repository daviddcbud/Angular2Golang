package songRepo

import (
	"angular2test/DAL/mongoDB"
	"angular2test/models"
	"log"

	"gopkg.in/mgo.v2/bson"
)

const collectionName = "songs"

//Delete by id
func Delete(id bson.ObjectId) {
	mongoDB.Delete(id, collectionName)
}

//Insert f into collection
func Insert(f models.Song) {
	f.Id=bson.NewObjectId();
	mongoDB.Insert(f, collectionName)
}

//Update f by id
func Update(f models.Song) {

	mongoDB.Update(f, collectionName)
}

//GetSongs  return all songs from mongodb
func GetSongs() []models.Song {
	sessionCopy, collection := mongoDB.GetCollection(collectionName)
	defer sessionCopy.Close()
	var songs []models.Song
	err := collection.Find(nil).All(&songs)
	if err != nil {
		log.Println(err)
	}

	return songs
}

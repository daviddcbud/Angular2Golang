package mongoDB

import (
	"angular2test/models"
	"log"
	"time"

	"github.com/astaxie/beego"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

//Session - global session to mongodb
var Session *mgo.Session

//GetCollection - Get mongodb collection returning a session copy so you can defer close it
//and the collection you asked for
func GetCollection(collectionName string) (*mgo.Session, *mgo.Collection) {
	session := Session
	sessionCopy := session.Copy()
	dbName := beego.AppConfig.String("appDatabase")
	collection := sessionCopy.DB(beego.AppConfig.String(dbName)).C(collectionName)
	return sessionCopy, collection
}

//CreateMongoSession - create the mongo session based on parameters in app.conf
func CreateMongoSession() *mgo.Session {

	mongoDBDialInfo := &mgo.DialInfo{
		Addrs:    []string{beego.AppConfig.String("mongoDBHosts")},
		Timeout:  60 * time.Second,
		Database: beego.AppConfig.String("authDatabase"),
		Username: beego.AppConfig.String("authUserName"),
		Password: beego.AppConfig.String("authPassword"),
	}
	session, err := mgo.DialWithInfo(mongoDBDialInfo)
	if err != nil {
		panic(err)
	}
	log.Println("Connected to mongoDb " + beego.AppConfig.String("mongoDBHosts"))
	session.SetMode(mgo.Monotonic, true)
	Session = session
	return session
}

//Delete by id
func Delete(id bson.ObjectId, collectionName string) {
	sessionCopy, collection := GetCollection(collectionName)
	defer sessionCopy.Close()
	query := bson.M{"_id": id}
	err := collection.Remove(query)
	if err != nil {
		log.Printf("error deleting %v", err)
	}
}

//Insert f into collection
func Insert(f models.BaseInterface, collectionName string) {

	sessionCopy, collection := GetCollection(collectionName)
	defer sessionCopy.Close()
	var err error

	f.SetId(bson.NewObjectId())
	err = collection.Insert(f)
	if err != nil {
		log.Println(err)
	}
}

//Update f by id
func Update(f models.BaseInterface, collectionName string) {
	sessionCopy, collection := GetCollection(collectionName)
	defer sessionCopy.Close()
	var err error
	id := f.GetId()
	query := bson.M{"_id": id}
	log.Printf("updating %v\n", f)
	err = collection.Update(query, f)
	if err != nil {
		log.Println(err)
	}
}

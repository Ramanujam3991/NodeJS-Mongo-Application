var mongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://admin:admin@cluster0.jbswf.mongodb.net/mongoPractice?retryWrites=true&w=majority";

mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Mongo database is connected");
  var dbs = db.db("mongoPractice");
  var doc = { id: 100, name: "Rmanaujam", email: "ram.4@gmail.com" };
  dbs.collection("Employee").insertOne(doc,function(err,res){
      if(err) throw err;
      console.log('Doc is inserted');
  });
  //createCollection('Employee',dbs);
  //db.close();
});

function createCollection(collectionName, db) {
  db.createCollection(collectionName, function (err, res) {
    if (err) throw err;
    console.log("collection named " + collectionName + " is created");
  });
}

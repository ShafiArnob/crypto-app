const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId
const app = express()
const port = process.env.PORT || 5000

require('dotenv').config()

//middlewares
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qwn6c5y.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// console.log(process.env);
async function run(){
  try{
    await client.connect()
    const userCollection = client.db("crypto-app").collection("users")
    // const user = {name: "Shafi"}
    // const res = await userCollection.insertOne(user)
    // console.log(res)

    // add userdata
    app.post("/users", async(req, res) => {
      const response = await userCollection.insertOne(req.body)
      // console.log("response",response)
      res.send(response)
    })
  }
  finally{

  }
}
run().catch(console.dir)


app.get('/', (req, res)=>{
  res.send("Hello World")
})

app.listen(port, ()=>{
  console.log("Listening..", port);
})
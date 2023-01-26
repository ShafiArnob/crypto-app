const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const { response } = require('express');
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
    const testCollection = client.db("crypto-app").collection("test")
    // const user = {name: "Shafi"}
    // const res = await userCollection.insertOne(user)
    // console.log(res)

    //test mongo 
    app.get("/test", async(req, res) => {
      const cursor = testCollection.find({})
      const users = await cursor.toArray()
      // console.log("response",response)
      res.send(users)
    })
    // add userdata
    app.post("/users", async(req, res) => {
      const response = await userCollection.insertOne(req.body)
      // console.log("response",response)
      res.send(response)
    })

    //get userdata
    app.get("/portfolio/:uid", async(req, res) => {
      const uid = req.params.uid
      const query = {uid:uid}
      const response = await userCollection.findOne(query)
      res.send(response)
    })

    app.post("/portfolio/:uid", async(req, res)=>{
      const uid = req.params.uid
      const coinId = req.body.query.coinId
      const transId = req.body.query.transId
      const transactionObj = req.body

      //if coin exists in the portfolio
      if(req.body.exists){
        const response = await userCollection.updateOne(
          {uid:uid},
          {$set:{
            [`portfolio.${coinId}.transaction.${transId}`] : transactionObj[transId],
            [`portfolio.${coinId}.totalValue`] : transactionObj.newTotalValue,
            [`portfolio.${coinId}.totalSpent`] : transactionObj.newTotalSpent
            }
          }
        )
        res.send(response)
      }
      //if coin does not exists in the portfolio, creates coin objects
      else{
        const response = await userCollection.updateOne(
          {uid:uid},
          {$set:{[`portfolio.${coinId}`]:transactionObj[coinId]}}
        )
        console.log(req.body);
        res.send(response)
      }

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
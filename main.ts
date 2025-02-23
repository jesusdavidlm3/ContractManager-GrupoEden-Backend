import cors from "cors"
import jwt from "jsonwebtoken"
import * as db from './dbConnections.ts'
import "jsr:@std/dotenv/load";
import * as t from './interfaces.ts'
import express from 'express'

const port = Deno.env.get("BACKEND_PORT")
const secret = Deno.env.get("SECRET")

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/api/getBasicInfo", async(req, res) => {
  try{
    const dbResponse: t.basicInfo[][] = await db.getAllBasicInfo()
    res.status(200).send(dbResponse)
  }catch(err){
    console.log(err)
    res.status(500).send("error del servidor")
  }
})

app.listen(port, () => {
  console.log(`Puerto: ${port}`)
})
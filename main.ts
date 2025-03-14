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

app.get("/api/login", async(req, res) => {
  const identification: string = req.body.identification
  const password: string = req.body.password

  try{
    const user: t.userInfo[] = await db.login(identification)
    if(user.length == 0){
      res.status(404).send("usuario no encontrado")
    }else if(user[0].active == false){
      res.status(401).send("usuario inactivo")
    }else if(user[0].password != password){
      res.status(401).send("Contraseña incorrecta")
    }else{
      res.status(200).send(user[0])
    }
  }catch(err){
    console.log(err)
    res.status(500).send("error del servidor")
  }
})

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
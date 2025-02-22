import mariadb  from 'npm:mariadb'
import cors from "npm:cors"
import jwt from "npm:jsonwebtoken"
import * as db from './dbConnections.ts'
import "jsr:@std/dotenv/load";
import * as t from './interfaces.ts'

const port = Deno.env.get("BACKEND_PORT")
const secret = Deno.env.get("SECRET")

Deno.serve({port: port, hostname: "0.0.0.0"}, async(req) => {
  if(req.method == 'GET'){
    const data = JSON.stringify(await db.getAllBasicInfo())
    return new Response(data, {status: 200})
  }else{
    return new Response("No hiciste get")
  }
})
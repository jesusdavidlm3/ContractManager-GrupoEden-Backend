import mariadb from "npm:mariadb"
import "jsr:@std/dotenv/load";

const db = mariadb.createPool({
    host: Deno.env.get("BDD_HOST"),
    user: Deno.env.get("BDD_USER"),
    password: Deno.env.get("BDD_PASSWORD"),
    database: Deno.env.get("BDD_NAME"),
    port: Deno.env.get("BDD_PORT"),
    acquireTimeout: Deno.env.get("BDD_TIMEOUT"),
    conexionLimit: Deno.env.get("BDD_CONECTION_LIMIT")
})

export async function getPaymentFrecuencies() {
    let connection
    try{
        connection = await db.getConnection()
        console.log(connection)
        const res = await connection.query(`
            SELECT * FROM paymentFrecuencies
        `)
        return res
    }catch(err){
        console.log(err)
        return err
    }finally{
        connection?.release()
    }
}
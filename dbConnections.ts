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

export async function getAllBasicInfo() {
    let connection
    try{
        connection = await db.getConnection()
        const paymentFreq = await connection.query(`SELECT * FROM paymentFrecuencies`)
        const agencies = await connection.query(`SELECT * FROM agencies`)
        const agreements = await connection.query(`SELECT * FROM agreements`)
        const banks = await connection.query(`SELECT * FROM banks`)
        const locations = await connection.query(`SELECT * FROM locations`)
        const plans = await connection.query(`SELECT * FROM plans`)
        const res = [paymentFreq, agencies, agreements, banks, locations, plans]
        console.log(res)
        return res
    }catch(err){
        return err
    }finally{
        connection?.release()
    }
}

export async function getPaymentFrecuencies() {
    let connection
    try{
        connection = await db.getConnection()
        const res = await connection.query(`
            SELECT * FROM paymentFrecuencies
        `)
        console.log(res)
        return res
    }catch(err){
        console.log(err)
        return err
    }finally{
        connection?.release()
    }
}

export async function getAgencies() {
    let connection
    try{
        connection = await db.getConnection()
        const res = await connection.query(`
            SELECT * FROM agencies
        `)
        console.log(res)
        return res
    }catch(err){
        console.log(err)
        return err
    }finally{
        connection?.release()
    }
}

export async function getAgreements() {
    let connection
    try{
        connection = await db.getConnection()
        const res = await connection.query(`
            SELECT * FROM agreements
        `)
        console.log(res)
        return res
    }catch(err){
        console.log(err)
        return err
    }finally{
        connection?.release()
    }
}

export async function getBanks() {
    let connection
    try{
        connection = await db.getConnection()
        const res = await connection.query(`
            SELECT * FROM banks
        `)
        console.log(res)
        return res
    }catch(err){
        console.log(err)
        return err
    }finally{
        connection?.release()
    }
}

export async function getLocations() {
    let connection
    try{
        connection = await db.getConnection()
        const res = await connection.query(`
            SELECT * FROM locations
        `)
        console.log(res)
        return res
    }catch(err){
        console.log(err)
        return err
    }finally{
        connection?.release()
    }
}

export async function getPlans() {
    let connection
    try{
        connection = await db.getConnection()
        const res = await connection.query(`
            SELECT * FROM plans
        `)
        console.log(res)
        return res
    }catch(err){
        console.log(err)
        return err
    }finally{
        connection?.release()
    }
}
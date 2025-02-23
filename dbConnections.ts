import mariadb from 'mariadb'
import "jsr:@std/dotenv/load";
import * as t from './interfaces.ts'

const db = mariadb.createPool({
    host: Deno.env.get("BDD_HOST"),
    user: Deno.env.get("BDD_USER"),
    password: Deno.env.get("BDD_PASSWORD"),
    database: Deno.env.get("BDD_NAME"),
    port: Number(Deno.env.get("BDD_PORT")),
    acquireTimeout: Number(Deno.env.get("BDD_TIMEOUT")),
    connectionLimit: Number(Deno.env.get("BDD_CONECTION_LIMIT"))
})

export async function getAllBasicInfo(): Promise<t.basicInfo[][]> {
    let connection
    try{
        connection = await db.getConnection()
        const paymentFreq: t.basicInfo[] = await connection.query(`SELECT * FROM paymentFrecuencies`)
        const agencies: t.basicInfo[] = await connection.query(`SELECT * FROM agencies`)
        const agreements: t.basicInfo[] = await connection.query(`SELECT * FROM agreements`)
        const banks: t.basicInfo[] = await connection.query(`SELECT * FROM banks`)
        const locations: t.basicInfo[] = await connection.query(`SELECT * FROM locations`)
        const plans: t.basicInfo[] = await connection.query(`SELECT * FROM plans`)
        const res: t.basicInfo[][] = [paymentFreq, agencies, agreements, banks, locations, plans]
        console.log(res)
        return res
    }catch(err){
        throw err
    }finally{
        connection?.release()
    }
}

export async function getPaymentFrecuencies() {
    let connection
    try{
        connection = await db.getConnection()
        const res: t.basicInfo[] = await connection.query(`
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
        const res: t.basicInfo[] = await connection.query(`
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
        const res: t.basicInfo[] = await connection.query(`
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
        const res: t.basicInfo[] = await connection.query(`
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
        const res: t.basicInfo[] = await connection.query(`
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
        const res: t.basicInfo[] = await connection.query(`
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
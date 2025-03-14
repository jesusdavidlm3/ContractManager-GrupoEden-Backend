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

async function query(query: string, params?: object){
    let connection
    try{
        connection = await db.getConnection()
        const res = await connection.query(query, params)
        return res
    }catch(err){
        console.log(err)
        throw err
    }finally{
        connection?.release()
    }
}

async function execute(query: string, params?: object){
    let connection
    try{
        connection = await db.getConnection()
        const res = await connection.execute(query, params)
        return res
    }catch(err){
        console.log(err)
        throw err
    }finally{
        connection?.release()
    }
}

export async function login(identification: string): Promise<t.userInfo[]> {
    const res: t.userInfo[] = await query("SELECT * FROM users WHERE identification = ?", [identification])
    return res
}

export async function getContracts(): Promise<t.listItemContract[]>{
    const res: t.listItemContract[] = await query(`
        SELECT
        contracts.id AS contractId,
        contracts.contractNumber,
        clients.name AS clientName,
        clients.lastName AS clientLastname
        FROM contracts INNER JOIN clients ON contracts.clientId = clients.id
    `)
    return res
}

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

export async function getPaymentFrecuencies(): Promise<t.basicInfo[]> {
    const res: t.basicInfo[] = await query("SELECT * FROM paymentFrecuencies")
    return res
}

export async function getAgencies(): Promise<t.basicInfo[]> {
    const res: t.basicInfo[] = await query("SELECT * FROM agencies")
    return res
}

export async function getAgreements(): Promise<t.basicInfo[]> {
    const res: t.basicInfo[] = await query("SELECT * FROM agreements")
    return res
}

export async function getBanks(): Promise<t.basicInfo[]> {
    const res: t.basicInfo[] = await query("SELECT * FROM banks")
    return res 
}

export async function getLocations(): Promise<t.basicInfo[]> {
    const res: t.basicInfo[] = await query("SELECT * FROM locations")
    return res 
}

export async function getPlans(): Promise<t.basicInfo[]> {
    const res: t.basicInfo[] = await query("SELECT * FROM plans")
    return res 
}
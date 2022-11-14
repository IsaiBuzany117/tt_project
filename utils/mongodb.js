import { connect, connection } from 'mongoose'

let isconnected = false

export const mongoconnection = async () => {
    if (isconnected) return
    
    const dbconnection = await connect(process.env.MONGODB_URL)
    
    isconnected =  dbconnection.connections[0].readyState
    console.log(dbconnection.connection.db.databaseName)
}

export const mongoclose = () => {
    connection.close()
}

connection.on("connected", () => {
    console.log("MongoDB conectado")
})

connection.on("error", err => {
    console.log(err)
})


connection.on("close", () => {
    console.log("MongoDB desconectado")
})
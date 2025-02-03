import express from "express"
import cors from "cors"
import { bookRoute } from "./routes/book.js"

const server = express()

server.use(express.json())
server.use(cors())

server.use("/api",bookRoute)

server.listen(3000,() => {
  console.log("server is running in port 3000")
}
)
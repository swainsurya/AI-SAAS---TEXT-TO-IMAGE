import express, { json } from "express"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/connectDB.js"
import userRouters from "./routes/user.route.js"
import imageRouter from "./routes/image.route.js"
import cors from "cors"
import "dotenv/config"
import paymentRouter from "./routes/paymet.route.js"

const app = express()
const port = process.env.PORT || 4000

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

connectDB()

app.use(json())
app.use(cookieParser())

app.use("/user", userRouters)
app.use("/image", imageRouter)
app.use("/buy",paymentRouter)

app.get("/",(req,res) => {
    res.send("All set")
})

app.listen(port,()=> console.log("Server is running on ",port));
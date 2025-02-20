import express, { json } from "express"
import path from "path"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/connectDB.js"
import userRouters from "./routes/user.route.js"
import imageRouter from "./routes/image.route.js"
import cors from "cors"
import "dotenv/config"
import paymentRouter from "./routes/paymet.route.js"

const app = express()
const port = process.env.PORT || 4000
const __dirname = path.resolve()

app.use(cors({
    origin : "https://ai-saas-text-to-image.onrender.com",
    credentials : true
}))

connectDB()

app.use(json())
app.use(cookieParser())

app.use("/user", userRouters)
app.use("/image", imageRouter)
app.use("/buy",paymentRouter)

if(process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname,"/client/dist")))

    app.get("*",(req , res) => {
        res.sendFile(path.resolve(__dirname, "client" , "dist", "index.html"))
    })
}

app.listen(port,()=> console.log("Server is running on ",port));
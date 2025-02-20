import { Router } from "express";
import { getUer, login, logout, register } from "../controllers/user.js";
import { userVerify } from "../middlewares/userVerify.js";

const userRouters = Router() ;

userRouters.post("/login",login)
userRouters.post("/register",register)
userRouters.post("/logout", logout)
userRouters.get("/",userVerify,getUer)

export default userRouters ;
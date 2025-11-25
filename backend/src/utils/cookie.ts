import Jwt  from "jsonwebtoken";
import { Env } from "../config/env.config";
import { Response } from "express";

type Time= `${number}${'s' | 'm' | 'h' | 'd'| 'w'| 'y'}`
type Cookie={
  res:Response
  userId:string
}


export const setjwtAuthCookie=({res,userId}: Cookie)=>{
  const payload={userId};
  const expiresin=Env.JWT_EXPIRES_IN as Time
  const token= Jwt.sign(payload,Env.JWT_SECRET,{
    audience:["user"],
    expiresIn:expiresin || "7d",
  });
  return res.cookie("accessToken",token ,{
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly:true,
    secure:Env.NODE_ENV === "production"? true:false,
    sameSite:Env.NODE_ENV === "production"? "strict":"lax",
  })
}

export const clearjwtAuthCookie=(res:Response)=>{
  res.clearCookie("accessToken", {path:"/"})
}
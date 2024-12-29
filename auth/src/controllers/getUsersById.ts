import { Request, Response } from "express";
import prisma from "../prisma";

const getUsersById = async (req:Request,res:Response) => {
    try{
        const {auth0Id} = req.params
        const user = await prisma.user.findUnique({where:{auth0Id}})
        if(!user){
            res.status(404).json({message:'user-not-found'})
            return
        }
        res.status(200).json({message:'user-fetched-successfully',data:user})
    }catch(error){
        console.log(error)
        res.status(500).json({message:'internal-server-error'})
    }
}

export default getUsersById
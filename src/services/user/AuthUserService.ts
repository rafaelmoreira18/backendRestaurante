import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({email, password}: AuthRequest){

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("User/password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        return{ok: true}
        if(!passwordMatch){
            throw new Error("User/passwird incorrect")
        }
        
    }
}

export {AuthUserService}
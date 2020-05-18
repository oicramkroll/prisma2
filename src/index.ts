import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

const createUser = async ()=>{
    const resp =  await prisma.user.create({
        data:{
            email:'marcio.sena@gmail.com',
            name:'Marcio',
            Post:{
                create:[
                    {title:'post1'},
                    {title:'post2'},
                ]
            }
        
        }
    });
    console.log(resp);
}

const findAllUser = async()=>{
    const allUsers = await prisma.user.findMany({
        include:{
            Post:true
        }
    });
    console.log(allUsers);
}
const findAllUserRaw = async()=>{
    const allUsers = await prisma.raw('SELECT * FROM USER ')
    console.log(allUsers);
}
//createUser();
//findAllUser();
findAllUserRaw();
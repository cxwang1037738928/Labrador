// /backend/prisma/createsu.js

// Takes three command line arguments, name, email, and password, to create an admin user

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const args = process.argv.splice(2); // omit node and file path

if (!args){
    console.log("No arguments are provided");
};

if(args.length !== 3){
    console.log("three arguments required");
    process.exit(1);
};

const [name, email, password] = args;

// creates an admin user with the information specified in the console
const CreateAdmin = async() => {
    try{
    const user = await prisma.user.create(
        {
            data: {
                name,
                email,
                role: 'admin',
                password
            },
        }
    );

    console.log(`user created: ${user.name}
                               ${user.email}
                               ${user.password}`)
    }catch (err){
        console.log(err)
    }finally{

    }
};

CreateAdmin();


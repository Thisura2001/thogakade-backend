import {PrismaClient} from "@prisma/client";
import Customer from "../Model/Customer";

const prisma =new PrismaClient();

export async function addCustomer(cus:Customer){
    try {
        const customer = await prisma.customers.create({
            data:{
                id:cus.id,
                name:cus.name,
                nic:cus.nic,
                email:cus.email,
                phone:cus.phone
            }
        })
        console.log("Customer added ",customer)
        return customer;
    }catch (err){
        console.log("Error adding customers ",err)
    }
}
export async function deleteCustomer(id:string){
    try {
        const deletedCustomer = await prisma.customers.delete({
            where:{
                id:id
            }
        })
        console.log("Customer deleted!",deletedCustomer);
        return deletedCustomer;
    }catch (err){
        console.log("Error deleting customer ",err);
    }
}
export async function updateCustomer(id:string,cus:Customer){
    try {
        const updatedCustomer = await prisma.customers.update({
            where:{id:id},
            data:{
                name:cus.name,
                nic:cus.nic,
                email:cus.email,
                phone:cus.phone
            }
        })
        console.log("Customer updated ",updatedCustomer);
        return updatedCustomer;
    }catch (err){
        console.log("Error updating customer ",err);
    }
}
export async function getAllCustomers(){
    try {
        return await prisma.customers.findMany()
    }catch (err){
        console.log("Error getting customers ",err)
    }
}
import {PrismaClient} from "@prisma/client";
import Item from "../Model/Item";

const prisma = new PrismaClient();

export async function addItems(i:Item){
    try{
        const addedItem = await prisma.items.create({
            data:{
                id:i.id,
                name:i.name,
                price:i.price,
                quantity:i.quantity
            }
        })
        console.log("Item added ",addedItem)
        return addedItem;
    }catch (err){
        console.log("Error adding Items ",err)
    }
}
export async function deleteItem(id:number){
    try {
        const deleteItem = await prisma.items.delete({
            where:{
                id:id
            }
        })
        console.log("Item deleted ",deleteItem);
        return deleteItem
    }catch (err){
        console.log("Error deleting item ",err)
    }
}
export async function updateItems(id:number,i:Item){
    try {
        const updatedItem = await prisma.items.update({
            where:{id:id},
            data:{
                name:i.name,
                price:i.price,
                quantity:i.quantity
            }
        })
        console.log("itemUpdated ",updatedItem)
        return updatedItem;
    }catch (err){
        console.log("Error updating items ",err)
    }
}
export async function getAllItems(){
    try {
       return await prisma.items.findMany();
    }catch (err){
        console.log("Error getting items ",err)
    }
}
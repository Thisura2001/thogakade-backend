import express from "express";
import {addItems, deleteItem, getAllItems, updateItems} from "../Database/Item-data-Store";
import Item from "../Model/Item";
import test, {it} from "node:test";

const router = express.Router();

router.use('/view',async (req,res,next)=>{
    try{
        const items = await getAllItems();
        res.json(items)
    }catch (err){
        console.log("Error getting items ",err)
    }
})
router.use('/add',async (req,res,next)=>{
    const item:Item = req.body
    try{
        const add = await addItems(item)
        res.json(add)
    }catch (err){
        console.log("Error Adding items ",err)
    }
})
router.use('/update/:id',async (req,res,next)=>{
    const id:string =req.params.id
    const item:Item = req.body
    try{
        const updated = await updateItems(id,item);
        res.json(updated)
    }catch (err){
        console.log("Error Updating items ",err)
    }
})
router.use('/delete/:id',async (req,res,next)=>{
    const id:string =req.params.id
    try{
        const deleted = await deleteItem(id);
        res.json(deleted)
    }catch (err){
        console.log("Error Deleting items ",err)
    }
})
export default router;
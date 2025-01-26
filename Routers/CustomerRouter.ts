import express from "express";
import {addCustomer, deleteCustomer, getAllCustomers, updateCustomer} from "../Database/Customer-data-store";
import Customer from "../Model/Customer";

const router = express.Router();

router.use('/view',async (req, res, next) => {
    try {
        const customer = await getAllCustomers()
        res.json(customer);
    } catch (err) {
        console.log("Error getting customers ", err)
    }
})
router.use('/add',async (req, res, next) => {
    const cust:Customer = req.body
    try {
        const customer = await addCustomer(cust);
        res.json(customer);
    } catch (err) {
        console.log("Error adding customer ", err)
    }
})
router.use('/delete/:id', async (req,res,next)=>{
    const id:string = req.params.id
    try {
        const deleted = await deleteCustomer(id)
        res.json(deleted)
    }catch (err){
        console.log("Error deleting customer ",err)
    }
})
router.use('/update/:id', async (req,res,next)=>{
    const id:string = req.params.id
    const customer:Customer = req.body
    try{
        const updated = await updateCustomer(id,customer);
        res.json(updated);
    }catch (err){
        console.log("Error updating customer ",err)
    }
})
export default router;
import express from 'express';
import cors from 'cors';
import CustomerRouter from "./Routers/CustomerRouter";
import ItemRouter from "./Routers/ItemRouter";

const app = express();
app.use(express.json())
app.use(cors())

app.use('/customers',CustomerRouter)
app.use('/items',ItemRouter)

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
import exp from "express"
import env from 'dotenv'
import qrcode from "qrcode"
import cors from 'cors'

const app = exp();
env.config();
app.use(cors());
app.use(exp.json());


app.post('/qrcode',async (req,res)=>{
   try{
    const {link} = req.body;
    const QR =  await qrcode.toDataURL(link);
    res.status(201);
    res.send(QR);
   }catch(err){
    res.status(500);
    res.json({remark:"internal Error"});
   }
})

app.listen(process.env.PORT,()=>{console.log(`server running on ${process.env.PORT}`)});

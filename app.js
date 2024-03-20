import dotenv from 'dotenv';
dotenv.config();
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from './Src/DB/index.js';
import express from 'express';
const app = express();
const port = process.env.port || 3000;


connectDB().then(() => {
    app.listen(port, () => {
        console.log("app listingin")
    })
}
).catch((E) => {

})

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended:true, limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("got the first commad  ")
})

app.get('/api/login', (req, res) => {
    res.send('<h1>ruk krte h login</h1>')
})

app.get('/jokes', (req, res) => {
    res.send(
        [
            {
                title: "first joke"
            },
            {
                title: "second joke"
            }, {
                title: "third joke"
            }, {
                title: "fourth joke"
            }, {
                title: "fifth joke"
            },
        ]
    )
})
import express from 'express';
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from 'mongoose';

import {connectToSocket} from "./controllers/socketManager.js";

import cors from 'cors';
import userRoutes from "./routes/user.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);



app.set("port",(process.env.PORT || 8000));

app.use(express.json());
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb" , extended: true}));

app.use("/api/v1/users", userRoutes);
//app.use("/api/v2/users", newUserRoutes);

app.get("/home", (req, res) => {
       return    res.json({"hello": "world"});
    }
);

const start = async() => {

    app.set("mongo_user")
            const connectionDB = await mongoose.connect("mongodb+srv://kc5976936_db_user:fYo6OeHmkBg0QM7Q@voxa12.7ps3uuq.mongodb.net/");
         
            console.log(`MONGODB connected to : ${connectionDB.connection.host}`);
           server.listen( app.get("port"), () => {
           console.log("listening on port 8000");
    });
}

start();
import cors from "cors";
import express from "express";
import morgan from "morgan";
import indexRouter from "./routers/indexRouter";


const server = express ();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use(indexRouter)

export default server;
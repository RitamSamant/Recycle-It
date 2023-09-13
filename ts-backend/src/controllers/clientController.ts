import { Request,Response } from "express";
import Client from "../models/client";
import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'

const PASS_KEY : any = process.env.PASS_KEY

const clientRegister : any = async (req:Request, res:Response) => {
    const { name, email, password, address, bankAccount } = req.body;
    const client  = await Client.findOne({ email });
    if (client) {
      res.status(403).json({ message: "Client already exists" });
    } else {
      const newClient : any = new Client({
        name,
        email,
        password,
        address,
        bankAccount,
      });
      await newClient.save();
      const token = jwt.sign({ email, role: "client" }, PASS_KEY , {
        expiresIn: "1h",
      });
      res.json({ message: "Client created successfully", token });
    }
  };
  
  const clientLogin : any = async (req:Request, res:Response) => {
    const { email, password } = req.body;
    const client = await Client.findOne({ email,password });
    if (client) {
      const token = jwt.sign({ email, role: "client" }, PASS_KEY, {
        expiresIn: "24h",
      });
      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(403).json({ message: "Invalid email or password" });
    }
}; 

async function calculatePrice(weight:number, pricePerUnit:number) {
    return new Promise((resolve):void => {
      setTimeout(() => {
        const totalPrice : number = weight * pricePerUnit;
        resolve(totalPrice);
      }, 1000);
    });
  }

  const claimedAmount : any = async (req:any, res:Response) => {
    const clientId : number = req.body.clientId;
    const newOrder : any = req.body.order;
    const { weight } = req.body;
    const pricePerKilogram : number = 25;
  
    try {
      const client = await Client.findByIdAndUpdate(clientId, {
        $push: { orders: newOrder },
      });
  
      const totalPrice : any = await calculatePrice(weight, pricePerKilogram);
      res.status(200).json({
        message: `The total price for ${weight} kg is ${totalPrice} INR.`,
        client,
      });
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  };

export default {clientRegister,clientLogin,claimedAmount}
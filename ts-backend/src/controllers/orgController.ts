import { Request,Response } from "express";
import Organization from "../models/organization";
import jwt from 'jsonwebtoken'

const PASS_KEY : any = process.env.PASS_KEY

const registerOrg : any = async (req:Request, res:Response) => {
    const { name, buisnessEmail, password, address, buisnessBankAccount } =
      req.body;
    const org = await Organization.findOne({ buisnessEmail });
    if (org) {
      res.status(403).json({ message: "Organization already exists" });
    } else {
      const newOrg : any = new Organization({
        name,
        buisnessEmail,
        password,
        address,
        buisnessBankAccount,
      });
      await newOrg.save();
      const token = jwt.sign(
        { buisnessEmail, role: "organization" },
        PASS_KEY,
        {
          expiresIn: "1h",
        }
      );
      res.json({ message: "Organization added successfully", token });
    }
  };

  const orgLogin : any = async (req:Request, res:Response) => {
    const { buisnessEmail, password } = req.body;
    const org = await Organization.findOne({ buisnessEmail, password });
    if (org) {
      const token = jwt.sign(
        { buisnessEmail, role: "organization" },
        PASS_KEY,
        {
          expiresIn: "24h",
        }
      );
      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(403).json({ message: "Invalid email or password" });
    }
  };

  async function calculatePrice(weight:number, pricePerUnit:number) {
    return new Promise((resolve) : void => {
      setTimeout(() => {
        const totalPrice : number = weight * pricePerUnit;
        resolve(totalPrice);
      }, 1000);
    });
  }
  
  const overall : any = async (req:any, res:Response) => {
    try {
      const { weight } = req.body;
      const pricePerKilogram = 25;
  
      const totalPrice : any = await calculatePrice(weight, pricePerKilogram);
      res.json({
        message: `Overall price for ${weight} kg is ${totalPrice} INR.`,
      });
    } catch (error) {
      res.status(403).json({ message: "an error occured" });
    }
  };
   
 export default {registerOrg,orgLogin,overall} 
import { Request,Response } from "express";
import User from "../models/user";
import Client from "../models/client";
import Products from "../models/products";
import Organization from "../models/organization";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const PASS_KEY : any = process.env.PASS_KEY

//for direct warehouse user or small buisness
const register : any = async (req:Request, res:Response) => {
    const { email, password, phone, address, pincode, username } = req.body;
  
    const user = await User.findOne({ email });
    if (user) {
      res.status(403).json({ message: "User already exists" });
    } else {
      const newUser : any = new User({
        email,
        password,
        phone,
        address,
        pincode,
        username,
      });
      await newUser.save();
      const token = jwt.sign({ email, role: "user" },PASS_KEY , {
        expiresIn: "1h",
      });
      res.json({ message: "User created successfully", token });
    }
  };

  const login : any = async (req:Request, res:Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      const token = jwt.sign({ email, role: "user" },PASS_KEY, {
        expiresIn: "24h",
      });
      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(403).json({ message: "Invalid email or password" });
    }
  };
  
  const getProducts : any = async (req:any, res:Response) => {
    const products = await Products.find({});
    res.json({ products });
};

const orderProduct : any = async (req:any, res:Response) => {
    const product : any = await Products.findById(req.params.productid);
    if (product) {
      const user = await User.findOne({ email: req.user.email });
      if (user) {
        user.order.push(product);
        await user.save();
        res.json({ message: "product ordered successfully" });
      } else {
        res.status(403).json({ message: "User not found" });
      }
    } else {
      res.status(404).json({ message: "product not found" });
    }
  };
  
  const orderedHistory : any = async (req:any, res:Response) => {
    try {
      const user : any = await User.findOne({ email: req.user.email }).populate(
        "order"
      );
      if (user) {
        res.status(200).json({ order: user.order || [] });
      } else {
        res.status(404).json("User not find");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const addinWishlist:any = async (req:any, res:Response) => {
    const product : any = await Products.findById(req.params.productid);
    if (product) {
      const user = await User.findOne({ email: req.user.email });
      if (user) {
        user.wishlistedProduct.push(product);
        await user.save();
        res.json({ message: "Product is in your wishlist" });
      } else {
        res.status(403).json({ message: "User not found" });
      }
    } else {
      res.status(404).json({ message: "product not found" });
    }
  };
  
  const wishlistedItems : any = async (req:any, res:Response) => {
    const user : any = await User.findOne({ email: req.user.email }).populate(
      "wishlistedProduct"
    );
    if (user) {
      res.json({ wishlistedProduct: user.wishlistedProduct || [] });
    } else {
      res.status(403).json({ message: "User not found" });
    }
  } 

  const orderProduct2 : any = async (req:any, res:Response) => {
    const product : any = await Products.findById(req.params.productid);
    if (product) {
      const user = await Client.findOne({ email: req.user.email });
      if (user) {
        user.orderforclient.push(product);
        await user.save();
  
        res.json({ message: "product ordered successfully" });
      } else {
        res.status(403).json({ message: "User not found" });
      }
    } else {
      res.status(404).json({ message: "product not found" });
    }
  };
  
  const orderedHistory2 : any = async (req:any, res:Response) => {
    try {
      const user : any = await Client.findOne({ email: req.user.email }).populate(
        "orderforclient"
      );
      if (user) {
        
        res.status(200).json({ orderforclient: user.orderforclient || [] });
      } else {
        res.status(404).json("User not find");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
   
  const addinWishlist2 : any = async (req:any, res:Response) => {
    const product : any = await Products.findById(req.params.productid);
    if (product) {
      const user = await Client.findOne({ email: req.user.email });
      if (user) {
        user.wishlistforClient.push(product);
        await user.save();
        res.json({ message: "Product is in your wishlist" });
      } else {
        res.status(403).json({ message: "User not found" });
      }
    } else {
      res.status(404).json({ message: "product not found" });
    }
  }; 
 
  const wishlistedItems2 : any = async (req:any, res:Response) => {
    const user : any = await Client.findOne({ email: req.user.email }).populate(
      "wishlistforClient"
    );
    if (user) {
      res.json({ wishlistforClient: user.wishlistforClient || [] });
    } else {
      res.status(403).json({ message: "User not found" });
    }
  };

  const orderProduct3 : any = async (req:any, res:Response) => {
    const product : any = await Products.findById(req.params.productid);
    if (product) {
      const org = await Organization.findOne({ buisnessEmail: req.user.buisnessEmail });
      if (org) {
        org.orderforOrg.push(product);
        await org.save();
        res.json({ message: "product ordered successfully" });
      } else {
        res.status(403).json({ message: "Organization not found" });
      }
    } else {
      res.status(404).json({ message: "product not found" });
    }
  };

  const orderedHistory3 : any = async (req:any, res:Response) => {
    try {
      const org = await Organization.findOne({
        buisnessEmail: req.user.buisnessEmail,
      }).populate("orderforOrg");
      if (org) {
        res.status(200).json({ orderforOrg: org.orderforOrg || [] });
      } else {
        res.status(404).json("Organization not find");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const addinWishlist3 : any = async (req:any, res:Response) => {
    const product : any = await Products.findById(req.params.productid);
    if (product) {
      const org = await Organization.findOne({ buisnessEmail: req.user.buisnessEmail });
      if (org) {
        org.wishlistforOrg.push(product);
        await org.save();
        res.json({ message: "Product is in your wishlist" });
      } else {
        res.status(403).json({ message: "Organization not found" });
      }
    } else {
      res.status(404).json({ message: "product not found" });
    }
  };
  
  const wishlistedItems3 : any = async (req:any, res:Response) => {
    const org = await Organization.findOne({
      buisnessEmail: req.user.buisnessEmail,
    }).populate("wishlistforOrg");
    if (org) {
      res.json({ wishlistforOrg: org.wishlistforOrg || [] });
    } else {
      res.status(403).json({ message: "Org not found" });
    }
  };
  
  export default {
    register,
    login,
    getProducts,
    orderProduct,
    orderedHistory,
    addinWishlist,
    wishlistedItems,

    orderProduct2,
    orderedHistory2,
    addinWishlist2,
    wishlistedItems2,

    orderProduct3,
    orderedHistory3,
    addinWishlist3,
    wishlistedItems3,
  }
  
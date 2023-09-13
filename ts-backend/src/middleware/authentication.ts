import { Response,NextFunction } from 'express';
import jwt from 'jsonwebtoken'

const authentication = (req:any, res:Response, next:NextFunction) => {
    const PASS_KEY : any = process.env.PASS_KEY
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token,PASS_KEY , (err:any, user:any) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  };
  
export default authentication
  
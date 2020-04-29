import {Injectable, NestMiddleware} from "@nestjs/common";
import {JWT_SECRET} from "../constants";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class GetUserMiddleware implements NestMiddleware {

  use(req: any, res: any, next: () => void): any {

    const authJwtToken = req.headers.authorization;

    if(!authJwtToken) {
      next();
      return;
    }

    try {
      const user = jwt.verify(authJwtToken, JWT_SECRET);

      if(user) {
        req['user'] = user
      }
    }
    catch (err) {
    }
    next();
  }

}

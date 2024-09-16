import { ExtendedRequest } from "../../interfaces/extendedRequest.interface";
import UserTable from "../models/userTable/user";
import { Response } from "express";
import { verify } from "jsonwebtoken";
// const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || "";

const authMiddleware = async (
  req: ExtendedRequest,
  res: Response,
  next: Function
) => {
  //extract token from auth headers
  const authHeaders = req.headers["authorization"];
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(" ")[1];

  try {
    //verify and decode token payload
    const verifiedToken = verify(token, "SECRET_KEY");
    //check verified token is js object or not
    if (typeof verifiedToken !== "string") {
      const user = await UserTable.findByPk(verifiedToken.id);

      if (!user) return res.sendStatus(401);
      req.user = user.get({ plain: true });
    } else {
      throw new Error();
    }

    next();
  } catch (error) {
    res.sendStatus(401);
  }
};

export default authMiddleware;

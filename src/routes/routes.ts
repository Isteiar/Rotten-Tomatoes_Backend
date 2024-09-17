import express,{Response} from "express";
import authMiddleware from "../middleware/auth.middleware";
import { ExtendedRequest } from "../../interfaces/extendedRequest.interface";
import { createUser, login } from "../controllers/createUser.controller";


const router = express.Router();

router.post("/signup", createUser);

router.post("/login", login);

router.get("/getMovies", authMiddleware, (req:ExtendedRequest, res:Response) => {
  res.send();
});

export { router };

import express,{Response} from "express";
import { login, createUser } from "../controllers/userSignupLogin.controller";
import authMiddleware from "../middleware/auth.middleware";
import { ExtendedRequest } from "../../interfaces/extendedRequest.interface";


const router = express.Router();

router.post("/signup", createUser);

router.post("/login", login);

router.get("/getMovies", authMiddleware, (req:ExtendedRequest, res:Response) => {
  res.send(["Auth is working"]);
});

export { router };

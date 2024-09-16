import { Request, Response } from "express";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import UserTable from "../models/userTable/user";

const createUser = async (req: Request, res: Response) => {
  const { userName, email, password } = req.body;
  try {
    // Check if user with the same email already exists
    const userAlreadyExit = await UserTable.findOne({ where: { email } });
    if (userAlreadyExit) {
      return res
        .status(409)
        .json({ error: "Conflict", message: "User with email already exists" });
    }

    //password hashing
    const hashPassword = await hash(password, 10);

    // Create a new user instance
    const newUser = await UserTable.create({
      userName,
      email,
      password: hashPassword,
    });

    res.status(201).send(newUser);
  } catch (error) {
    // Handle errors
    res.status(400).json({ error, message: "Could not create user" });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await UserTable.findOne({ where: { email } });
    //if we found no user
    if (!user) {
      res
        .status(401)
        .send({ success: false, message: "No user with the email is found" });
      return;
    }

    //check if the password is valid or not
    const validPassword = await compare(password, user.password);

    if (!validPassword) {
      res.status(401).send({ success: false, message: "Incorrect password" });
      return;
    }

    //Genrate jwt token
    const accessToken = sign({ id: user.id }, "SECRET_KEY");
    res.send({ access_token: accessToken });
  } catch (error) {
    //handle error
    res
      .status(401)
      .send({ error, message: "Username or password is incorrect" });
  }
};
export { createUser, login };

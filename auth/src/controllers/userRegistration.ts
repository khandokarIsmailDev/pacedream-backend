import { NextFunction, Request, Response } from "express";
import prisma from "../prisma";
import { UserCreateSchema } from "../schemas";
import { AccountStatus } from "@prisma/client";

const userRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsedBody = UserCreateSchema.safeParse(req.body);
    if (!parsedBody.success) {
      res.status(400).json({ message: "invalid-request-body" });
      return;
    }

    //check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        auth0Id: parsedBody.data.auth0Id,
      },
    });
    if (existingUser) {
      res.status(400).json({ message: "user-already-exists" });
      return;
    }

    const userData = {
      ...parsedBody.data,
      auth0Id: parsedBody.data.auth0Id || "",
      status: parsedBody.data.status as AccountStatus | undefined,
    };

    const user = await prisma.user.create({
      data: userData,
    });
    res.status(201).json({
      message: "user-created-successfully",
      data: user,
    });
    return;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default userRegistration;

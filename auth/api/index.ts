import app from "../src/index";
import { Request, Response } from 'express';

const handler = async (req: Request, res: Response) => {
  return app(req, res);
};

export default handler;
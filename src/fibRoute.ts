// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  const num: number = parseInt(req.params.num);

  if (isNaN(num)) {
    return res.status(400).send("Invalid number parameter");
  }

  const fibN = (fibonacci as (n: number) => number)(num);
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};

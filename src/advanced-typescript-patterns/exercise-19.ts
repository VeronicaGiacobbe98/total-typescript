import { Request, Response, NextFunction, RequestHandler } from "express";
import { ParsedQs } from "qs";

const makeTypeSafeGet = <TQuery extends ParsedQs>(
  parser: (queryParams: Request["query"]) => TQuery,
  handler: RequestHandler<any, any, any, TQuery>
) => {
  return (
    req: Request<any, any, any, TQuery>,
    res: Response,
    next: NextFunction
  ) => {
    let parsedQuery: TQuery;

    try {
      parsedQuery = parser(req.query);
    } catch (e) {
      res.status(400).send("Invalid query: " + (e as Error).message);
      return;
    }

    (req.query as unknown) = parsedQuery;

    return handler(req, res, next);
  };
};

const getUser = makeTypeSafeGet(
  (query) => {
    if (typeof query.id !== "string") {
      throw new Error("You must pass an id");
    }

    return {
      id: query.id,
    };
  },
  (req, res) => {
    res.json({
      id: req.query.id,
      name: "Matt",
    });
  }
);

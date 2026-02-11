import { ValidationError } from "@/applicaiton/exceptions/validation-error";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { createRouteHandler } from "uploadthing/express";
import { rootController } from "./controllers";
import { uploadRouter } from "./uploadthing";

const app = express();

app.use(cors());
app.use(morgan("tiny"));

app.use(bodyParser.json());

function errorHandler(err: any, req: any, res: any, next: any) {
  console.log(err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500);
  if (err instanceof ValidationError) {
    return res.json({
      type: "https://example.com/probs/invalid-params",
      title: "Invalid params",
      status: 0,
      detail: err.message,
      instance: req.path,
      errors: err.errors,
    });
  }
  res.json({ err });
}

app.use("/v1", rootController);

app.use(
  "/v1/uploadthing",
  createRouteHandler({
    router: uploadRouter,
  }),
);

app.use(errorHandler);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

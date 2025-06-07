import { Request, Response } from "express";
import { ApiResponse, asyncHandler } from "express-strategy";

export class HealthCheck {
  heathCheck = asyncHandler(async (req: Request, res: Response) => {
    const heathCheckStatus = {
      status: "OK",
      timeStamp: new Date().toISOString(),
    };

    res
      .status(200)
      .json(new ApiResponse(200, heathCheckStatus, "Feet and fine"));
  });
}

import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { object, string, number } from "yup";

interface ResData {
  status: string;
}

let FormSchema = object({
  email: string().trim().email().required(),
  firstName: string().required(),
  lastName: string().required(),
  contactNumber: number().required(), //TODO: check min and max value
  message: string().required(),
});

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) => {
  if (req.method === "POST") {
    try {
      const body = req.body;
      await FormSchema.validate(body);

      return res.status(400).json({ status: "Message not accepted" });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ status: "Something went wrong" });
    }
  }
  return res.status(400).json({ status: "Action not supported" });
};

export default handler;

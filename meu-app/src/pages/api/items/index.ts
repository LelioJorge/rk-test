import { NextApiRequest, NextApiResponse } from "next"
import { items } from "../../../features/items/data"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  res.status(200).json(items)

}
import { NextApiRequest, NextApiResponse } from "next"
import { items } from "../../../features/items/data"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { slug } = req.query

  const item = items.find(i => i.slug === slug)

  res.status(200).json(item)

}
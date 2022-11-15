// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Todo } from '../../components/Todo'
import fs from "fs/promises"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  if(req.method === "POST") {
    await fs.writeFile("./data.json", req.body);
    res.status(200).send();
  }
  res.status(500).send();
}

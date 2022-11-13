// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//GET /items/:collection
//SEARCH /items/:collection

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch('localhost:8055/items/article')

  res.status(200).json({ name: 'John Doe' })
}

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  code: number
  users: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users: string[] = ['Alice', 'Bob', 'Charlie']
  res.status(200).json({
    code: 0,
    users,
  })
}

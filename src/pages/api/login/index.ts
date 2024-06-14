import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    code: number
    users: string[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const users:any = {
        token: '112321dadadjdvasda',
        username: 'admin',
        phone: "+79856456",
    }
    res.status(200).json({
        code: 0,
        users,
    })
}

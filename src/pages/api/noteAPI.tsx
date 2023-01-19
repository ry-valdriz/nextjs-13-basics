import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    //get data submitted in req body
    // const body = req.body;

    // console.log({ query: req.query, res });
    // console.log({ body });re

    res.status(200).json({ test: "okay" });
}
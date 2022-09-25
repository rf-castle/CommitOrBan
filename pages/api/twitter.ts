// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {postImageToTwitter} from "../../lib/twitter";
import {pickImage} from '../../lib/image';

type Data = {
  // name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> {
  if (req.method !== 'POST'){
    res.status(404).send("")
    return;
  }
  const token = req.headers["token"];
  const secret = req.headers["token_secret"]
  const image = req.body;
  if (typeof token !== "string" || typeof secret !== "string" || typeof image !== "string"){
    res.status(400).send("");
    return;
  }
  try{
    await postImageToTwitter(token, secret, image)
  }
  catch (e){
    console.error(e)
    res.status(500).send("")
    return;
  }
  res.status(200).send("");
}

import Twitter from 'twitter';
import {TWITTER_CLIENT_ID, TWITTER_CLIENT_SECRET} from '../constant';


export const postImageToTwitter = async (token: string, token_secret: string, imageData: any): Promise<void> => {
  const client = new Twitter({
    consumer_key: TWITTER_CLIENT_ID,
    consumer_secret: TWITTER_CLIENT_SECRET,
    access_token_key: token,
    access_token_secret: token_secret
  });
  const params =
      typeof imageData === "string"
      ? {media_data: imageData}
      : {media: imageData}
  const media = await client.post('media/upload', params);
  await client.post(
      "statuses/update",
      {
        media_ids: media.media_id_string,
      });
}

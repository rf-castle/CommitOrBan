import {readdirSync, readFileSync} from 'fs';


export const pickImage = () => {
  const imageArray = readdirSync('./images/').filter(file => {
    return file.endsWith(".png")
  });
  const index = Math.floor(imageArray.length * Math.random());
  const image = imageArray[index]
  console.log(image)
  return readFileSync(`./images/${image}`)
}
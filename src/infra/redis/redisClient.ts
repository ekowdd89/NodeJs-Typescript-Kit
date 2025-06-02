import { createClient } from "redis";

const redisClient = createClient()

redisClient.on('error', (err)=> console.log(err))
export const initRedis = () => redisClient.connect().catch((error) => console.log(error))

export {
    redisClient
}
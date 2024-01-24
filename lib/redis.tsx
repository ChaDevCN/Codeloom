
import { Password, Username, REDIS } from "@/utils/type";
import Redis from "ioredis"

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || ''),
    password: process.env.REDIS_PWD
})

export async function addUser(username: Username, password: Password) {
    // @ts-ignore
    await redis.hset(REDIS.USERS, [username], password);
    return {
        name: username,
        username
    }
}

export async function getUser(username: Username, password: Password) {
    const passwordFromDB = await redis.hget(REDIS.USERS, username)
    if (!passwordFromDB) return 0
    if (passwordFromDB !== password) return 1
    return {
        name: username,
        username
    }
}

// utils/redis.js

const Redis = require("ioredis")

const redis = {
    port : 6379, //redis默认端口
    host : '127.0.0.1', 
    db:0,
    family:4, // 4 (IPv4) or 6 (IPv6)
    password: '123789'
}

module.exports = new Redis(redis)
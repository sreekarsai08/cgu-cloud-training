const { createClient } = require('redis');
const client = createClient({'host': 'rediscluster.ahvfts.ng.0001.aps1.cache.amazonaws.com', 'port': 6379});

client.on('error', err => console.log('Redis Client Error', err));

let getFromRedis = async () => {
    return new Promise(async (resolve, reject) => {
        await client.connect();
        console.log('Connected to Redis');
        return resolve(true);
    });
}

module.exports = {
    getFromRedis
}
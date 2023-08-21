const redis = require('redis');

let getFromRedis = async () => {
    return new Promise((resolve, reject) => {
        let client = redis.createClient({
            host: 'rediscluster.ahvfts.ng.0001.aps1.cache.amazonaws.com',
            port: 6379
        });
        client.on('connect', () => {
            console.log('Redis client connected');
        });
        client.on('error', (err) => {
            console.log(`Something went wrong ${err}`);
            reject(err);
        });
        client.get('students', (err, reply) => {
            if (err) {
                console.log(`Error: ${err}`);
                reject(err);
            }
            console.log(`Reply: ${reply}`);
            resolve(reply);
        });
    });
}

module.exports = {
    getFromRedis
}
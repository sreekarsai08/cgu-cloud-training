const express = require('express');

const app = express();

const mysqlutils = require('./mysqlutils');
const dynamodbutils = require('./dynamodbutils');
const redisutils = require('./redisutils');

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.get('/students', async (req, res) => {
    try {
        let redisCacheData = await redisutils.getFromRedis();
        res.send(redisCacheData);
        // if (redisCacheData) {
        //     console.log('Data from Redis Cache');
        //     res.send(redisCacheData);
        // } else {
        //     console.log('Data from MySQL');
        //     let response  = await mysqlutils.getStudentsdatafromRDS();
        //     res.send(response);
        // }
    } catch (error) {
        console.log(`Error: ${error}`);
        // 400 response code
        res.sendStatus(400);
    }
});

app.get('/dynamodb/students', async (req, res) => {
    try {
        let response  = await dynamodbutils.getDataFromDynamoDB();
        res.send(response);
    } catch (error) {
        console.log(`Error: ${error}`);
        // 400 response code
        res.sendStatus(400);
    }
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    });
    
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const apiKey = process.env.API_KEY;

console.log(`Database Host: ${dbHost}`);
console.log(`Database Port: ${dbPort}`);
console.log(`API Key: ${apiKey}`);

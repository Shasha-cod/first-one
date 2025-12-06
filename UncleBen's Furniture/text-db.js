// test-db.js
require('dotenv').config();
const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

async function testConnection() {
  try {
    await sql.connect(config);
    console.log('✅ Connected to MSSQL successfully!');
    const result = await sql.query('SELECT 1 AS test');
    console.log('Test query result:', result.recordset);
    sql.close();
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
}

testConnection();


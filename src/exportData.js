import pg from "pg";
const { Client } = pg;

import fs from "fs";

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "ticket_place",
  password: "RindraMijoro",
  port: 5432,
});

async function exportData() {
  try {
    await client.connect();

    const tables = ["users", "events", "tickets", "reservations"];
    const data = {};

    for (const table of tables) {
      const res = await client.query(`SELECT * FROM ${table}`);
      data[table] = res.rows;
    }

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
    console.log("Data exported successfully to data.json");
  } catch (err) {
    console.error("Error exporting data:", err);
  } finally {
    await client.end();
  }
}

exportData();

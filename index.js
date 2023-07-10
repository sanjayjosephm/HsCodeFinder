
const express = require("express");
const app = express();
const path = require('path');
const { Client } = require('pg');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/data", function (req, res) {
    const client = new Client({
        host: 'localhost',
        user: 'postgres',
        database: 'postgres',
        password: 'root',
        port: 5432,
    });

    client.connect(function (err) {
        if (err) {
            console.error("Failed to connect to the database:", err.message);
            res.sendStatus(500);
            return;
        }

        if (req.body.hsCodeValue) {
            const hsCode = req.body.hsCodeValue;
            client.query(`SELECT * FROM public."hscodechapters" WHERE "hscode" = $1`,[hsCode], (err, result) => {
                client.end();

                if (err) {
                    console.error("Failed to execute the query:", err.message);
                    res.sendStatus(500);
                    return;
                }

                if (result.rowCount > 0) {
                    const description = result.rows[0].hsdescription;
                    console.log(description)
                    res.json({ description });
                } else {
                    res.json({ description: "No description found" });
                }
            });
        } else if (req.body.hsDescription) {
            const hsDescription = req.body.hsDescription;
            client.query(`SELECT * FROM public."hscodechapters" WHERE "hsdescription" = $1`, [hsDescription], (err, result) => {
                client.end(); // Close the database connection

                if (err) {
                    console.error("Failed to execute the query:", err.message);
                    res.sendStatus(500);
                    return;
                }

                if (result.rowCount > 0) {
                    const code = result.rows[0].hscode;
                    res.json({ code });
                } else {
                    res.json({ code: "No code found" });
                }
            });
        } else {
            res.sendStatus(400); // Bad request if neither hsCode nor hsDescription is provided
        }
    });
});

app.listen(3000, function () {
    console.log("Server is running on localhost:3000");
});

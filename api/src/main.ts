/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

const app = express();
const axios = require("axios");
const apicache = require("apicache")
const cache = apicache.middleware

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(cache('5 minutes'))

app.get("/api", async (req, res) => {
  try {
    const drinkPromise = axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    const banksPromise = axios.get("https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v3/places", { headers: { "WEB-API-key": "58861fa4-1659-4e02-b7d8-847036c094fb" }})

    const [drinkResponse, banksResponse] = await Promise.all([drinkPromise, banksPromise]);

    const { data : {drinks = []} } = drinkResponse;
    const { data: {items: banks = []} } = banksResponse;

    const response = {
      status: 200,
      message: "success",
      data: {
        drink: drinks[0],
        banks: banks.filter((bank: {city: string, type: string, state:string}) => bank.city === 'Brno' && bank.type === 'BRANCH' && bank.state === 'OPEN'),
      },
    };

    return res.json(response);
  } catch (err) {
    return res.json({ message: err, status: res.statusCode });
  }
});

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);

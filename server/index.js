const bodyParser = require('body-parser');
const yelp = require('yelp-fusion');
const cors = require('cors')
const express = require('express');
const app = express();

require('dotenv').config()
const apiKey = process.env.API_KEY;

const searchRequest = {
  term: '',
  location: 'port charlotte, fl'
};

const client = yelp.client(apiKey);

const search = async () => {
  const result = await client.search(searchRequest).then(response => {
    const results = response.jsonBody;
    //const firstResult = response.jsonBody.businesses[0];
    return results;
    //return firstResult;
  });
  return result;
}

const searchTerm = async (term, location) => {
  const result = await client.search({
    term,
    location
  }).then(response => {
    return response.jsonBody;
  });
  return result;
}

// client.search(searchRequest).then(response => {
//   const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);
// }).catch(e => {
//   console.log(e);
// });

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res, next) => {
  const result2 = await search();
  res.send(result2)
});

app.post('/', async (req, res, next) => {
  const { term, location } = req.body;
  const results = await searchTerm(term, location);
  res.send(results);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('App started');
});
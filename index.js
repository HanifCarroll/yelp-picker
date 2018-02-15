const express = require('express');
const bodyParser = require('body-parser');
const yelp = require('yelp-fusion');
const cors = require('cors')
require('dotenv').config()
const apiKey = process.env.API_KEY;
const client = yelp.client(apiKey);
const app = express();

const searchTerm = async (term, location) => {
  const result = await client.search({
    term,
    location
  }).then(response => {
    return response.jsonBody;
  });
  return result;
}

const getReviews = async id => {
  const result = await client.reviews(id).then(response => response.jsonBody.reviews);
  return result;
}

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

app.get('/reviews/:id', async (req, res, next) => {
  const reviews = await getReviews(req.params.id);
  res.send(reviews);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('App started');
});

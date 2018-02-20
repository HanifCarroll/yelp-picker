const express = require('express');
const bodyParser = require('body-parser');
const yelp = require('yelp-fusion');
const cors = require('cors')
require('dotenv').config()
const apiKey = process.env.API_KEY;
const client = yelp.client(apiKey);
const app = express();
const path = require('path');

const searchTerm = async (term, location, radius, limit, open_now, price) => {
  const result = await client.search({
    term,
    location,
    radius,
    limit,
    open_now,
    price
  }).then(response => {
    return response.jsonBody;
  }).catch(err => {
    console.log(err)
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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.post('/api', async (req, res, next) => {
  let { term, location, radius, resultsLimit, openNow, price } = req.body;
  const results = await searchTerm(term, location, radius, resultsLimit, openNow, price);
  res.send(results);
});

app.get('/api/reviews/:id', async (req, res, next) => {
  const reviews = await getReviews(req.params.id);
  res.send(reviews);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('App started');
});

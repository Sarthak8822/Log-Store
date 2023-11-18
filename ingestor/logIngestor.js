const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const { MongoClient } = require('mongodb'); // Use MongoClient for MongoDB

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Use environment variables for configuration
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/logs';

// Use MongoClient for better scalability and connection pooling
const mongoClient = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/ingest', async (req, res) => {
  const logData = req.body;

  try {
    await mongoClient.connect();
    const db = mongoClient.db();
    const logsCollection = db.collection('logs');

    await logsCollection.insertOne(logData);

    res.status(201).json({ status: 'success', message: 'Log ingested successfully' });
  } catch (error) {
    console.error('Error ingesting log:', error);
    res.status(500).json({ status: 'error', message: 'Failed to ingest log' });
  } finally {
    await mongoClient.close();
  }
});

app.post('/search', async (req, res) => {
  const { filterType, filterValue, startDate, endDate } = req.body;

  try {
    await mongoClient.connect();
    const db = mongoClient.db();
    const logsCollection = db.collection('logs');

    let searchQuery = {};

    // Build the search query based on the provided filter type and value
    if (filterType && filterValue) {
      // Use a regular expression for partial matching
      searchQuery[filterType] = { $regex: filterValue, $options: 'i' };
    }

    // Add date range filters
    if (startDate && endDate) {
      searchQuery.timestamp = {
        $gte: new Date(startDate + 'T00:00:00Z'),
        $lte: new Date(endDate + 'T23:59:59Z'),
      };
    }

    const searchResults = await logsCollection.find(searchQuery).toArray();
    res.status(200).json(searchResults);
  } catch (error) {
    console.error('Error searching logs:', error);
    res.status(500).json({ status: 'error', message: 'Failed to search logs' });
  } finally {
    await mongoClient.close();
  }
});

app.listen(port, () => {
  console.log(`Log Ingestor is running on http://localhost:${port}`);
});

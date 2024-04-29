import express from 'express';
import { Tour } from './models/tour.model.js';
import { MongoClient, ServerApiVersion } from 'mongodb';
import {
  getTours,
  getToursWithPriceWithin,
  updateTour,
  deleteTourById
} from './functions.js';


const uri = "mongodb+srv://anisbenjemia:password48@cluster0.onpzgyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("tp").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   ///////// await client.close();
  }
}
run().catch(console.dir);

const dataB = client.db("tp");
export const tours = dataB.collection("full_tours");

export const app = express()

app.use(express.json());

// Define the route for the root URL
app.get('/', (req, res) => {
  res.send("Hello from the server");
});


app.get('/tours', getTours);
app.get('/toursWithPriceWithin', getToursWithPriceWithin);

app.put('/updateTour', updateTour);

app.delete('/deleteTourById/:id', deleteTourById);


const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

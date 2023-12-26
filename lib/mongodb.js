import { MongoClient } from 'mongodb';

if(!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const URI = process.env.MONGODB_URI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

let client;
let clientPromise;

try {
    client = new MongoClient(URI, options);
    clientPromise = client.connect();
} catch(err) {
    console.log(err);
}

export default clientPromise;

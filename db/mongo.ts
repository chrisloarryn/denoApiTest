import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";

// Initialize the plugin
await init();

const client = new MongoClient();
// client.connectWithUri(
//   "mongodb+srv://dbUser:B3D5571h9C8qOBIl@cluster0-gbqi8.mongodb.net/test?retryWrites=true&w=majority",
// );
// client.connectWithUri(
//     'mongodb+srv://chrisloarryn:AxfXLkN2gmf0exuM@cluster0-yznxk.mongodb.net/deno?retryWrites=true&w=majority',
// );
client.connectWithUri(
    'mongodb://localhost:27017/denodinos',
);


const db = client.database("denodinos");

export default db;

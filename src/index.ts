import { TWTClient } from "./twt_client.js";

const client = new TWTClient();

client
  .model("users")
  .create({ name: "John Doe" })
  .then((data) => {
    console.log(data);
  });

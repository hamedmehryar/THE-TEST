export default {
    Port: 3000,
    TestPort: 3333,
    MongoURI : "mongodb+srv://test:test@cluster0.donhm.mongodb.net/the?retryWrites=true&w=majority",
    TestMongoURI : "mongodb+srv://test:test@cluster0.oymx4.mongodb.net/thetest?retryWrites=true&w=majority"
}

//Time limitation:
//Ideally, this is not the best practice, but the configurations are hardcoded here to be included in git so you can connect to the same test db easily.
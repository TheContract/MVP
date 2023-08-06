const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://oliver:letmein6969@cluster0.xzmle9b.mongodb.net/';

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'notes'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

    const Schema = mongoose.Schema;
  

    const contractSchema = new Schema({
        userId: {type: String, required: true},
        dateCreated: {type: Date},
        whyString: {type: String},
        frequency: {type: Number},
        goal: {type: String},
        buddies: {type: Array},
        pdfLink: {type: String},
      });
      

    const Contract = mongoose.model('contract', contractSchema);


module.exports = Contract;


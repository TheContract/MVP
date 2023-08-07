

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
  

    // define tangibles schema
    const tangiblesSchema = new Schema({
        description: {type: String},
        count: {type: Number},
        numberOfWeeks: {type: Number}
      });

    const Tangibles = mongoose.model('tangibles', tangiblesSchema);


module.exports = {Tangibles, tangiblesSchema};


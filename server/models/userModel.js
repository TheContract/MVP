const mongoose = require('mongoose');
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');


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
  

    const userSchema = new Schema({
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        type: {type: String},
        contracts: {type: Array}
      });

      userSchema.pre('save', async function(next) {
        this.password = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
        console.log('THE PASSWORD IS' + this.password)
        // Remember to call `next()` unless you're using an async function or returning a promise
        next();
      });


    const ContractUser = mongoose.model('ContractUser', userSchema);


module.exports = ContractUser;


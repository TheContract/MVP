// const Contract = require('../models/contractModel.js');
// const process = require('process');

const User = require('../models/userModel.js');

require('dotenv').config();

const buddyController = {};

buddyController.notifyBuddy = async (req, res, next) => {
    try {

        const user = await User.findOne({_id: req.cookies.ssid})
        const username = user.username;
        const buddyName = req.body.buddies[0].name;
        const goal = req.body.goal;
        const number = req.body.buddies[0].phoneNumber;
        
        const messageContents = `Hi ${buddyName}, ${username} is on a mission to ${goal} and has added you as an accountability partner.`
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);
        client.messages
            .create({from: '+18332749971', body: messageContents, to: number})
            .then(message => console.log(message.sid));
        next();
    }
    catch {
        next({
            log: 'error notifying buddy',
            status: 500,
            message: { err: 'error notifying buddy'},
          })

    }
    
}

module.exports = buddyController;
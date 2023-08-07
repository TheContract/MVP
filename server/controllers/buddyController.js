// const Contract = require('../models/contractModel.js');
// const process = require('process');

require('dotenv').config();

const buddyController = {};

buddyController.notifyBuddy = async (req, res, next) => {
    try {
        const username = 'Oliver'
        const buddyName = 'James';
        const buddyNumber = '+16463428783'
        const goal = 'lose 20 pounds';
        
        const messageContents = `Hi ${buddyName}, ${username} is on a mission to ${goal} and has added you as an accountability partner.`
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);
        client.messages
            .create({from: '+18332749971', body: messageContents, to: '+16463428783'})
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
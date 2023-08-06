const Contract = require('../models/contractModel.js');


const contractController = {};

contractController.createContract = async (req, res, next) => {
    // check to ensure all the fields are filled out.
    // for now, just testing with userId
    
    // const ssid = res.locals.ssid;
    // console.log('in the contract controller now')
    // console.log('the locals are' + res.locals.ssid)
    try {
        const { ssid } = req.cookies;
        const newContract = await Contract.create({userId: ssid});
        res.locals.contract = newContract;
        return next()
    }
    catch {
        next({
            log: 'error creating contract',
            status: 500,
            message: { err: 'error creating contract'},
          })
    }
}
contractController.findContract = async (req, res, next) => {
    try {
        const { ssid } = req.cookies;
        const foundContract = await Contract.findOne({userId: ssid});
        res.locals.contract = foundContract;
        return next()
    }
    catch {
        next({
            log: 'error finding contract',
            status: 500,
            message: { err: 'error finding contract'},
          })
    }
}

module.exports = contractController;
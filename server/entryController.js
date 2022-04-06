const Entry = require('./entryModel');
const mongoose = require('mongoose'); 

const entryController = {

  createEntry(req, res, next) {
    const { location, date, notes } = req.body;
    if(!notes) {
      return next({
        log: 'entryController.createEntry missing input',
        message: { error: 'Oops! The notes field cannot be left blank.'}
      })
    }

    Entry.create({ location, date, notes})
      .then((data) => {
        console.log('the input data is:', data);
        res.locals.entries = data;
        return next();
      })
      .catch((err) => next({ err }));
  },


};


module.exports = entryController;
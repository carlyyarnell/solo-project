const Entry = require('./entryModel');
const mongoose = require('mongoose'); 

const entryController = {
//getall
//send on res.locals

  getAllEntries(req, res, next) {
    Entry.find({})
    .then((data) => {
      res.locals.gotEntries = data;
      return next();
    })
    .catch((err) => next({ err }));
  },

  createEntry(req, res, next) {
    const { location, date, notes } = req.body;
    if(!notes) {
      return next({
        log: 'entryController.createEntry missing input',
        message: { error: 'Oops! The notes field cannot be left blank.'}
      })
    }

    Entry.create({ location, date, notes })
      .then((data) => {
        console.log('the input data is:', data);
        res.locals.entries = data;
        return next();
      })
      .catch((err) => next({ err }));
  },

  // updateEntry(req, res, next) {
  //   const { title, location, date, notes} = req.body;
  //   if(!req.body){
  //     return next({ err })
  //   }
  //   const title = req.params.title;
  //   Entry.
  // }

};


module.exports = entryController;
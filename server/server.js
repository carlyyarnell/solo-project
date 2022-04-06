const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require('path');
const entryController = require('./entryController')
// const PORT = 3000;

//to handle parsing request body
app.use(express.json());

// const mongoURI = 'mongodb://localhost/solo-project';
// mongoose.connect(mongoURI);

// const connection = mongoose.connection;

// connection.once('open', function() {
//   console.log('MongoDB database connection established successfully');
// })

/**
* Set our Express view engine as ejs.
* This means whenever we call res.render, ejs will be used to compile the template.
* ejs templates are located in the client/ directory
*/
//app.set('view engine', 'ejs');
app.use('/build', express.static(path.join(__dirname, '../dist')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '/src/index.html'));
});


app.get('/', (req, res) => {
  res.status(200).send('I worked')
})
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// });
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
// });
app.get('/home', entryController.getAllEntries, (req, res) => {
  return res.status(200).json(res.locals.gotEntries)
});

 app.post('/home', entryController.createEntry, (req, res) => {
  return res.status(200).json(res.locals.entries)
 });

/**
 * 404 handler
 */
 app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
// app.use((err, req, res, next) => {
//   //console.log(err);
//   res.status(500).send('Internal Server Error');
// });

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`);
// });

app.listen(3000);


module.exports = app;
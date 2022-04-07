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
app.get('/home', (req, res) => {
  return res.status(200).send('michelle');
});

app.use('/build', express.static(path.join(__dirname, '../dist')));

// serve index.html on the route '/'
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '/src/index.html'));
// });


app.get('/', (req, res) => {
  return res.status(200).send('Im so dumb')
})
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// });
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
// });
//entryController.getAllEntries,
//.json(res.locals.gotEntries)

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
    message: { err: 'A dumb error occurred' },
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
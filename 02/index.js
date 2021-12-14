let async = require("async");

const tasksCollection = [
  function (callback) {
    setTimeout(function () {
      // do some async task
      callback(null, "one");
    }, 2000);
  },
  function (callback) {
    setTimeout(function () {
      // then do another async task
      callback(null, "two");
    }, 100);
  },
  function (callback) {
    setTimeout(function () {
      // then do another async task
      callback(null, "three");
    }, 0);
  },
  /*
  function (callback) {
    setTimeout(function () {
      // then do another async task
      callback(new Error('Erro ocorrido'));
    }, 0);
  },
  */
];

const functionError = (err, results) => {
  if(err) {
    console.log(err)
  } else {
    console.log(results);
  }
}

//Using Callbacks
async.series(tasksCollection, functionError);

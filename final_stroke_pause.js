// Waits for the document to load

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
$(document).ready(function() {

var timeout = null; // Set the initial timeout counter to zero

var keyHistory = '';
$(document).keypress(function (e) { // Look for keypresses

    keyHistory += String.fromCharCode(e.which) // Append it to the variable
    clearTimeout(timeout);
    //console.log(keyHistory);
    // Make a new timeout set to go off in 800ms
    timeout = setTimeout(function () {
        console.log(keyHistory); }, 3000);
});
});
//authenticate stuff

var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  "username": "67cb6023-5620-4d88-b465-9f2feb15fb2e",
  "password": "Ffs8UMXuESvQ"
  'version_date': '2017-09-21'
});

//POST

var parameters = {
  'text': keyHistory,

'features': {
    'entities': {
      'emotion': true,
      'sentiment': true,
      'limit': 2
    },
    'keywords': {
      'emotion': true,
      'sentiment': true,
      'limit': 2
    }
  }
}

natural_language_understanding.analyze(parameters, function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
})

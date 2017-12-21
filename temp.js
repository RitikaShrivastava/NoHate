// Waits for the document to load
$(document).ready(function() {

var timeout = null; // Set the initial timeout counter to zero

var keyHistory = '';
$(document).keypress(function (e) { // Look for keypresses

    keyHistory += String.fromCharCode(e.which) // Append it to the variable
    clearTimeout(timeout);
    //console.log(keyHistory);
    // Make a new timeout set to go off in 800ms
    timeout = setTimeout(function () {
        console.log(keyHistory);
        httpGet;
      }, 3000);

});
});
//authenticate stuff
// var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
// var natural_language_understanding = new NaturalLanguageUnderstandingV1({
//   'username': '{3205900d-74f8-4118-864c-a62f8417fce4}',
//   'password': '{NI4mBTLBQb4Z}',
//   'version_date': '2017-02-27'
// });

//POST

function httpGet()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", 'http://localhost:3000', false ); // false for synchronous request
    xmlHttp.send( keyHistory );
    return xmlHttp.responseText;
}


var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var nlu = new NaturalLanguageUnderstandingV1({
  'username': '3205900d-74f8-4118-864c-a62f8417fce4',
  'password': 'NI4mBTLBQb4Z',
  'version_date': '2017-02-27'
});
nlu.analyze({
  'html': 'I am so pissed oh my god', // Buffer or String
  'features': {

      //'emotion': true,
      'sentiment': {'targets': [
        'pissed'
      ],

    },
  }
}, function(err, response) {
     if (err)
       console.log('error:', err);
     else
       console.log(JSON.stringify(response, null, 2));
 });
// var parameters = {
//   'text': keyHistory,

// 'features': {
//     'entities': {
//       'emotion': true,
//       'sentiment': true,
//       'limit': 2
//     },
//     'keywords': {
//       'emotion': true,
//       'sentiment': true,
//       'limit': 2
//     }
//   }
// }

// natural_language_understanding.analyze(parameters, function(err, response) {
//   if (err)
//     console.log('error:', err);
//   else
//     console.log(JSON.stringify(response, null, 2));
// })

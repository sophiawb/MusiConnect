var dbparse = require('./dbparser');
var User = require('./user.js');
/**
 * Testing
**/
// removeUser('Patrick');

var Johndoe =  {
  name: "John Doe",
  username: "Johndoe",
  password: "Johndoe",
  location: "Oakland",
  uid: "0123ABC",
  email: "JohnDoe@gmail.com"
}

// console.log(patrick);
// addUser(Johndoe);

var talents = {
  'Piano': 5,
  'Guitar': 7,
  'Trumpet': 5
}

// User.find(function(err, results){
//   console.log(results);
// });
// 
// addTalents('Johndoe', talents);
// removeUser({'username': 'Patrick'});

// (User.find(function(err, results){
//   console.log(results);
// }));

// var request = new Request({
//   requester: "Patrick",
//   talents: {'Piano': 4},
//   location: 'Oakland'
// })

// request.save(function(err){
//   if(err) console.log(err);
//   console.log('successful!');
// })

// Request.find(function(err, results){
//   console.log(results);
// })

// getReqTalents('Fwewetlute', function(results){
//   console.log("People who can play the Piano" + results);
// });

// var requestOne;
// // Request.findOne(function(err, results){
// //   requestOne = results;
// //   console.log(requestOne);
// //   parseReq(requestOne, function(results){
// //     console.log("People who meet the request criteria" + results);
// //   })

// // });
// // console.log(requestOne);
// // parseReq(requestOne, function(results){
// //   console.log("People who meet the request criteria" + results);
// // })
// dbparse.getRequests(function(result){
//   console.log(result);
// })

// User.find(function(err, results){
//   console.log(results);
// })

dbparse.getUID("01234ABC", function(results){
  // if(err) console.log(err);
  console.log(results);
})
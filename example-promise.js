// function getTempCallBack(location, callback) {
//   callback(undefined, 32);
//   callback('City not found');
// }
//
// getTempCallBack('Philadelphia', function(err, temp) {
//   if ( err ) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(33);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Chernihiv').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Invalid param');
    }
  });
}

console.log(addPromise(3, 2));
console.log(addPromise(0, -60));
console.log(addPromise("0", 5));
console.log(addPromise(1));

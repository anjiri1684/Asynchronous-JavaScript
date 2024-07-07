'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

// const renderCountry = function (data, className = '') {
//   const html = ` <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = '1';
// };

///////////////////////////////////////
//https://countries-api-836d.onrender.com/countries/

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = ` <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = '1';
//   });
// };

// getCountryData('kENYA');
// getCountryData('UGANDA');
// getCountryData('TANZANIA');

// const getCountryAndNeighbour = function (country) {
//   //ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //render country 1
//     renderCountry(data);

//     //get neighbour country
//     const neighbour = data.border?.[0];
//     if (!neighbour) {
//       return;
//     }

//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('kenya');

// request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

// const request = fetch(
//   `https://countries-api-836d.onrender.com/countries/name/kenya`
// );
// console.log(request);

const getJSON = async function (url, errorMsg = 'Somthing went wrong') {
  const response = await fetch(url);
  console.log(response);
  if (!response.ok) {
    throw new Error(`${errorMsg} ${response.status}`);
  }
  return await response.json();
};

// const getCountryData = function (country) {
//   // Fetch country 1
//   getJSON(
//     `https://countries-api-836d.onrender.com/countries/name/${country}`,
//     'Country Not Found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No neighbor found');

//       // Fetch neighbor country
//       return getJSON(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
//         'Country Not Found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('Kenya');

//467106794133832494537x71220

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat}, ${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Problem with geocoding ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city} ${data.contry}`);
//     })
//     .catch(err => console.error(`${err.message} 💥`));
// };

// whereAmI(52.568, 15.908);

// console.log(`Test start`);
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log(`Test end`);

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000; i++) {
//     console.log(`Countin at ${i + 1} position`);
//   }
//   console.log(res);
// });

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win💰');
//     } else {
//       reject(new Error('You lost your money 😢'));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => console.error(err));

// //promisifying setimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log(`I waited for 2 sec`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I waited for 1 sec`);
//   });

// navigator.geolocation.getCurrentPosition(function (position) {
//   console.log(position);
//   error => console.log(error);
// });

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       img.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// createImage('./img/img-1.jpg')
//   .then(img => {
//     console.log('Image 1 loaded');
//   })
//   .catch(err => console.error(err));

// const whereAmI = async function (country) {
//   const res = await fetch(
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   const data = await res.json();
//   console.log(data[0]);
// };

// whereAmI('Kenya');
// console.log('First');

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const [data1] = await getJSON(
//       `https://countries-api-836d.onrender.com/countries/name/${c1}`
//      );
// const [data2] = await getJSON(
//   `https://countries-api-836d.onrender.com/countries/name/${c2}`
// );
// const [data3] = await getJSON(
//   `https://countries-api-836d.onrender.com/countries/name/${c3}`
// );

//     const data = await Promise.all(
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`)
//     );

//     console.log(data.map(d => d[0].capital));
//   } catch (error) {
//     console.error(error);
//   }
// };

// get3Countries('kenya', 'tanzania', 'uganda');

(async function () {
  const res = await Promise.race([
    getJSON(`https://countries-api-836d.onrender.com/countries/name/kenya`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/somalia`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/tanzania`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://countries-api-836d.onrender.com/countries/name/tanzania`),
  timeout(10),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// promise .allsettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//promise .any[es2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

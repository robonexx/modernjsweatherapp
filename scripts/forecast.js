// to make this work you have to get an API key from accuweather
// api key to accuweather can only be use 50 times a day

const key = YOUR OWN API KEY


const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// Get city informtaion

const getCity = async (city) => {
    const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};















//==============================================================================================================================================================
/* 
// testing so the get api works and gets the right data
getCity('stockholm').then(data => {
    return getWeather(data.Key);
}).then(data => {
    console.log(data);
})
.catch(err => console.log(err));  */


// get weather information test 
/* 
const getTestCity = async (city) => {
    const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

   console.log(data)
};

getTestCity('stockholm')
 */
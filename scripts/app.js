// using this js file to manipulte the dom
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
/*  get the data and set in a variable
    const cityDetails = data.cityDetails;
    const weather = data.weather;
 */

 // destructure properties from an object shorter and nicer version
 const { cityDetails, weather} = data;


    // update template with the details of city weather
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="dipslay-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
    `;

    // update night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);


  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

  // Below is using if else statement and above is using the ternary operator gives the same results

  time.setAttribute('src', timeSrc);


    // remove d-none class if present
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

        // when property is same as value you can delete prop
    return {cityDetails, weather};
};

cityForm.addEventListener('submit', e => {
    // prevent default
    e.preventDefault();

    // get the city value informataion
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    // set local storage
    localStorage.setItem('city', city);
});

if(localStorage.getItem('city')) {
    updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err))
}


// =============================================================

// if else statement for the image icon 
/* const iconSrc = `img/icons/${weather.WheaterIcon}.svg`;
    icon.setAttribute('src', iconSrc);  */
    
    /* let timeSrc = null;
    if(weather.IsDayTime) {
        timeSrc = 'img/day.svg'; 
    } else {
            timeSrc = 'img/night.svg'
        } 
        time.setAttribute('src', timeSrc);
        */
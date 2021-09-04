    // search api- openweathermap 
    // search openweathermap icon rext ( weather condition codes)

 const apiKye = `b8c4c0c616b86adb5b0272166252a1b3`;
 
const searchTemperature = () =>{
     const cityName = document.getElementById('city-name').value;
    //  console.log(cityName)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKye}&units=metric`;
    // console.log(url);
     
    fetch(url)
     .then(res => res.json())
     .then(data => dispaluTemperature(data))

    } 

const searchInnerText = (id , text ) => {
    document.getElementById(id).innerText = text;
}    
const dispaluTemperature = temperature => {
     searchInnerText('city', temperature.name );
     searchInnerText('temperature', temperature.main.temp );
     searchInnerText('condition', temperature.weather[0].main);
     console.log(temperature);
    //  set wether icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}    
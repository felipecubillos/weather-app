const getCoordenates = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js');
const city = process.argv[2];//'Boston';


    if(city){
getCoordenates(city, (error, data) => {
  if(error){
      return console.log("Error", error);
  }

  forecast(data.latitude,data.longitude,(error,forecastData)=>{
    if(error){
        return console.log(error)
    }
    console.log(data.location);
    console.log(forecastData);
})

});
} else{
console.log('Please insert a city to find');
}


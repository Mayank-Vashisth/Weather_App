
    const apiKey="1e04c58aa8da7b11206d99cec0771f6b";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");
    const inputform = document.querySelector("#inputform");
    const weatherIcon=document.querySelector(".weather-icon");

    inputform.addEventListener("click", function(event) {
      event.preventDefault();
    }
  );
    
    async function checkWeather(city){

      const response=await fetch (apiurl + city + `&appid=${apiKey}`);
      if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
      }
      else{
        var data=await response.json();

      
      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +
      "°c";
      document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
      document.querySelector(".wind").innerHTML=data.wind.speed+"Km/hr";
      if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
      }
      else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
      }
      else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
      }
      else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
      }
      else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
      }
      else if(data.weather[0].main=="Haze"){
        weatherIcon.src="https://d2h8hramu3xqoh.cloudfront.net/blog/wp-content/uploads/2022/08/Hazy-Skies-scaled.webp";
      }
      
      document.querySelector(".weather").style.display="block";
      document.querySelector(".error").style.display="none";
     }
      }
      
      searchBtn.addEventListener("click",()=>{
     checkWeather(searchBox.value);
     })

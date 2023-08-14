const apikye ="863242cfb2b1d357e6093d9a4df19a4b"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const serachbox=document.querySelector(".search input")
const serachbtn=document.querySelector(".search button")

const weatherIcon =document.querySelector(".weather-icon")

async function checkweather(city) {

    const  responce = await fetch(apiurl + city + `&appid=${apikye}`)

    const data = await responce.json()




    document.querySelector(".city").innerHTML =data.name
     document.querySelector(".temp").innerHTML =Math.round( data.main.temp) +"'c"
     document.querySelector(".humidity").innerHTML =data.main.humidity+ "%"
     document.querySelector(".wind").innerHTML =data.wind.speed +"km/h";
     
     if(data.weather[0].main=='Clouds'){
     	weatherIcon.src ="clouds.png"
     }else  if(data.weather[0].main=='Clear'){
     	weatherIcon.src ="clear.png"
     }else  if(data.weather[0].main=='Rain'){
     	weatherIcon.src ="rain.png"
     }else  if(data.weather[0].main=='Drizzle'){
     	weatherIcon.src ="drizzle.png"
     }else  if(data.weather[0].main=='Mist'){
     	weatherIcon.src ="mist.png"
     }

}
serachbtn.addEventListener('click', ()=>{

checkweather(serachbox.value)

})



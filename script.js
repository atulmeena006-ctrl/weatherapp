const APIkey="ae625fe5f339e9349fecc17138edc324";
let button=document.getElementById("button");
let feels=document.getElementById("feeldegree");
let presign=document.getElementById("pressign")
let search=document.getElementById("place");
let precipitation=document.getElementById("risesign");
let type=document.getElementById("sp");
let locationBtn25 = document.getElementById("txt46");
let locationBtn = document.getElementById("txt45");
let chance=document.getElementById("setsign");
let visibility=document.getElementById("visisign");
let windchill=document.getElementById("windchisign");
let heatindex=document.getElementById("heatsign");
let main=document.getElementById("main");
let main2=document.getElementById("div91");
let main3=document.getElementById("er");
let windde=document.getElementById("winddesign");
let date=document.getElementById("date1");
let dew=document.getElementById("dewsign");
let uv=document.getElementById("uvt");
let humidity=document.getElementById("seven");
let wind=document.getElementById("two");
let temp=document.getElementById("ten");
let photo=document.getElementById("clouds");
let chan=document.getElementById("date13");
let chan1=document.getElementById("date14");
let chan2=document.getElementById("date15");
let yn=document.getElementById("overcast");
let yn1=document.getElementById("overcast1");
let city3=document.getElementById("j");
let gust=document.getElementById("gustsign");
let country=document.getElementById("jap1");
button.addEventListener("click",function(){
let city=search.value;
const apiurl=`https://api.weatherapi.com/v1/current.json?days=3&key=75900bdad89b4537a2053201262806&q=${city}&aqi=no&`;
async function weather(){
    let response=await fetch(apiurl);
    let data=await response.json();
    console.log(data);
    
    feels.innerText=data.current.feelslike_c+"°C";
    presign.innerText=data.current.pressure_mb+"mb";
    visibility.innerText=data.current.vis_km+"km";
    precipitation.innerText=data.current.precip_in+"in";
    chance.innerText=data.current.chance_of_rain+"%";
    uv.innerText=data.current.uv+"index";
    humidity.innerText=data.current.humidity+"%";
    windde.innerText=data.current.wind_degree+"°";
    windchill.innerText=data.current.windchill_c+"°C";
    wind.innerText=data.current.wind_mph+"mph";
    dew.innerText=data.current.dewpoint_c+"°C";
    temp.innerText=data.current.temp_c+"°C";
    heatindex.innerText=data.current.heatindex_c+"°C";
    city3.innerText=data.location.name;
    chan.innerText=data.current.chance_of_rain+"%";
    chan1.innerText=data.current.chance_of_snow+"%";
    chan2.innerText=data.current.condition.text;
    if(data.will_it_rain==0){
      yn.innerText="No";
    }
    else{
      yn.innerText="Yes";
    }
    if(data.will_it_snow==0){
      yn1.innerText="No";
    }
    else{
      yn1.innerText="Yes";
    }
    gust.innerText=data.current.gust_kph+"kph";
    country.innerText="," + data.location.country;
    date.innerText=data.location.localtime;
    if(data.current.condition.text=="Sunny"){
        photo.src="https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/1200/external-sunny-weather-kosonicon-lineal-color-kosonicon.jpg";
        type.innerText="Sunny";
    }
     else if(data.current.condition.text=="Clear"){
        photo.src="https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/1200/external-sunny-weather-kosonicon-lineal-color-kosonicon.jpg";
        type.innerText="Clear";
    }
    else if(data.current.condition.text=="Fog"){
        photo.src="https://st4.depositphotos.com/1000507/24025/v/450/depositphotos_240258764-stock-illustration-daytime-foggy-weather-vector-illustration.jpg";
        type.innerText="Foggy"
    }
    else if(data.current.condition.text=="Partly Cloudy"){
        photo.src="https://i.pinimg.com/564x/a4/6d/0f/a46d0f81a1348be2e6b17faf416d7c03.jpg";
       
        type.innerText="Partly Cloudy";
    }
        else if(data.current.condition.text=="Mostly cloudy"){
        photo.src="https://i.pinimg.com/564x/a4/6d/0f/a46d0f81a1348be2e6b17faf416d7c03.jpg";
       
        type.innerText="Mostly Cloudy";
    }
        else if(data.current.condition.text=="Overcast"){
        photo.src="https://i.pinimg.com/564x/a4/6d/0f/a46d0f81a1348be2e6b17faf416d7c03.jpg";
       
        type.innerText="Mostly Cloudy";
    }

     else if(data.current.condition.text=="Moderate rain"){
        photo.src="https://img.magnific.com/premium-vector/rain-cloud-vector-clipart-weather-icons-educational-use_1277164-20593.jpg?semt=ais_hybrid&w=740&q=80";
       
        type.innerText="Moderate Rain";
    }
    else if(data.current.condition.text=="Heavy rain"){
        photo.src="https://img.magnific.com/premium-vector/rain-cloud-vector-clipart-weather-icons-educational-use_1277164-20593.jpg?semt=ais_hybrid&w=740&q=80";
       
        type.innerText="Heavy Rain";
    }
    else if(data.current.condition.text="Dust storm"){
        photo.src="https://static.vecteezy.com/system/resources/previews/031/878/345/non_2x/dust-storm-icon-vector.jpg";
        type.innerText="Dust storm";
    }
    else if(data.current.condition.text="Snow"){
        photo.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3pKYgvmEGz61vkY8w17aM4lv1PC_Ja76rCm5fh-vGE4ja0JpbNTxac4F&s=10";
        type.innerText="Snow";
    }
     else if(data.current.condition.text="Hail"){
        photo.src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSrKMNekZrdihFLo1Fbt18H5YC3RJxD5bXRtbdMs8835OV6NCSK";
        type.innerText="Hail";
    }
    else if(data.current.condition.text="Freezing Rain"){
        photo.src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSrKMNekZrdihFLo1Fbt18H5YC3RJxD5bXRtbdMs8835OV6NCSK";
        type.innerText="Freezing Rain";
    }
   
}
        
weather();
})
const locatiobBtn = document.getElementById("txt45");
locationBtn.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(function (position) {

        search.value = position.coords.latitude + "," + position.coords.longitude;

        button.click();

    }, function () {
        alert("Location permission denied!");
    });

});
let he=document.getElementById("head");
const toggleBtn = document.getElementById("txt46");

let isDark = false;

toggleBtn.addEventListener("click", function () {
  he.style.border.color="white";
  isDark = !isDark;
  const allDivs = document.querySelectorAll("div");
  allDivs.forEach(div => {
    if (isDark) {

      div.style.backgroundColor = "#000000";
      div.style.color = "#ffffff";
    } else {

      div.style.backgroundColor = "";
      div.style.color = "";
    }
  });

  // Also update the button text to reflect the current state
  this.textContent = isDark ? "Toggle Light" : "Toggle Dark";
});
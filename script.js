
const temp=document.getElementById("temp");
const place=document.getElementById("place");
const image=document.getElementById("image");
const weather=document.getElementById("weather");
const time=document.getElementById("time");
const nameofplace=document.getElementById("nameofplace");
const form = document.querySelector("form");



function updateDom(temperature,city,icon,textof,timeof){
    
    temp.innerText=temperature;
    place.innerText=city;
    image.src=icon;
    weather.innerText=textof;
    time.innerText=timeof;


}

const fetchData=async (target="davangere")=>{

    const url=`https://api.weatherapi.com/v1/current.json?key=5e6212bd5d0043b9ab7171013231009&q=${target}&aqi=no`;

    const response=await fetch(url);
    const data=await response.json();
    
    console.log(data.location.name);
    temparature=data.current.temp_c;
    
    // console.log(temparature,data.location.name,data.current.condition.icon,data.current.condition.text,data.location.localtime);
    updateDom(temparature,data.location.name,data.current.condition.icon,data.current.condition.text,data.location.localtime);


    console.log(data);


}
fetchData("davangere");

const search=(e)=>{
    e.preventDefault();
    const target=nameofplace.value ;
    console.log(target);
    fetchData(target);
}

form.addEventListener("submit",search)



// 5e6212bd5d0043b9ab7171013231009
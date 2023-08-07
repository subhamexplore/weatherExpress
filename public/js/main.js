const submitButton = document.getElementById('submitButton');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async (event) => {
    event.preventDefault();
    // alert("HII");
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = "Please write the city name before search";
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=0e6fc7f464f3877757d33b20840d4c68`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            city_name.innerText = arrData[0].name;
        } catch (err){
            console.log(err);
            city_name.innerText = 'Please enter the city name properly!';
        }
    }
}
submitButton.addEventListener('click', getInfo);
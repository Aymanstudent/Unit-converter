const convertBtn = document.querySelector("#convert-btn")
const myInput = document.querySelector("#number")

convertBtn.addEventListener('click', function (){
    const number = Number(myInput.value)
    document.getElementById("meter-feet").innerHTML += `<p> ${number} meters = ${(number * 3.28084).toFixed(3)} feets | ${number} feets = ${(number * 0.3048).toFixed(3)} meters`
    document.getElementById("liters-gallons").innerHTML += `<p> ${number} liters = ${(number * 0.264172).toFixed(3)} gallons | ${number} gallons = ${(number * 3.78541).toFixed(3)} liters`
    document.getElementById("kilograms-pounds").innerHTML += `<p> ${number} kilograms = ${(number * 2.20462).toFixed()} pounds | ${number} pounds = ${(number * 0.453592).toFixed(3)} kilograms`

})
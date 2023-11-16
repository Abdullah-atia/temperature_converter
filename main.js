function convertCelsiusToFahrenheit() {
    let celsius = parseFloat(document.getElementById('celsius').value);
    
    let fahrenheit = (celsius * 9/5) + 32;
    if (isNaN(celsius)){
        document.getElementById('fahrenheit').value = " "
    }
    else{
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    }
    console.log(`celsius=${celsius}, fahrenheit=${fahrenheit} `);
}

function convertFahrenheitToCelsius() {
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    console.log(fahrenheit);
    let celsius = (fahrenheit - 32) * 5/9;
    if (isNaN(fahrenheit)){
        document.getElementById('celsius').value = " "
    }
    else{
        document.getElementById('celsius').value = celsius.toFixed(2);
    }
    console.log(`, fahrenheit=${fahrenheit} ,celsius=${celsius}`);
}

let celsiusInput = document.getElementById('celsius');
let fahrenheitInput = document.getElementById('fahrenheit');

celsiusInput.addEventListener('input', function() {
    clearTimeout(this.timer);
    this.timer = setTimeout(convertCelsiusToFahrenheit, 3000);
});

fahrenheitInput.addEventListener('input', function() {
    clearTimeout(this.timer);
    this.timer = setTimeout(convertFahrenheitToCelsius, 3000);
});
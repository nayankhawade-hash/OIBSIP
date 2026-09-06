function convertTemperature() {
    const temperature = parseFloat(
        document.getElementById("temperature").value
    );

    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.innerHTML = "Please enter a temperature.";
        return;
    }

    let convertedTemperature;

    if (unit === "celsius") {
        const fahrenheit = (temperature * 9 / 5) + 32;
        const kelvin = temperature + 273.15;

        convertedTemperature =
            `${temperature} °C = ${fahrenheit.toFixed(2)} °F<br>
             ${temperature} °C = ${kelvin.toFixed(2)} K`;

    } else if (unit === "fahrenheit") {
        const celsius = (temperature - 32) * 5 / 9;
        const kelvin = (temperature - 32) * 5 / 9 + 273.15;

        convertedTemperature =
            `${temperature} °F = ${celsius.toFixed(2)} °C<br>
             ${temperature} °F = ${kelvin.toFixed(2)} K`;

    } else if (unit === "kelvin") {
        const celsius = temperature - 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;

        convertedTemperature =
            `${temperature} K = ${celsius.toFixed(2)} °C<br>
             ${temperature} K = ${fahrenheit.toFixed(2)} °F`;
    }

    result.innerHTML = convertedTemperature;
}

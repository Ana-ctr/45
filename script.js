function convert() {
    const inputValue = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number.');
        return;
    }

    const result = convertLength(inputValue, fromUnit, toUnit);

    if (result !== undefined) {
        document.getElementById('result').textContent = `${inputValue} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
    }
}

function convertLength(value, fromUnit, toUnit) {
    const units = {
        'meters': 1,
        'kilometers': 0.001,
        'centimeters': 100,
        'millimeters': 1000,
        'inches': 39.3701,
        'feet': 3.28084,
        'yards': 1.09361,
    };

    if (!(fromUnit in units) || !(toUnit in units)) {
        alert('Invalid units specified.');
        return;
    }

    const result = (value * units[toUnit]) / units[fromUnit];
    return result;
}
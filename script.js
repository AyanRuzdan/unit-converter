document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const resultEl = document.getElementById('result');
    const majorDiv = document.getElementById('majorDiv');

    if (!convertBtn) return;

    const meterValues = {
        millimeter: 0.001,
        centimeter: 0.01,
        meter: 1,
        kilometer: 1000,
        inch: 0.0254,
        foot: 0.3048,
        yard: 0.9144,
        mile: 1609.34
    };

    const weightValues = {
        milligram: 0.001,    // 1 mg = 0.001 g
        gram: 1,             // base unit
        kilogram: 1000,      // 1 kg = 1000 g
        ounce: 28.3495,      // 1 oz = 28.3495 g
        pound: 453.592       // 1 lb = 453.592 g
    };

    const temperatureConverters = {
        celsius: {
            fahrenheit: c => (c * 9 / 5) + 32,
            kelvin: c => c + 273.15,
            celsius: c => c
        },
        fahrenheit: {
            celsius: f => (f - 32) * 5 / 9,
            kelvin: f => (f - 32) * 5 / 9 + 273.15,
            fahrenheit: f => f
        },
        kelvin: {
            celsius: k => k - 273.15,
            fahrenheit: k => (k - 273.15) * 9 / 5 + 32,
            kelvin: k => k
        }
    };

    convertBtn.addEventListener('click', () => {
        let from, to, value, result;

        if (document.getElementById('length')) {
            value = parseFloat(document.getElementById('length').value);
            from = document.getElementById('lengthFrom').value;
            to = document.getElementById('lengthTo').value;

            if (isNaN(value)) return alert('Please enter a valid length');
            if (from === to) return alert('To and From cannot be the same');

            result = (value * meterValues[from]) / meterValues[to];
            resultEl.textContent = `Result generated: ${value} ${from} = ${result.toFixed(4)} ${to}`;
        }

        else if (document.getElementById('weight')) {
            value = parseFloat(document.getElementById('weight').value);
            from = document.getElementById('weightFrom').value;
            to = document.getElementById('weightTo').value;

            if (isNaN(value)) return alert('Please enter a valid weight');
            if (from === to) return alert('To and From cannot be the same');

            result = (value * weightValues[from]) / weightValues[to];
            resultEl.textContent = `Result generated: ${value} ${from} = ${result.toFixed(2)} ${to}`;
        }

        else if (document.getElementById('temp')) {
            value = parseFloat(document.getElementById('temp').value);
            from = document.getElementById('tempFrom').value;
            to = document.getElementById('tempTo').value;

            if (from === 'fah') from = 'fahrenheit';
            if (to === 'fah') to = 'fahrenheit';

            if (isNaN(value)) return alert('Please enter a valid temperature');
            if (from === to) return alert('To and From cannot be the same');

            result = temperatureConverters[from][to](value);
            resultEl.textContent = `Result generated: ${value} ${from} = ${result.toFixed(2)} ${to}`;
        }

        if (majorDiv) majorDiv.style.display = 'none';
    });
});

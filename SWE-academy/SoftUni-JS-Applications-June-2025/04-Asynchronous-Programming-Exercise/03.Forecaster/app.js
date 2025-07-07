function attachEvents() {
    const cityInput = document.getElementById('location');
    const getWeather = document.getElementById('submit');
    const displayForecast = document.getElementById('forecast');
    const displayCurrrent = document.getElementById('current');
    const displayNextDays = document.getElementById('upcoming');

    let locationUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
    let todayUrl = 'http://localhost:3030/jsonstore/forecaster/today/';
    let upcomingUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/';


    getWeather.addEventListener('click', onClick);

    let collection = {
        Sunny: '\u2600',
        'Partly sunny': '\u26c5',
        Overcast: '\u2601',
        Rain: '\u0614',
        Degrees: '\u00b0',
    }

    // let collection = {
    //     Sunny: '&#x2600;',
    //     'Partly sunny': '&#x26C5;',
    //     Overcast: '&#x2601;',
    //     Rain: '&#x2614;',
    //     Degrees: '&#176;',
    // }

    async function onClick(e) {
        try {
            displayForecast.style.display = 'block';
            displayCurrrent.innerHTML = '<div class="label">Current conditions</div>';
            displayNextDays.innerHTML = '<div class="label">Three-day forecast</div>';

            const response = await fetch(locationUrl);

            if (!response.ok) {
                throw new Error;
            };

            let locations = await response.json();

            let city = locations.find(c => c.name === cityInput.value);

            if (!city) {
                throw new Error;
            }

            const [todayData, upcomingData] = await Promise.all([
                fetch(todayUrl + city.code).then(res => res.json()),
                fetch(upcomingUrl + city.code).then(res => res.json())
            ]);

            current(todayData);
            forecast(upcomingData);

        } catch (error) {
            displayForecast.style.display = 'block';
            displayForecast.textContent = 'Error';
        };
    };

    function current(data) {

        let divForecastCurrent = document.createElement('div');
        divForecastCurrent.classList.add('forecasts');

        let spanSymbol = document.createElement('span');
        spanSymbol.classList.add('condition', 'symbol');
        spanSymbol.textContent = collection[data.forecast.condition];

        let spanCondition = document.createElement('span');
        spanCondition.classList.add('condition');

        addSpanCurrent('forecast-data', data.name);
        addSpanCurrent('forecast-data', `${data.forecast.low}\u00b0/${data.forecast.high}\u00b0`);
        addSpanCurrent('forecast-data', data.forecast.condition);

        divForecastCurrent.appendChild(spanSymbol);
        divForecastCurrent.appendChild(spanCondition);
        displayCurrrent.appendChild(divForecastCurrent);

        function addSpanCurrent(c, textContent) {
            let span = document.createElement('span');
            span.classList.add(c);
            span.textContent = textContent;
            spanCondition.appendChild(span);
        };
    }

    function forecast(data) {

        let divForecastUpcoming = document.createElement('div');
        divForecastUpcoming.classList.add('forecast-info');


        for (const day of data.forecast) {
            let span = document.createElement('span');
            span.classList.add('upcoming');

            let line1 = addSpanUpcoming('symbol', collection[day.condition]);
            span.appendChild(line1);
            let line2 = addSpanUpcoming('forecast-data', `${day.low}\u00b0/${day.high}\u00b0`)
            span.appendChild(line2);
            let line3 = addSpanUpcoming('forecast-data', day.condition)
            span.appendChild(line3);

            divForecastUpcoming.appendChild(span);
        }

        function addSpanUpcoming(c, textContent) {
            let span = document.createElement('span');
            span.classList.add(c);
            span.textContent = textContent;
            return span;
        };
        displayNextDays.appendChild(divForecastUpcoming);
    }
}

attachEvents();
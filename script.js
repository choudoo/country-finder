function findCountry() {
    const alpha2Code = document.getElementById('alpha2Code').value.toUpperCase();
    const url = `https://restcountries.com/v3.1/alpha/${alpha2Code}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Country not found');
            }
            return response.json();
        })
        .then(data => {
            const countryName = data[0].name.common;
            document.getElementById('result').textContent = `Country: ${countryName}`;
        })
        .catch(error => {
            document.getElementById('result').textContent = error.message;
        });
}
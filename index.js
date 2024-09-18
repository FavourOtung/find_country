document.addEventListener('DOMContentLoaded', function(){
    let countryInp = document.getElementById('country-inp');
    let searchBtn = document.getElementById('btnSearch');
    var result = document.getElementById('result');

    //restcountries.com
    //endpoint
    //https://restcountries.com/v3.1/name/{name}

    searchBtn. addEventListener('click', function(){
        let countryName = countryInp.value;
        let endpoint = `https://restcountries.com/v3.1/name/${countryName}`

        fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {console.log(data)

             result.innerHTML=
             `
             <img src="${data[0].flags.svg}" alt="flag" class="flag-img"/>
             <h2>${data[0].name.common}</h2>

             <div class="wrapper">
                <div class="data-wraper">
                    <h3>Population:</h3>
                    <span>${data[0].population}</span>
                </div>
                <div class="data-wraper">
                    <h3>Capital:</h3>
                    <span>${data[0].capital[0]}</span>
                </div>
                <div class="data-wraper">
                    <h3>Continent:</h3>
                    <span>${data[0].continents[0]}</span>
                </div>
                
             </div>
             
             `
        })
    })
})
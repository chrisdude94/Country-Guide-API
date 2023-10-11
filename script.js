let searchBtn = document.getElementById("search-btn");

let countryInp = document.getElementById("country-Inp");
searchBtn.addEventListener("click", () => {
    let countryName = "Norway";
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fulltext-true`;
    console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log();
    });
});
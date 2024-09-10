function runTouristProgram() {
    let touristName = prompt("Qual seu nome, turista?");
    let citiesVisitedCount = 0;
    let citiesList = "";
    let hasVisitedCity = prompt("Você visitou alguma cidade? (s/n)").toLowerCase();

    // Loop para coletar nomes das cidades visitadas
    while (hasVisitedCity === 's') {
        let cityName = prompt("Qual é o nome da cidade visitada?");
        if (cityName) {
            if (citiesVisitedCount > 0) {
                citiesList += ", "; 
            }
            citiesList += cityName;
            citiesVisitedCount++;
        }
        
        hasVisitedCity = prompt("Você visitou alguma outra cidade? (s/n)").toLowerCase();
    }
    console.log(`Turista: ${touristName}`);
    console.log(`Quantidade de cidades visitadas: ${citiesVisitedCount}`);
    console.log("Cidades visitadas:");
    console.log(citiesList);
    
    alert(`Turista: ${touristName}\nQuantidade de cidades visitadas: ${citiesVisitedCount}\nCidades visitadas: ${citiesList}`);
}

runTouristProgram();

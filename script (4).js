function runTouristProgram() {
    let touristName = prompt("Qual seu nome turista?");
    let citiesVisited = [];
    let hasVisitedCity = prompt("Você visitou alguma cidade? (s/n)").toLowerCase();

    while (hasVisitedCity === 's') {
        let cityName = prompt("Qual é o nome da cidade visitada?");
        citiesVisited.push(cityName);
        hasVisitedCity = prompt("Você visitou alguma outra cidade? (s/n)").toLowerCase();
    }

    console.log(`Turista: ${touristName}`);
    console.log(`Quantidade de cidades visitadas: ${citiesVisited.length}`);
    console.log("Cidades visitadas:");
    for (let i = 0; i < citiesVisited.length; i++) {
        console.log(`- ${citiesVisited[i]}`);
    }

    let citiesList = citiesVisited.join(", ");
    alert(`Turista: ${touristName}\nQuantidade de cidades visitadas: ${citiesVisited.length}\nCidades visitadas: ${citiesList}`);
}

runTouristProgram();

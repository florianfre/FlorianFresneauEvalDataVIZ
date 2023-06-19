fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));


function run_visualization(data) {
    sortByCountryPopulation(data);
    var pays = data.slice(0,30);
    var nom = pays.map((country) => country.country);
    var populations = pays.map((country) => country.population);

    var dataaffiché = {
        x: nom,
        y: populations,
        type: 'bar',
        marker: {color: 'Black'}
    };



    var data = [dataaffiché];



    Plotly.newPlot('data-viz', data);


}

function sortByCountryPopulation(data) {
    return data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}


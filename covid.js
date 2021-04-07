
var index = -1;

function update() {
    var url = 'https://corona.lmao.ninja/v2/countries/Germany';
    var noise = new Audio('soundscapes/ocean_waves.mp3');
    noise.volume = 0.1;
    noise.play();
    fetch(url)
        .then(res => res.json())
        .then(data => {
            switch (index) {
                case 0:
                    document.getElementById("Output").innerHTML = "Infiziert "+data.active;
                    break;
                case 1:
                    document.getElementById("Output").innerHTML = "Geheilt "+data.recovered;
                    break;
                case 2:
                    document.getElementById("Output").innerHTML = "Gestorben "+data.deaths;
                    break;
            }
            console.log("Refreshed everything!");
        });
}

function next() {
    switch (index) {
        case 0:
            index++;
            document.getElementById("Update").innerHTML = "Gestorben"
            break;
        case 1:
            index++;
            document.getElementById("Update").innerHTML = "Infiziert"
            break;
        default:
            index = 0;
            document.getElementById("Update").innerHTML = "Geheilt"
            break;
    }
    update()
}

function autoRefresh( t ) {
    setTimeout("next();autoRefresh(25000)", t);
}

next()
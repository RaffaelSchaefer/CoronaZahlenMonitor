let index: number = -1;

function update() {
    let url = 'https://corona.lmao.ninja/v2/countries/Germany';
    let noise = new Audio('soundscapes/ocean_waves.mp3');
    noise.volume = 0.1;
    noise.play();
    fetch(url)
        .then(res => res.json())
        .then(data => {
            switch (index) {
                case 0:
                    document.getElementById("output")!.innerHTML = "Infiziert ";
                    document.getElementById("value")!.innerHTML = data.active;
                    break;
                case 1:
                    document.getElementById("output")!.innerHTML = "Genesen ";
                    document.getElementById("value")!.innerHTML = data.recovered;
                    break;
                case 2:
                    document.getElementById("output")!.innerHTML = "Intensiv Fälle ";
                    document.getElementById("value")!.innerHTML = data.critical;
                    break;
                case 3:
                    document.getElementById("output")!.innerHTML = "Gestorben ";
                    document.getElementById("value")!.innerHTML = data.deaths;
                    break;
            }
            console.log("Refreshed everything!");
        });
}

function next() {
    switch (index) {
        case 0:
            index++;
            break;
        case 1:
            index++;
            break;
        case 2:
            index++;
            break;
        default:
            index = 0;
            break;
    }
    update()
}

function autoRefresh(t: number) {
    setTimeout("next();autoRefresh(25000)", t);
}

document.getElementById("output")!.addEventListener('click', function () {
    next();
})

document.getElementById("value")!.addEventListener('click', function () {
    next();
})

next();
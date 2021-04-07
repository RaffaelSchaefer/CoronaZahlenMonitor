function update() {
    var url = 'https://corona.lmao.ninja/v2/countries/Germany';
    var noise = new Audio('soundscapes/ocean_waves.mp3');
    noise.volume = 0.05;
    noise.play();
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById("Output").innerHTML = "Erkrankt "+data.active;
            console.log("Refreshed everything!");
        });
}

function autoRefresh( t ) {
    setTimeout("location.reload(true);", t);
}

update()
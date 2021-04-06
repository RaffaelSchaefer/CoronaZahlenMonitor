function update() {
    var url = 'https://corona.lmao.ninja/v2/countries/Germany';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById("Output").innerHTML = "Erkrankt "+data.active;
        });
}

function autoRefresh( t ) {
    setTimeout("location.reload(true);", t);
}

update()
fetch('http://127.0.0.1:5500/api/data2.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        document.getElementById("root").innerHTML = data[1].name;
    });
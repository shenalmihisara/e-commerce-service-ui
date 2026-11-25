

fetch('./component/nav.html')
    .then(reaponse => reaponse.text())
    .then(data => {document.getElementById('navbar').innerHTML = data;})
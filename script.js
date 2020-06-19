
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var img = document.createElement("img");
    img.src = "./img/" + `${data}` + ".png";
    ev.target.appendChild(img);
}




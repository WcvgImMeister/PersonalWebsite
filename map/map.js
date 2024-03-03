let modal = document.getElementsByClassName("mapmodal")[0];
let markers = document.getElementsByClassName('mapmarker');
Array.from(markers).forEach(function(marker) {
    marker.addEventListener('click', showModal);
});

function hideModal(context){
    modal.style.display = "none";
}

function showModal(context){
    modal.style.display = "flex";
}
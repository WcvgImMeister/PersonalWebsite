let modal = document.getElementsByClassName("mapmodal")[0];
let description = document.getElementsByClassName("description")[0];
let markers = document.getElementsByClassName('mapmarker');
let reader = new FileReader();
let closeModalButton = '<button class="closemodal" onclick=hideModal()>ЗАКРЫТЬ</button>';

// Array.from(markers).forEach(function(marker) {
//     marker.addEventListener('click', showModal);
// });

function hideModal(context){
    description.innerHTML = '';
    modal.style.display = "none";
}

function showModal(context){
    UpdateView(context);
    modal.style.display = "flex";
}

function UpdateView(path){
    var fileUrl = '../projects/' + path + '.html';
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                description.innerHTML = xhr.responseText;
                description.innerHTML += closeModalButton;
            } else {
                description.innerHTML = "[Not found]";
            }
        }
    };

    xhr.open('GET', fileUrl, true);
    xhr.send();
}
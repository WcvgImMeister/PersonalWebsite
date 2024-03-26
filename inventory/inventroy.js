let view = document.getElementsByClassName("inventoryinfo")[0];
let reader = new FileReader();

function UpdateView(path){
    var fileUrl ='items/' + path + '.html';
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                view.innerHTML = xhr.responseText;
                console.log(view.innerText);
                
            } else {
                console.error('Failed to read the file');
            }
        }
    };

    xhr.open('GET', fileUrl, true);
    xhr.send();
}


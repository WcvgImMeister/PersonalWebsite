let view = document.getElementsByClassName("inventoryinfo")[0];
let reader = new FileReader();

function UpdateView(path){
    var fileUrl = path; // Replace 'file.txt' with the path to your text file
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                view.innerHTML = xhr.responseText;
                console.log(view.innerText);
                // You can process the file content here
            } else {
                console.error('Failed to read the file');
            }
        }
    };

    xhr.open('GET', fileUrl, true);
    xhr.send();
}


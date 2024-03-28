window.addEventListener('orientationchange', changeOrientation, false);

function changeOrientation() {
    if (orientation == 0 || orientation == 180) {
    document.head.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-height, initial-scale=1.0');
    }
    else {
        document.head.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
    console.log(orientation);
}

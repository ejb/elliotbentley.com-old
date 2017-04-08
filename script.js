function hideImagesOnError() {
    for (var a = document.querySelectorAll("img"), b = 0; b < a.length; b++)
        a[b].addEventListener("error", function() {
            console.log(this), this.height = 0
        })
}
hideImagesOnError();


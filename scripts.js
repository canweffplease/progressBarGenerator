document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generate").addEventListener("click", generateProgressBar);
});

function generateProgressBar() {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const color = document.getElementById("color").value;
    const percentage = document.getElementById("percentage").value;
    const duration = document.getElementById("duration").value;

    const progressBar = document.querySelector(".progress-bar");

    if(height > 100)
    {
        height = 100;
    }
    if(percentage > 100)
    {
        percentage = 100;
    }

    progressBar.style.width = `${width}%`;
    progressBar.style.height = `${height}px`;
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = `width ${duration}s`;

    setTimeout(() => {
        progressBar.style.width = `${percentage}%`;
    }, 100);
}

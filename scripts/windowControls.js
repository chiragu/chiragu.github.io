// Runaway Window Controls - for fun

const windowControls = document.getElementById("windowControls");

// toggle
let x = 0;

windowControls.onmouseover = function() {
    if (x==0) {
        let rightSide = window.innerWidth-130 + "px";
        windowControls.style.right = rightSide;
        x = 1;
    }

    else {
        windowControls.style.right = "10px";
        x = 0;
    }
}
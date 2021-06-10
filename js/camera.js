/*
    相机控制
*/

function onMouseDown(e) {
    //console.log('mouse down');
    rotatingCam = true;
    infobox.style.visibility = "hidden";
}

function onClick(e) {
    //console.log('click');
}

function onMouseUp(e) {
    //console.log('mouse up');
    rotatingCam = false;

    var infobox = document.getElementById("infobox");
    if (intersected) {
        if (infobox.style.visibility == "visible")
            infobox.style.visibility = "hidden";
        else
            infobox.style.visibility = "visible";

    } else {
        infobox.style.visibility = "hidden";
    }
    updateInfoBox();
    updateInfoBoxPos();
}

function onMouseMove(e) {
    //console.log('mouse mobve');
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var widthCoeff = originalWidth / newWidth;
    var heightCoeff = originalHeight / newHeight;
    mouse.x = math.round(e.clientX * widthCoeff);
    mouse.y = math.round(e.clientY * heightCoeff);

    mousepx.x = e.clientX;
    mousepx.y = e.clientY;
}

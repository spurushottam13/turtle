console.log("It works");

function runCmd() {
    console.log("RUns");

}

canvas = document.querySelector('#canvas');
ctx = canvas.getContext('2d');

ctx.strokeStyle = "#000000"
lastX = 300;
lastY = 300;

function up(a) {
    newX = lastX;
    newY = lastY - a;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(newX, newY);
    ctx.stroke();
    lastX = newX;
    lastY = newY;
    console.log('up');
}

function down(a) {
    newX = lastX;
    newY = lastY + a;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(newX, newY);
    ctx.stroke();
    lastX = newX;
    lastY = newY;
    console.log('down');
}

function left(a) {
    newX = lastX - a;
    newY = lastY;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(newX, newY);
    ctx.stroke();
    lastX = newX;
    lastY = newY;
    console.log('left');
}

function right(a) {
    newX = lastX + a;
    newY = lastY;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(newX, newY);
    ctx.stroke();
    lastX = newX;
    lastY = newY;
    console.log('right');
}

function rect(b, a) {
    up(a);
    right(b);
    down(a);
    left(b);
}

function l_rect(b, a) {
    up(a);
    left(b);
    down(a);
    right(b);
}

function slant(a) {
    newX = lastX + a;
    newY = lastY - a;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(newX, newY);
    ctx.stroke();
    lastX = newX;
    lastY = newY;
}



window.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowUp') {
        up(30);
    } else if (e.key == 'ArrowDown') {
        down(30);
    } else if (e.key == 'ArrowLeft') {
        left(30);
    } else if (e.key == 'ArrowRight') {
        right(30);
    } else {
        console.log(e.key)
    }
})
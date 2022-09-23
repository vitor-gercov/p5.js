let x = 100;
let y = 100;

function setup() {
    createCanvas(700, 500);
}

function draw() {
    background(0);
    rect(x, y, 100, 100);
    if (keyIsDown(LEFT_ARROW) && x > 0) {
        x--;
    }
    if (keyIsDown(RIGHT_ARROW) && x < 600) {
        x++;
    }
    if (keyIsDown(DOWN_ARROW) && y < 400) {
        y++;
    }
    if (keyIsDown(UP_ARROW) && y > 0) {
        y--;
    }
}
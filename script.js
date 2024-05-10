let ball; // create a ball variable


function setup() {
    // this is were you put code that runs before the game loop starts
    createCanvas(400, 400); // makes the canvas
    ball = new Sprite(50, 50, 50, 'd'); // create a ball sprite at 50 50 with a radius of 50 and a dynamic collider
    world.gravity.y = 10; // create gravity
}

function draw() {
    // this is the game loop, runs 60 times a second
}
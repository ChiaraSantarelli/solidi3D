/**
 * @typedef {import("./p5/types").Graphics} Graphics
 * @typedef {import("./p5/types").Image} Image
 * 
 * @typedef {Object}Cubo
 * @property{number} x
 * @property{number} y
 * @property{number} z
 * @property{number} size
 * @property{string} color
 * @property{function} rotationFunction
 * /
 
//

/** @type {Cubo[]} */
let copie = 100;

let cubi = []; //creo lista vuota con parentesi quadre

/** @type {Graphics} */
let g;

/** /* @type {Image}*/
let img;

function preload() {
  img = loadImage("./Frame 1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");

  g = createGraphics(100, 100);

  for (let i = 0; i < copie; i++) {
    let s = 500;
    let cubo = {
      // creo il cubo
      x: random(-s, s),
      y: random(-s, s),
      z: random(-s, s),
      color: random(["blue", "purple", "yellow", "pink"]),
      size: 100,
      rotationAxis: random(["x", "y", "z"]),
    };
    cubi.push(cubo); //aggiungo il cubo alla lista
  }
}

function draw() {
  background("white");
  orbitControl();
  rotateZ(frameCount * 0.001);
  noStroke();

  //g.background("blue");
  ////g.textSize(g.height);
  g.fill("white");
  g.text("HI", g.width / 2, g.height / 2);

  texture(img);

  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);
    if (cubo.rotationAxis == "x") {
      rotateX(frameCount / 20);
    } else if (cubo.rotatioAxis == "y") {
      rotateY(frameCount / 10);
    } else if (cubo.rotationAxis == "z") {
      rotateZ(frameCount / 10);
    }

    // strokeWeight(30);
    // stroke(cubo.color);
    // noFill();
    box(cubo.size);

    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

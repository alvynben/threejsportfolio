import * as THREE from "./node_modules/three/src/Three.js";

THREE.Cache.enabled = true;
const scene = new THREE.Scene();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(0, 500, 0);
scene.add(directionalLight);

// Setting Up Camera
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = window.innerWidth;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera(
  cameraWidth / -2,
  cameraWidth / 2,
  cameraHeight / 2,
  cameraHeight / -2,
  0,
  1000
);
camera.position.set(300, 200, -100);
camera.lookAt(0, 10, 0);

function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement;
  // look up the size the canvas is being displayed
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  // adjust displayBuffer size to match
  if (canvas.width !== width || canvas.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // update any render target sizes here
  }
}

// renderMap(cameraWidth, cameraHeight * 2);

// Set Up GL Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
// renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);

const car = createCar();
scene.add(car);

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(10000, 10000),
  new THREE.MeshBasicMaterial({ color: "#a2a0ff" })
);
plane.receiveShadow = true;
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

function getSectionOneTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1000;
  canvas.height = 1000;
  const context = canvas.getContext("2d");

  context.fillStyle = "#a2a0ff";
  context.fillRect(0, 0, 1000, 1000);

  context.strokeRect(0,0,1000,1000);

  context.fillStyle = "#000000";
  // context.fillRect(8, 8, 48, 24);

  const img = new Image();
  img.onload = drawActualImageSize;
  img.src = './keys.png';

  function drawActualImageSize() {
    context.drawImage(img, 500, 500);
  }

  context.font = "100px monospace"
  context.fillText("IT BEGINS...", 100,300);
  context.fillText("<-----", 100,500);

  context.font = "30px monospace";
  context.fillText("Alvin Ben Abraham", 100, 600);
  context.fillText("Welcome To My Site!", 100, 650)

  context.fillText("Linkedin: linkedin.com/in/alvinbenabraham", 100, 800);
  context.fillText("[Use arrow keys to control the car]", 100, 200);


  return new THREE.CanvasTexture(canvas);
}

const sectionOne = new THREE.Mesh(
  new THREE.PlaneGeometry(500, 500),
  new THREE.MeshBasicMaterial({ map: getSectionOneTexture() })
);
sectionOne.rotation.x = -Math.PI / 2;
sectionOne.rotation.z = Math.PI / 2;
sectionOne.position.y = 1;
scene.add(sectionOne);

function getRoadTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 1000;
  const context = canvas.getContext('2d');

  context.fillStyle = "#000";
  context.fillRect(0,0,500,1000);

  return new THREE.CanvasTexture(canvas);
}

const road = new THREE.Mesh(
  new THREE.PlaneGeometry(500,1000),
  new THREE.MeshBasicMaterial({map: getRoadTexture()})
)
road.rotation.x = -Math.PI / 2;
road.position.z = 800;
road.position.y = 1;
scene.add(road);

function getSectionTwoTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1000;
  canvas.height = 1000;
  const context = canvas.getContext("2d");

  context.fillStyle = "#a2a0ff";
  context.fillRect(0, 0, 1000, 1000);

  context.strokeRect(0,0,1000,1000);

  context.fillStyle = "#000000";
  // context.fillRect(8, 8, 48, 24);

  const img = new Image();
  img.onload = drawActualImageSize;
  img.src = './keys.png';

  function drawActualImageSize() {
    context.drawImage(img, 500, 500);
  }

  context.font = "100px monospace"
  context.fillText("Projects", 100,300);

  context.font = "30px monospace";
  context.fillText("(1) Interseed - app.interseed.co", 100, 600);
  context.fillText("(2) Voca SG - voca.sg", 100, 650)

  context.fillText("View others @ github.com/alvynben", 100, 800);


  return new THREE.CanvasTexture(canvas);
}

const sectionTwo = new THREE.Mesh(
  new THREE.PlaneGeometry(500, 500),
  new THREE.MeshBasicMaterial({ map: getSectionTwoTexture() })
);
sectionTwo.rotation.x = -Math.PI / 2;
sectionTwo.rotation.z = Math.PI / 2;
sectionTwo.position.y = 1;
sectionTwo.position.z = 1600;
scene.add(sectionTwo);

function getInterseedTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  const context = canvas.getContext("2d");

  context.fillStyle = "#a2a0ff";
  context.fillRect(0, 0, 500, 500);

  context.strokeRect(0,0,500,500);

  context.fillStyle = "#000000";
  // context.fillRect(8, 8, 48, 24);

  const img = new Image();
  img.onload = drawActualImageSize;
  img.src = './keys.png';

  function drawActualImageSize() {
    context.drawImage(img, 500, 500);
  }

  context.font = "30px monospace";
  context.fillText("Drive here to", 100, 200);
  context.fillText("see Interseed", 100, 250)

  return new THREE.CanvasTexture(canvas);
}

const interseed = new THREE.Mesh(
  new THREE.PlaneGeometry(500, 500),
  new THREE.MeshBasicMaterial({ map: getInterseedTexture() })
);
interseed.rotation.z = Math.PI / 2;
interseed.rotation.x = -Math.PI / 2;
interseed.position.y = 1;
interseed.position.z = 2200;
scene.add(interseed);

renderer.setClearColor(0xffffff, 1);
renderer.render(scene, camera);
let accelerate = false;
let reverse = false;
let left;
let right;
let lastTimeStamp;
renderer.setAnimationLoop(animation);

window.addEventListener("keydown", function (event) {
  if (event.key == "ArrowUp") {
    accelerate = true;
    return;
  }
  if (event.key == "ArrowDown") {
    reverse = true;
    return;
  }
  if (event.key == "ArrowLeft") {
    left = true;
    return;
  }
  if (event.key == "ArrowRight") {
    right = true;
    return;
  }
});

window.addEventListener("keyup", function (event) {
  if (event.key == "ArrowUp") {
    accelerate = false;
    return;
  }
  if (event.key == "ArrowDown") {
    reverse = false;
    return;
  }
  if (event.key == "ArrowLeft") {
    left = false;
    return;
  }
  if (event.key == "ArrowRight") {
    right = false;
    return;
  }
});

const acceleration = 0.0017;
const friction = acceleration / 2;
let speed = 0;
let maxSpeed = 0.5;
let displacement;
let xMagnitude;
let zMagnitude;
let wasReversing = false;
let wasAccelerating = false;
const velocity = new THREE.Vector3(0, 0, 0);
velocity.clampLength(0.0, 1.0);

function animation(timestamp) {
  if (!lastTimeStamp) {
    lastTimeStamp = timestamp;
    return;
  }

  const timeDelta = timestamp - lastTimeStamp;
  let angleOfCar = car.rotation.y;
  if (angleOfCar < 0) angleOfCar = angleOfCar + 2 * Math.PI;

  const oldObjectPosition = new THREE.Vector3();
  car.getWorldPosition(oldObjectPosition);

  if (accelerate && !wasReversing) {
    speed = speed + timeDelta * acceleration;
    if (speed > maxSpeed) speed = maxSpeed;
    wasAccelerating = true;
  }

  if (reverse && !wasAccelerating) {
    speed = speed + timeDelta * acceleration;
    if (speed > maxSpeed) speed = maxSpeed;
    wasReversing = true;
  }

  if (left) {
    car.rotation.y = (car.rotation.y + (speed / 10) * Math.PI) % (2 * Math.PI);
  }

  if (right) {
    car.rotation.y = (car.rotation.y - (speed / 10) * Math.PI) % (2 * Math.PI);
  }

  if (true) {
    speed = speed - (acceleration / 2) * timeDelta;
    if (speed < 0) {
      speed = 0;
      wasReversing = false;
      wasAccelerating = false;
    }

    displacement = timeDelta * speed;

    xMagnitude = Math.abs(displacement * Math.cos(angleOfCar));
    zMagnitude = Math.abs(displacement * Math.sin(angleOfCar));
    if (angleOfCar > Math.PI * 0.5 && angleOfCar < Math.PI * 1.5) {
      xMagnitude = -1 * xMagnitude;
    }
    if (angleOfCar > 0 && angleOfCar < Math.PI) {
      zMagnitude = -1 * zMagnitude;
    }

    if ((reverse || wasReversing) && !accelerate && !wasAccelerating) {
      xMagnitude = -1 * xMagnitude;
      zMagnitude = -1 * zMagnitude;
    }

    car.position.x = car.position.x + xMagnitude;
    car.position.z = car.position.z + zMagnitude;

    const newObjectPosition = new THREE.Vector3();
    car.getWorldPosition(newObjectPosition);

    const delta = newObjectPosition.clone().sub(oldObjectPosition);

    camera.position.add(delta);
    // }

    renderer.render(scene, camera);
    lastTimeStamp = timestamp;
  }
}

console.log("hELOO");

function renderMap(mapWidth, mapHeight) {
  const lineMarkingsTexture = getLineMarkings(mapWidth, mapHeight);

  const planeGeometry = new THREE.PlaneBufferGeometry(mapWidth, mapHeight);
  const planeMaterial = new THREE.MeshLambertMaterial({
    // color: #f57f23,
    map: lineMarkingsTexture,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  scene.add(plane);

  const islandLeft = getLeftIsland();

  return;
}

function getLineMarkings(mapWidth, mapHeight) {
  const canvas = document.createElement("canvas");
  canvas.width = mapWidth;
  canvas.height = mapHeight;
  const context = canvas.getContext("2d");

  context.fillStyle = "#546E90";
  context.fillRect(0, 0, mapWidth, mapHeight);

  context.lineWidth = 2;
  context.strokeStyle = "#e0ffff";
  context.setLineDash([10, 14]);

  context.beginPath();
  context.arc(
    mapWidth / 2 - arcCenterX,
    mapHeight / 2,
    trackRadius,
    0,
    Math.PI * 2
  );
  context.stroke();

  context.beginPath();
  context.arc(
    mapWidth / 2 + arcCenterX,
    mapHeight / 2,
    trackRadius,
    0,
    Math.PI * 2
  );
  context.stroke();

  return new THREE.CanvasTexture(canvas);
}

function createWheels() {
  const geometry = new THREE.BoxBufferGeometry(12, 12, 33);
  const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
  const wheel = new THREE.Mesh(geometry, material);
  return wheel;
}

function createCar() {
  const car = new THREE.Group();

  const backWheel = createWheels();
  backWheel.position.y = 6;
  backWheel.position.x = -18;
  car.add(backWheel);

  const frontWheel = createWheels();
  frontWheel.position.y = 6;
  frontWheel.position.x = 18;
  car.add(frontWheel);

  const main = new THREE.Mesh(
    new THREE.BoxBufferGeometry(60, 15, 30),
    new THREE.MeshLambertMaterial({ color: 0xff7755 })
  );
  main.position.y = 12;
  car.add(main);

  const carFrontTexture = getCarFrontTexture();
  const carBackTexture = getCarFrontTexture();
  const carRightSideTexture = getCarSideTexture();
  const carLeftSideTexture = getCarSideTexture();

  carLeftSideTexture.center = new THREE.Vector2(0.5, 0.5);
  carLeftSideTexture.rotation = Math.PI;
  carLeftSideTexture.flipY = false;

  const cabin = new THREE.Mesh(new THREE.BoxBufferGeometry(33, 12, 24), [
    new THREE.MeshLambertMaterial({ map: carFrontTexture }),
    new THREE.MeshLambertMaterial({ map: carBackTexture }),
    new THREE.MeshLambertMaterial({ color: 0xffffff }), // top
    new THREE.MeshLambertMaterial({ color: 0xffffff }), // bottom
    new THREE.MeshLambertMaterial({ map: carRightSideTexture }),
    new THREE.MeshLambertMaterial({ map: carLeftSideTexture }),
  ]);
  cabin.position.x = -6;
  cabin.position.y = 25.5;
  car.add(cabin);
  car.rotation.y = - Math.PI / 2;

  return car;
}

function getCarFrontTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 32;
  const context = canvas.getContext("2d");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 64, 32);

  context.fillStyle = "#666666";
  context.fillRect(8, 8, 48, 24);

  return new THREE.CanvasTexture(canvas);
}

function getCarSideTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 32;
  const context = canvas.getContext("2d");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 128, 32);

  context.fillStyle = "#666666";
  context.fillRect(10, 8, 38, 24);
  context.fillRect(58, 8, 60, 24);

  return new THREE.CanvasTexture(canvas);
}

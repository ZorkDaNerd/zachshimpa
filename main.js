import './style.css'

import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

// Setup

// This camera is a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio); // Makes it look better
renderer.setSize(window.innerWidth, window.innerHeight); // Makes it a full screen size
// camera.position.setZ(30); // Moves the camera back 30 units
// camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100); // Creates a torus
// MeshBasicMaterial doesn't need a light source, MeshStandardMaterial does
const material = new THREE.MeshStandardMaterial({ color: 0x00FF00}); // Creates a material
const torus = new THREE.Mesh(geometry, material); // Creates a mesh

scene.add(torus) // Adds the torus to the scene

// Stars

function addStar() {
const geometry = new THREE.SphereGeometry(0.25, 24, 24); // Creates a sphere
const material = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Creates a material
const star = new THREE.Mesh(geometry, material); // Creates a mesh

const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100)); // Creates an array of 3 random numbers

star.position.set(x, y, z); // Sets the position of the star
scene.add(star); // Adds the star to the scene
}

Array(200).fill().forEach(addStar); // Creates 200 stars

// Avatar

const zachTexture = new THREE.TextureLoader().load('/images/ZorkDaBork.png'); // Loads the zach texture

const zach = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3), // Creates a box
  new THREE.MeshBasicMaterial({ map: zachTexture }) // Creates a material
);

scene.add(zach); // Adds the zach to the scene

zach.position.z = -5;
zach.position.x = 2;

// Pluto

const plutoTexture = new THREE.TextureLoader().load('/images/Pluto_Made.jpg'); // Loads the moon texture
const plutoNormal = new THREE.TextureLoader().load('/images/Pluto_Normal.jpg'); // Loads the moon normal texture

const pluto = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32), // Creates a sphere
  new THREE.MeshStandardMaterial({
    map: plutoTexture, // Adds the texture to the material
    normalMap: plutoNormal // Adds the normal map to the material
  }) // Creates a material
);

scene.add(pluto); // Adds the moon to the scene

pluto.position.z = 30; // Sets the position of the moon
pluto.position.setX(-10); // Sets the position of the moon

// Background

const spaceTexture = new THREE.TextureLoader().load('/images/pexels-jeremy-müller-6444367.jpg'); // Loads the space texture
scene.background = spaceTexture; // Sets the background to the space texture
// Lights

const pointLight = new THREE.PointLight(0xffffff); // Creates a point light
pointLight.position.set(5, 5, 5); // Sets the position of the point light

const ambientLight = new THREE.AmbientLight(0xffffff); // Creates an ambient light
scene.add(pointLight, ambientLight); // Adds the point light and the ambient light to the scene

// const lightHelper = new THREE.PointLightHelper(pointLight) // Creates a light helper
// const gridHelper = new THREE.GridHelper(200, 50); // Creates a grid helper
// scene.add(lightHelper, gridHelper) // Adds the light helper to the scene



// Controls
// const controls = new OrbitControls(camera, renderer.domElement); // Creates controls

// Move Camera

function moveCamera() {

  const t = document.body.getBoundingClientRect().top; // Gets the top of the body
  pluto.rotation.x += 0.05; // Rotates the moon x
  pluto.rotation.y += 0.075; // Rotates the moon y
  pluto.rotation.z += 0.05; // Rotates the moon z

  zach.rotation.y += 0.01; // Rotates zach y
  zach.rotation.z += 0.01; // Rotates zach z

  camera.position.z = t * -0.01; // Moves the camera back z
  camera.position.x = t * -0.0002; // Moves the camera left x
  camera.rotation.y = t * -0.0002; // Rotates the camera left y
}

document.body.onscroll = moveCamera; // Moves the camera when the body is scrolled

// Animation

function animate() { // Kinda like a game loop
  requestAnimationFrame(animate); // Creates a loop

  torus.rotation.x += 0.01; // Rotates the torus
  torus.rotation.y += 0.005; // Rotates the torus
  torus.rotation.z += 0.01; // Rotates the torus

  pluto.rotation.x += 0.005; // Rotates the moon x

  // controls.update(); // Updates the controls

  renderer.render(scene, camera); // Renders the scene and the camera
}

// Reload
function onWindowResize() { // Resizes the window
  // Reloads the window when the window is resized
  camera.updateProjectionMatrix();
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener( 'resize', onWindowResize, false ); // Resizes the window

if ( WebGL.isWebGLAvailable() ) { // Checks if WebGL is available

	// Initiate function or other initializations here

	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}

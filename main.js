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
camera.position.setZ(30); // Moves the camera back 30 units

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

const zachTexture = new THREE.TextureLoader().load('.//assets//images//ZorkDaBork.png'); // Loads the zach texture

const zach = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3), // Creates a box
  new THREE.MeshBasicMaterial({ map: zachTexture }) // Creates a material
);

scene.add(zach); // Adds the zach to the scene

// Moon

const moonTexture = new THREE.TextureLoader().load('.//assets//images//Pluto_Made.jpg'); // Loads the moon texture

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32), // Creates a sphere
  new THREE.MeshStandardMaterial({ map: moonTexture }) // Creates a material
);

scene.add(moon); // Adds the moon to the scene



// Background

const spaceTexture = new THREE.TextureLoader().load('.//assets//images//pexels-jeremy-müller-6444367.jpg'); // Loads the space texture
scene.background = spaceTexture; // Sets the background to the space texture
// Lights

const pointLight = new THREE.PointLight(0xffffff); // Creates a point light
pointLight.position.set(5, 5, 5); // Sets the position of the point light

const ambientLight = new THREE.AmbientLight(0xffffff); // Creates an ambient light
scene.add(pointLight, ambientLight); // Adds the point light and the ambient light to the scene

const lightHelper = new THREE.PointLightHelper(pointLight) // Creates a light helper
const gridHelper = new THREE.GridHelper(200, 50); // Creates a grid helper
scene.add(lightHelper, gridHelper) // Adds the light helper to the scene



// Controls
const controls = new OrbitControls(camera, renderer.domElement); // Creates controls

// Animation

function animate() { // Kinda like a game loop
  requestAnimationFrame(animate); // Creates a loop

  torus.rotation.x += 0.01; // Rotates the torus
  torus.rotation.y += 0.005; // Rotates the torus
  torus.rotation.z += 0.01; // Rotates the torus

  controls.update(); // Updates the controls

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

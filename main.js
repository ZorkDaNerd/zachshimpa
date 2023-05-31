import './style.css'

import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

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
// MeshBasicMaterial doesn't need a light source
const material = new THREE.MeshBasicMaterial({ color: 0x00FF00, wireframe: true}); // Creates a material
const torus = new THREE.Mesh(geometry, material); // Creates a mesh

scene.add(torus) // Adds the torus to the scene

// Animation
function animate() { // Kinda like a game loop
  requestAnimationFrame(animate); // Creates a loop
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

import * as THREE from 'three';
//These are addons that I will be using later
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const controls = new OrbitControls( camera, renderer.domElement );
// const loader = new GLTFLoader();

//This is where the scene is being built
const scene = new THREE.Scene(); //This is the scene
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); //This is the camera with render falloff at the end

const renderer = new THREE.WebGLRenderer(); //This is the renderer
renderer.setSize( window.innerWidth, window.innerHeight ); //This is the renderer size, it can be set to lower values to render at lower resolutions
document.body.appendChild( renderer.domElement ); //This is the renderer element it displays to the scene

//This is where the cube is being built
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); //This is the cube geometry, contains vertices and faces
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); //This is the cube material, it is what the cube is made of
const cube = new THREE.Mesh( geometry, material );  //This is where the mesh is applied to the cube
scene.add( cube ); //This is where the cube is added to the scene, it defaults to 0,0,0

camera.position.z = 5;

//This is the animation loop
function animate() {
	requestAnimationFrame( animate ); //This is requesting a frame only when the page is active
    cube.rotation.x += 0.01; 
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();
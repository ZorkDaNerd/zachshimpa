//Required imports
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

//Addons
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import {TrackballControls} from 'three/addons/controls/TrackballControls.js';

//These are addons that I will be using later
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const controls = new OrbitControls( camera, renderer.domElement );
// const loader = new GLTFLoader();

//This is where the scene is being built
const scene = new THREE.Scene(); //This is the scene
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 ); //This is the camera with render falloff at the end
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );


const renderer = new THREE.WebGLRenderer(); //This is the renderer
renderer.setSize( window.innerWidth, window.innerHeight ); //This is the renderer size, it can be set to lower values to render at lower resolutions
document.body.appendChild( renderer.domElement ); //This is the renderer element it displays to the scene


//This is where the cube is being built
const geometry = new THREE.SphereGeometry( 5, 5, 5 ); //This is the cube geometry, contains vertices and faces
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); //This is the cube material, it is what the cube is made of
const cube = new THREE.Mesh( geometry, material );  //This is where the mesh is applied to the cube
scene.add( cube ); //This is where the cube is added to the scene, it defaults to 0,0,0


//This is where the line is being built
const materialLine = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = []; //This is where the points are being stored for the line to run across
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
const geometryLine = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometryLine, materialLine );
scene.add( line );


//this is where the text is



//This is the animation loop
function animate() {
	requestAnimationFrame( animate ); //This is requesting a frame only when the page is active

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );
    renderer2.render( scene2, camera );
}

if ( WebGL.isWebGLAvailable() ) { //This is checking if WebGL is available

	// Initiate function or other initializations here
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage(); //This is the error message if WebGL is not available
	document.getElementById( 'container' ).appendChild( warning );

}

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

const loader = new GLTFLoader();
const scene = new THREE.Scene();
const color1 = new THREE.Color(0xaff);
scene.background = color1;
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

loader.load(
	'/pokemon_rse_-_pokemon_center.glb',
	function (gltf) {
		scene.add(gltf.scene);
		renderer.render(scene, camera);
	},
	undefined,
	function (error) {
		console.log(error);
	}
);

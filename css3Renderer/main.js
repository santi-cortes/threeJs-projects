import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const color1 = new THREE.Color(0xff0000);
scene.background = color1;
const camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
scene.add(camera);

const css3d = new CSS3DRenderer();

css3d.setSize(1000, 1000);
css3d.render(scene, camera);

renderer.render(scene, camera);

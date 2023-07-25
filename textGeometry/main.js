import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import * as THREE from 'three';

const loader = new FontLoader();
const scene = new THREE.Scene();
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

const font = loader.load('/Minecraft_Medium.json', function (font) {
	console.log(font);
	const geometry = new TextGeometry('Hello', {
		font: font,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	});

	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	const mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);
});

renderer.render(scene, camera);

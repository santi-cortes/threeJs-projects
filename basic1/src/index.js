import camera from './basic/Camera.js';
import light from './basic/Light.js';
import loopMachine from './basic/LoopMachine.js';
import renderer from './basic/Renderer.js';
import resize from './basic/Resize.js';
import scene from './basic/Scene.js';
import cube from './basic/shapes/Cube.js';
import plane from './basic/shapes/Plane.js';

scene.add(cube);
scene.add(plane);
scene.add(light);

camera.position.set(5, 5, 5);

camera.lookAt(cube.position);

loopMachine.addCallback(() => {
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}, 1000 / 60);

resize.start(renderer);
loopMachine.start();

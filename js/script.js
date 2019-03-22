var scene = new THREE.Scene( );
scene.background = new THREE.Color( 0xf0f0f0 );
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);

var renderer = new THREE.WebGLRenderer( );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set( 0, 0, 10 );

// light

var light = new THREE.AmbientLight( 0x888888 );
scene.add(light);

//light direction

var light = new THREE.DirectionalLight( 0xfdfcf0, 1 );
light.position.set( 20, 10, 20);
scene.add(light);



// responsive 
window.addEventListener( 'resize', function ( ) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});


//
var geometry = new THREE.BoxGeometry(1, 1, 2);

var material = new THREE.MeshBasicMaterial({
  color: 0xFF00FF00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);



var update = function () {
  cube.rotation.x += 0.03;
  cube.rotation.y += 0.005;
};

var render = function () {
  renderer.render(scene, camera);
};

var GameLoop = function () {
  requestAnimationFrame(GameLoop);

  update();
  render();
};

GameLoop();
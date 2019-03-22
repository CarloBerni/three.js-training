var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    camera.position.set(0,0,20);

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


// create earths geometry and material

var earthGeometry = new THREE.SphereGeometry( 5, 50, 50);
var texture = new THREE.TextureLoader().load( "/textures/2_no_clouds_4k.jpg" );
var earthMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  color: 0xaaaaaa,
});
// create clouds geometry and material

var cloudGeometry = new THREE.SphereGeometry( 5.05, 50, 50);
var texture = new THREE.TextureLoader().load( "/textures/fair_clouds_4k.png" );
var cloudMaterial = new THREE.MeshBasicMaterial({
  transparent: true,
  map: texture,
  opacity: 0.7
});

// creat Bumps material and geometry

var bumpGeometry = new THREE.SphereGeometry( 5, 50, 50);
var texture = new THREE.TextureLoader().load( "/textures/elev_bump_4k.jpg" );
var bumpMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  transparent: true,
  opacity: 0.2
});

// creat stars geometry and material

var starGeometry = new THREE.SphereGeometry( 200, 50, 50);
var texture = new THREE.TextureLoader().load( "/textures/2048x1024.png" );
var starMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide,
});

// final

var star = new THREE.Mesh(starGeometry, starMaterial, texture);
scene.add(star);
var earth = new THREE.Mesh(earthGeometry, earthMaterial, texture);
scene.add(earth);
var clouds = new THREE.Mesh(cloudGeometry, cloudMaterial, texture);
scene.add(clouds);
var bump = new THREE.Mesh(bumpGeometry, bumpMaterial, texture);
scene.add(bump);

// orbit


var render = function() {
  earth.rotation.y += .0015;
  clouds.rotation.y += .0025;
  clouds.rotation.z += .00125;
  bump.rotation.y += .0015;
  renderer.render( scene, camera);
  requestAnimationFrame(render);

};
render();


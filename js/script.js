var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    camera.position.set(0,0,15);

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
var earthMaterial = new THREE.MeshPhongMaterial({
  color: 0xaaaaaa,
  specular: 0x333333,
  shininess: 25
});

// create clouds geometry and material

var cloudGeometry = new THREE.SphereGeometry( 5.05, 50, 50);
var cloudMaterial = new THREE.MeshPhongMaterial({
  transparent: true,
  opacity: 0.8
});

// creat Bumps material and geometry

var bumpGeometry = new THREE.SphereGeometry( 5, 50, 50);
var bumpMaterial = new THREE.MeshPhongMaterial({
  transparent: true,
  opacity: 0.2
});

// creat stars geometry and material

var starGeometry = new THREE.SphereGeometry( 200, 50, 50);
var starMaterial = new THREE.MeshPhongMaterial({
  side: THREE.DoubleSide,
  shininess: 0
});

// final

var star = new THREE.Mesh(starGeometry, starMaterial);
scene.add(star);
var earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
var clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
scene.add(clouds);
var bump = new THREE.Mesh(bumpGeometry, bumpMaterial);
scene.add(bump);

var render = function() {
  earth.rotation.y += .0015;
  clouds.rotation.y += .0025;
  clouds.rotation.z += .00125;
  bump.rotation.y += .0015;
  renderer.render( scene, camera);
  requestAnimationFrame(render);

};
render();


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

dirLight = new THREE.DirectionalLight( 0xffffff );
				dirLight.position.set( - 1, 0, 1 ).normalize();
				scene.add( dirLight );



// responsive 
window.addEventListener( 'resize', function ( ) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});


// create mars geometry and material

var marsGeometry = new THREE.SphereGeometry( 5, 50, 50);
var texture = new THREE.TextureLoader().load( "/textures/Mars_Viking_MDIM21_ClrMosaic_global_2500m.png" );
var marsMaterial = new THREE.MeshBasicMaterial({
  map: texture,
});

// creat stars geometry and material

var starGeometry = new THREE.SphereGeometry( 200, 50, 50);
var texture = new THREE.TextureLoader().load( "/textures/2048x1024-min.png" );
var starMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide,
});

// final

var star = new THREE.Mesh(starGeometry, starMaterial, texture);
scene.add(star);
var mars = new THREE.Mesh(marsGeometry, marsMaterial, texture);
scene.add(mars);
;


// orbit
var orbit = new THREE.OrbitControls( camera, renderer.domElement );



var render = function() {
  mars.rotation.y += .0015;
  renderer.render( scene, camera);
  requestAnimationFrame(render);

};
render();


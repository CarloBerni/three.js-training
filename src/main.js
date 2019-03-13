var scene = new Three.scene();
var camera = new Three.perspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer =new ThreeWebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new Three.BoxGeometry( 1, 1, 1 );

var material = new Three.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: true} );
var cube = new Three.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 3;





var update = function( ) {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;
};

var render = function( ) {
  renderer.render( scene, camera );
};

var GameLoop = function( ){
  requestAnimationFrame( GameLoop );

  update( );
  render( );
};

GameLoop( );



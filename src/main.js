var scene = new Three.Scene( );
var camera = new Three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer =new ThreeWebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener('resize', function(){
  var Width = window.innerWidth;
  var Height = window.innerHeight;
  renderer.setSize(width, height );
  camera.aspect = width / height;
  camera.updateProjectionMatrix( );
});


//
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



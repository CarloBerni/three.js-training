var scene = new Three.scene();
var camera = new Three.perspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer =new ThreeWebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var update = function( ) {

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



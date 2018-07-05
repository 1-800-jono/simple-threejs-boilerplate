'use stric';

//add scene
var scene = new THREE.Scene();

//add a camera
// THREE.PerspectiveCamera(fov, aspect, near, far)
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );


//add camrera position z at 100
camera.position.z = 50;

//add renderer
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
//Add color to renderer - background
//default is black
renderer.setClearColor(0x000000);
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//Add shape
var geometry = new THREE.SphereGeometry( 20, 30, 30);

//Add material
var material = new THREE.MeshBasicMaterial( { 
  color: 0xffffff, 
  wireframe: true, 
  wireframeLinewidth: 1, 
  opacity: .15,
  transparent: true
});

//create shape combining geometry and material
var shape = new THREE.Mesh( geometry, material );

//add shape to scene
scene.add( shape );


//Render
var render = function () {
  requestAnimationFrame( render );

  //cube.rotation.x += 0.01;
  shape.rotation.y += 0.003;
  shape.rotation.x += 0.003;
  camera.updateProjectionMatrix();

  renderer.render(scene, camera);
};

render();




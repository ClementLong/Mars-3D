// Load Three.js
const THREE = require('three')

// Init scene & camera
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
camera.position.z = 5

// Type & where render
const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.querySelector('.planet').appendChild( renderer.domElement )

// TextureLoader
const the_map = new THREE.TextureLoader().load('./images/mars_1k_color.jpg')
const bmap = new THREE.TextureLoader().load('./images/mars_1k_topo.jpg')

const geometry  = new THREE.SphereGeometry(2, 32, 32)
const material  = new THREE.MeshBasicMaterial({
  map : the_map,
  bumpMap : bmap,
  bumpScale	: 0.02,
  // specularMap	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'images/earthspec1k.jpg'),
  // specular	: new THREE.Color('grey'),
})


console.log(material);

const marsMesh = new THREE.Mesh(geometry, material)
scene.add(marsMesh)


const render = () => {
  requestAnimationFrame( render )

  marsMesh.rotation.y += 0.005
  // cube.rotation.x += 0.1
  // cube.rotation.y += 0.1

  renderer.render(scene, camera)
}

render()

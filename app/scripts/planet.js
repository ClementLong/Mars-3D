const planet = {}

planet.initPlanet = () => {
  // Load Three.js
  const THREE = require('three')

  // Init scene & camera
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
  camera.position.z = 5

  //Light
  scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) )

  const spotLight = new THREE.SpotLight( 0xffffbb, 1.3 )
  spotLight.position.set( 0.5, 0, 2 )
  spotLight.position.multiplyScalar( 700 )
  scene.add( spotLight )

  spotLight.castShadow = true

  spotLight.shadow.mapSize.width = 2048
  spotLight.shadow.mapSize.height = 2048

  spotLight.shadow.camera.near = 500
  spotLight.shadow.camera.far = 500

  spotLight.shadow.camera.fov = 200

  spotLight.shadow.bias = -0.005

  // Type & where render
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize( window.innerWidth, window.innerHeight )
  document.querySelector('.planet').appendChild( renderer.domElement )

  // TextureLoader
  const the_map = new THREE.TextureLoader().load('./images/mars_1k_color.jpg')
  const bmap = new THREE.TextureLoader().load('./images/mars_1k_topo.jpg')
  const geometry  = new THREE.SphereGeometry(2, 32, 32)
  const material  = new THREE.MeshPhongMaterial({
    map : the_map,
    specular: 0x222222,
    shininess: 10,
    bumpMap : bmap,
    bumpScale	: 0.02
    // specularMap	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'images/earthspec1k.jpg'),
    // specular	: new THREE.Color('grey'),
  })

  const marsMesh = new THREE.Mesh(geometry, material)
  scene.add(marsMesh)

  const the_map2 = new THREE.TextureLoader().load('./images/cloudmap.jpg')
  const geometry2  = new THREE.SphereGeometry(0.51, 32, 32)
  const material2  = new THREE.MeshPhongMaterial({
    map         : the_map2,
    side        : THREE.DoubleSide,
    opacity     : 0.8,
    transparent : true,
    depthWrite  : false,
  })
  const cloudMesh = new THREE.Mesh(geometry2, material2)
  marsMesh.add(cloudMesh)


  const mouse = {}
  mouse.variation = 0.005

  const render = () => {
    requestAnimationFrame( render )

    // marsMesh.rotation.y += 0.005
    marsMesh.rotation.y += mouse.variation
    // cube.rotation.x += 0.1
    // cube.rotation.y += 0.1

    renderer.render(scene, camera)
  }

  render()

  const planetButton = document.querySelector('.planet')

  const mouseEvent = planetButton.addEventListener('mousemove', (e) => {
    if((window.innerWidth/2) < e.clientX) {
      mouse.variation = 0.005
    } else {
      mouse.variation = -0.005
    }
  })

}

planet.initPlanet()

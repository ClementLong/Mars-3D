const planet = {}

// Init three.js requirement
planet.three = require('three')
planet.scene = new planet.three.Scene()
planet.camera = new planet.three.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
planet.spotLight = new planet.three.SpotLight( 0xffffbb, 1.3 )
planet.section = document.querySelector('.planet__three')
planet.rotationVariationY = 0.001
planet.rotationVariationX = 0.001
planet.renderer = new planet.three.WebGLRenderer()
planet.state = 4;

planet.initCamera = () => {
  planet.camera.position.z = 5
}

planet.InitSpotLight = () => {
  planet.spotLight.position.set( 1.75, 0.75, 2 )
  planet.spotLight.position.multiplyScalar( 700 )
  planet.scene.add( planet.spotLight )

  planet.spotLight.castShadow = true

  planet.spotLight.shadow.mapSize.width = 2048
  planet.spotLight.shadow.mapSize.height = 2048

  planet.spotLight.shadow.camera.near = 500
  planet.spotLight.shadow.camera.far = 500

  planet.spotLight.shadow.camera.fov = 200

  planet.spotLight.shadow.bias = -0.005
}

planet.rotation = () => {
  const mouseEvent = planet.section.addEventListener('mousemove', (e) => {
    if( (window.innerWidth/2) < e.clientX) {
      planet.rotationVariationY = 0.001
    } else {
      planet.rotationVariationY = -0.001
    }
    if( (window.innerHeight/2) < e.clientY) {
      planet.rotationVariationX = 0.001
    } else {
      planet.rotationVariationX = -0.001
    }
  })
}

planet.renderPosition = () => {
  planet.renderer.setSize( window.innerWidth/1.25 , window.innerHeight/1.25 )
  planet.section.appendChild( planet.renderer.domElement )
}

planet.textureLoader = (theMapPath, theBmapPath) => {
  const theMap = new planet.three.TextureLoader().load(theMapPath)
  const theBmap = new planet.three.TextureLoader().load(theBmapPath)
  const geometry  = new planet.three.SphereGeometry(2, 32, 32)
  const material  = new planet.three.MeshPhongMaterial({
    map : theMap,
    specular: 0x222222,
    shininess: 10,
    bumpMap : theBmap,
    bumpScale	: 0.02,
  })

  planet.marsMesh = new planet.three.Mesh(geometry, material)
  planet.scene.add(planet.marsMesh)
}

planet.atmosphere = () => {

  const canvasResult	= document.createElement('canvas')
	canvasResult.width	= 1024
	canvasResult.height	= 512
	const contextResult	= canvasResult.getContext('2d')

	const imageMap	= new Image();
	imageMap.addEventListener("load", function() {
		const canvasMap	= document.createElement('canvas')
		canvasMap.width	= imageMap.width
		canvasMap.height= imageMap.height
		const contextMap	= canvasMap.getContext('2d')
		contextMap.drawImage(imageMap, 0, 0)
		const dataMap	= contextMap.getImageData(0, 0, canvasMap.width, canvasMap.height)

		const imageTrans	= new Image();
		imageTrans.addEventListener("load", function(){
			const canvasTrans		= document.createElement('canvas')
			canvasTrans.width	= imageTrans.width
			canvasTrans.height	= imageTrans.height
			const contextTrans	= canvasTrans.getContext('2d')
			contextTrans.drawImage(imageTrans, 0, 0)
			const dataTrans		= contextTrans.getImageData(0, 0, canvasTrans.width, canvasTrans.height)
			const dataResult		= contextMap.createImageData(canvasMap.width, canvasMap.height)
			for(let y = 0, offset = 0; y < imageMap.height; y++){
				for(let x = 0; x < imageMap.width; x++, offset += 4){
					dataResult.data[offset+0]	= dataMap.data[offset+0]
					dataResult.data[offset+1]	= dataMap.data[offset+1]
					dataResult.data[offset+2]	= dataMap.data[offset+2]
					dataResult.data[offset+3]	= 255 - dataTrans.data[offset+0]
				}
			}
			contextResult.putImageData(dataResult,0,0)
			material.map.needsUpdate = true;
		})
		imageTrans.src	= './images/cloudmaptr.jpg'
	}, false);
	imageMap.src	= './images/cloudmap.jpg'


  // const theMap = new planet.three.TextureLoader().load('./images/cloudmap.jpg')
  // const theMapTransparency = new planet.three.TextureLoader().load('./images/cloudmaptr.jpg')
  const geometry  = new planet.three.SphereGeometry(2.1, 32, 32)
  const material  = new planet.three.MeshPhongMaterial({
    map         : new planet.three.Texture(canvasResult),
    side        : planet.three.DoubleSide,
    opacity     : 0.8,
    transparent : true,
    depthWrite  : false,
  })
  const cloudMesh = new planet.three.Mesh(geometry, material)
  planet.marsMesh.add(cloudMesh)
}

planet.render = () => {
  const render = () => {
    requestAnimationFrame( render )

    planet.marsMesh.rotation.y += planet.rotationVariationY
    planet.marsMesh.rotation.x += planet.rotationVariationX

    planet.renderer.render(planet.scene, planet.camera)
  }
  render()
}

planet.initPlanet = () => {
  // Init scene & camera
  planet.initCamera()

  // Init Sphere
  planet.scene.add( new planet.three.HemisphereLight( 0x443333, 0x111122 ) )

  // Init Light
  planet.InitSpotLight()

  planet.renderPosition()

  planet.textureLoader('./images/mars_1k_color.jpg', './images/mars_1k_topo.jpg')

  if(planet.state = 4) {
    planet.atmosphere()
  }

  planet.render()

  planet.rotation()
}

planet.initPlanet()

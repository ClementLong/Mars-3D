// Quizz

const quizz = {}

quizz.update = () => {
  quizz.request = new XMLHttpRequest()
  quizz.request.open('GET', '../app/data/questions.json', false)
  quizz.request.send(null)

  quizz.answer = JSON.parse(quizz.request.responseText)

  let currentQuestion = quizz.answer.questions[quizz.state]

  quizz.expConext.innerHTML = currentQuestion.context
  quizz.expQuestion.innerHTML = currentQuestion.question

  quizz.state++
}

quizz.init = () => {
  quizz.yes = document.querySelector('.yes')
  quizz.no = document.querySelector('.no')
  quizz.expConext = document.querySelector('.exp__context')
  quizz.expQuestion = document.querySelector('.exp__question')
  quizz.response = []
  quizz.state = 0

  quizz.update()

  quizz.yes.addEventListener('mousedown', () => {
    if(quizz.state > 3) {
      nav.result();
      return false;
    }
    document.querySelector('.planet__three' + quizz.state).remove()
    planet.initPlanet(quizz.state + 1)
    quizz.update()
    quizz.response.push(true)
  })

  quizz.no.addEventListener('click', () => {
    if(quizz.state > 3) {
      nav.result();
      return false;
    }
    document.querySelector('.planet__three' + quizz.state).remove()
    planet.initPlanet(quizz.state + 1)
    quizz.update()
    quizz.response.push(false)
  })
}

// Planet
const planet = {}

// Init three.js requirement

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
    if( (planet.section.offsetWidth/2) < e.clientX) {
      planet.rotationVariationY = 0.001
    } else {
      planet.rotationVariationY = -0.001
    }
    if( (planet.section.offsetWidth/2) < e.clientY) {
      planet.rotationVariationX = 0.001
    } else {
      planet.rotationVariationX = -0.001
    }
  })
}

planet.renderPosition = () => {
  planet.renderer.setSize( planet.section.offsetWidth , planet.section.offsetHeight )
  planet.section.appendChild( planet.renderer.domElement )
}

planet.textureLoader = (theMapPath, theBmapPath) => {
  const theMap = new planet.three.TextureLoader().load(theMapPath)
  const theBmap = new planet.three.TextureLoader().load(theBmapPath)
  const geometry  = new planet.three.SphereGeometry(2, 32, 32)
  const material  = new planet.three.MeshPhongMaterial({
    map : theMap,
    specular: 0x22222,
    shininess: 10,
    bumpMap : theBmap,
    bumpScale	: 0.04,
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

    planet.renderer.render(planet.scene, planet.camera)
  }
  render()
}

planet.initPlanet = (state) => {
  planet.three = require('three')
  planet.scene = new planet.three.Scene()
  planet.section = document.querySelector('.planet__three' + state)
  planet.camera = new planet.three.PerspectiveCamera( 75, planet.section.offsetWidth/planet.section.offsetHeight, 0.1, 1000 )
  planet.spotLight = new planet.three.SpotLight( 0xffffbb, 1.3 )
  planet.rotationVariationY = 0.001
  planet.rotationVariationX = 0.001
  planet.renderer = new planet.three.WebGLRenderer()
  // Init scene & camera
  planet.initCamera()

  // Init Sphere
  planet.scene.add( new planet.three.HemisphereLight( 0x443333, 0x111122 ) )

  // Init Light
  planet.InitSpotLight()

  planet.renderPosition()

  if(state == 1) {
    planet.textureLoader('../app/images/mars/mars_1k_color1.jpg', '../app/images/mars/mars_1k_topo1.jpg')
  } else if (state == 2) {
    planet.textureLoader('../app/images/mars/mars_1k_color2.jpg', '../app/images/mars/mars_1k_topo2.jpg')
  } else if (state == 3) {
    planet.textureLoader('../app/images/mars/mars_1k_color3.jpg', '../app/images/mars/mars_1k_topo3.jpg')
  } else if (state == 4) {
    planet.textureLoader('../app/images/mars/mars_1k_color4.jpg', '../app/images/mars/mars_1k_topo4.jpg')
  }

  if(state == 4) {
    planet.atmosphere()
  }

  const geometry  = new planet.three.SphereGeometry(90, 32, 32)
  const material  = new planet.three.MeshBasicMaterial()
  material.map   = planet.three.ImageUtils.loadTexture('../app/images/mars/star.jpg')
  material.side  = planet.three.BackSide
  const mesh  = new planet.three.Mesh(geometry, material)


  planet.render()

  planet.rotation()
}

// Navigation

const nav = {}

nav.button = {}
nav.button.begin = document.querySelector('.intro__action')
nav.button.next = document.querySelector('.exp__btn')
nav.button.result = document.querySelector('.yes')

nav.scene = {}
nav.scene.intro = document.querySelector('.intro')
nav.scene.exp_intro = document.querySelector('.exp__intro')
nav.scene.exp_quizz = document.querySelector('.exp__quizz')
nav.scene.result = document.querySelector('.result')

nav.init = () => {
  nav.button.begin.addEventListener('click', () => {
    nav.scene.intro.classList.add('none')
    nav.scene.exp_intro.classList.add('block')
  })
  nav.button.next.addEventListener('click', () => {
    nav.scene.exp_intro.classList.remove('block')
    nav.scene.exp_quizz.classList.add('flex')
    planet.initPlanet(1)
    quizz.init()
  })
}

nav.result = () => {
  nav.scene.exp_quizz.classList.remove('flex')
  nav.scene.result.classList.add('block')
}

nav.init();

import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import TWEEN from '@tweenjs/tween.js'
@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.scss']
})
export class TerrainComponent implements OnInit {
  scene: THREE.Scene ;
  camera: THREE.PerspectiveCamera ;
  renderer: THREE.WebGLRenderer ;
  controls: OrbitControls;
  constructor() {
   
    const dracoLoader = new DRACOLoader()
    const loader = new GLTFLoader()

    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
    dracoLoader.setDecoderConfig({ type: 'js' })
    loader.setDRACOLoader(dracoLoader)
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#c8f0f9')
    this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 100)
    this.camera.position.set(34,16,-20)
    this.scene.add(this.camera)
    const container = document.createElement('div')
    // document.body.appendChild(container);
    document.getElementsByClassName("tarrain")[0].appendChild(container);

this.renderer = new THREE.WebGLRenderer({ antialias: true}) // turn on antialias
this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) //set pixel ratio
this.renderer.setSize(window.innerWidth, window.innerHeight) // make it full screen
this.renderer.outputEncoding = THREE.sRGBEncoding // set color encoding

container.appendChild(this.renderer.domElement) 
//  document.getElementsByClassName("tarrain")[0].appendChild(this.renderer.domElement);
this.controls = new OrbitControls(this.camera, this.renderer.domElement)

const ambient = new THREE.AmbientLight(0xa0a0fc, 0.82)
this.scene.add(ambient)

const sunLight = new THREE.DirectionalLight(0xe8c37b, 1.96)
sunLight.position.set(-69,44,14)
this.scene.add(sunLight)

loader.load('shared/models/gltf/starter-scene.glb',  (gltf) => {
  this.scene.add(gltf.scene)
})

  }
  ngOnInit(): void {
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      const height = window.innerHeight
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
  
      this.renderer.setSize(width, height)
      this.renderer.setPixelRatio(2);
      this.introAnimation() 
      this.rendeLoop()
  })
  }
 introAnimation() {
  
  this.controls.enabled = false //disable orbit controls to animate the camera
    
    new TWEEN.Tween(this.camera.position.set(26,4,-35 )).to({ // from camera position
        x: 16, //desired x position to go
        y: 50, //desired y position to go
        z: -0.1 //desired z position to go
    }, 6500) // time take to animate
    .delay(1000).easing(TWEEN.Easing.Quartic.InOut).start() // define delay, easing
    .onComplete( () => { //on finish animation
     this.controls.enabled = true //enable orbit controls
     this.setOrbitControlsLimits() //enable controls limits
        // TWEEN.remove(this) // remove the animation from memory
    })
    
}
setOrbitControlsLimits(){
  this.controls.enableDamping = true
   this.controls.dampingFactor = 0.04
   this.controls.minDistance = 35
   this.controls.maxDistance = 60
   this.controls.enableRotate = true
   this.controls.enableZoom = true
   this.controls.maxPolarAngle = Math.PI /2.5
}

rendeLoop() {

  TWEEN.update() // update animations

  this.controls.update() // update orbit controls

  this.renderer.render(this.scene, this.camera) // render the scene using the camera

  requestAnimationFrame(this.rendeLoop) //loop the render function
  
}
}



import * as THREE from 'three';

export class App {
  constructor(loader) {
    this.loader = loader;
    this.pointLight = new THREE.PointLight(0xffffff, 3);
    this.pointLight2 = new THREE.PointLight(0xffffff, .3);
    this.pointLight.position.set(120, 5, 10);
    this.pointLight2.position.set(-60, 0, 20);
    this.loader.scene.add(this.pointLight, this.pointLight2);
    this.createCloud();
  }

  createCloud = () => {
    this.cloud = new THREE.Object3D();
    let pos = 0;
    for (let i = 0; i <= 10; i++) {
      const color = new THREE.Color(`hsl(${250 + Math.random() * 90}, 90%, 35%)`);
      const cubeGeometry = new THREE.SphereGeometry(2, 25, 25);
      const cubeMaterial = new THREE.MeshPhongMaterial({ color });
      const newSphere = new THREE.Mesh(cubeGeometry, cubeMaterial);
      newSphere.position.set(pos / 3, -50 + pos * 7, 1);
      this.cloud.add(newSphere);
      pos++;
    }
    this.loader.scene.add(this.cloud);
  }

  update = () => {
  }
}
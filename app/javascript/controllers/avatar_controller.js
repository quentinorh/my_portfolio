import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container"]

  connect() {
    // créer la scène, la caméra et le renderer
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.containerTarget.clientWidth / this.containerTarget.clientHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.containerTarget.clientWidth, this.containerTarget.clientHeight);
    this.containerTarget.appendChild(this.renderer.domElement);

    // charger le modèle STL
    const loader = new THREE.STLLoader();
    loader.load('/models/model.stl', (geometry) => {
      // créer le mesh et l'ajouter à la scène
      this.material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
      this.mesh = new THREE.Mesh(geometry, this.material);
      this.scene.add(this.mesh);

      // définir la position de la caméra
      this.camera.position.z = 5;

      // démarrer l'animation
      this.animate();
    });
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}

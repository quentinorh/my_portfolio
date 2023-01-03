import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="opacity"
export default class extends Controller {
  static targets = ["tags", "fabColor", "fabText", "photoColor", "photoText", "graphColor", "graphText", "devColor", "devText", "envColor", "envText"]
  static values = {
    content: String,
  }

  connect() {
    console.log("hello monde de merde!")
    console.log(this.tagsTarget.innerHTML)
    console.log(this.fabricationColorTarget)
    if (this.tagsTarget.innerHTML.includes("Fabrication")){
      this.fabColorTarget.classList.add("opacity-100")
      this.fabTextTarget.classList.add("opacity-100")
    }
    if (this.tagsTarget.innerHTML.includes("Photographie")){
      this.photoColorTarget.classList.add("opacity-100")
      this.photoTextTarget.classList.add("opacity-100")
    }
    if (this.tagsTarget.innerHTML.includes("Graphisme")){
      this.graphColorTarget.classList.add("opacity-100")
      this.graphTextTarget.classList.add("opacity-100")
    }
    if (this.tagsTarget.innerHTML.includes("Développement")){
      this.devColorTarget.classList.add("opacity-100")
      this.devTextTarget.classList.add("opacity-100")
    }
    if (this.tagsTarget.innerHTML.includes("Environnement")){
      this.envColorTarget.classList.add("opacity-100")
      this.envTextTarget.classList.add("opacity-100")
    }
  }
}

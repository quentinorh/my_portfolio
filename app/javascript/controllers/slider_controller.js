import { Controller } from "@hotwired/stimulus"
import { controller as ScrollMagicController } from "../config/scrollmagic"
import { Velocity } from "../config/velocity"

export default class extends Controller {
  static targets = ["slide"]

  connect() {
    console.log("Helloooo World!")
  }

  initialize() {
    // On crée un nouveau ScrollMagic Scene
    this.scene = new ScrollMagic.Scene({
      triggerElement: this.element,
      triggerHook: 0.8,
      reverse: false
    })

    // On ajoute une fonction de callback pour la méthode addIndicators (optionnel)
    this.scene.addIndicators = (options) => {
      new ScrollMagic.Indicators(options).addTo(ScrollMagicController)
    }

    // On ajoute une fonction de callback pour le défilement
    this.scene.on("enter", () => {
      this.animateIn()
    })

    // On ajoute une fonction de callback pour le scroll
    this.scene.on("leave", () => {
      this.animateOut()
    })

    // On ajoute la scène à ScrollMagic Controller
    this.scene.addTo(ScrollMagicController)
  }

  animateIn() {
    // On anime chaque slide avec Velocity
    Velocity(this.slideTargets, {
      translateX: 0,
      opacity: 1
    }, {
      delay: 200,
      duration: 1000,
      easing: "easeOutExpo"
    })
  }

  animateOut() {
    // On anime chaque slide avec Velocity
    Velocity(this.slideTargets, {
      translateX: "-100px",
      opacity: 0
    }, {
      duration: 1000,
      easing: "easeOutExpo"
    })
  }
}

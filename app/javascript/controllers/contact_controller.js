import { Controller } from "@hotwired/stimulus"
import gsap from "gsap";
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

export default class extends Controller {
  // connect() {
  //   // Créez un nouveau contrôleur scrollmagic
  //   const controller = new scrollmagic.Controller();

  //   // Créez une nouvelle scène pour votre section trigger
  //   const scene = new scrollmagic.Scene({
  //     triggerElement: "#contact-section", // ID de votre section trigger
  //     triggerHook: 0.5, // Point de déclenchement de l'animation (50% de la section visible)
  //     reverse: false, // L'animation ne se répète pas lorsqu'elle est terminée
  //   })
  //     .setClassToggle("#contact-section", "active") // Ajoutez la classe 'active' à votre section trigger lorsque l'animation est déclenchée
  //     .addTo(controller); // Ajoutez la scène au contrôleur scrollmagic

  //   // Utilisez GSAP pour animer vos blocs
  //   const tween = gsap.timeline()
  //     .from("#block1", { duration: 1, x: "-100%" })
  //     .from("#block2", { duration: 1, x: "-100%" })
  //     .from("#block3", { duration: 1, x: "-100%" })
  //     .from("#block4", { duration: 1, x: "-100%" })
  //     .from("#block5", { duration: 1, x: "-100%" })
  //     .from("#block6", { duration: 1, x: "-100%" });

  //   // Ajoutez l'animation à votre scène
  //   scene.setTween(tween);
  // }
}

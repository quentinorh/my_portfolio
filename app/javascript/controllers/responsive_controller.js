import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {

    console.log("Hello World!")

    // lastTouchTime is used for ignoring emulated mousemove events
    let lastTouchTime = 0

    function enableHover() {
      if (new Date() - lastTouchTime < 500) return;
      this.document.body.classList.add('hasHover')
    }

    function disableHover() {
      this.document.body.classList.remove('hasHover')
    }

    function updateLastTouchTime() {
      lastTouchTime = new Date()
    }

    this.document.addEventListener('touchstart', this.updateLastTouchTime, true)
    this.document.addEventListener('touchstart', this.disableHover, true)
    this.document.addEventListener('mousemove', this.enableHover, true)

    this.enableHover()
  }

  // watchForHover()
}

AFRAME.registerComponent('click-once', {
  init: function () {
    var self = this;
    var scene = self.el.sceneEl;
    var raycaster = scene.querySelector('[cursor]').components.raycaster;

    var clickHandler = function (e) {
      self.el.removeAttribute('data-clickable');
      // Remove event listener since no longer needed.enter
      self.el.removeEventListener('click', clickHandler);
    };
    // Add event listener for click.
    self.el.addEventListener('click', clickHandler);
  }
});

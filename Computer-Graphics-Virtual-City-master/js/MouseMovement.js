var lesson10 = {
  scene: null, camera: null, renderer: null,
  container: null, controls: null,
  clock: null, stats: null,
  plane: null, selection: null, offset: new THREE.Vector3(), objects: [],
  raycaster: new THREE.Raycaster(),
  init: function() {
    // Create main scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0xcce0ff, 0.0003);
    var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
    // Prepare perspective camera
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 1000;
    this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    this.scene.add(this.camera);
    this.camera.position.set(100, 0, 0);
    this.camera.lookAt(new THREE.Vector3(0,0,0));
    // Prepare webgl renderer
    this.renderer = new THREE.WebGLRenderer({ antialias:true });
    this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    this.renderer.setClearColor(this.scene.fog.color);
    // Prepare container
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
    this.container.appendChild(this.renderer.domElement);
    // Events
    THREEx.WindowResize(this.renderer, this.camera);
    document.addEventListener('mousedown', this.onDocumentMouseDown, false);
    document.addEventListener('mousemove', this.onDocumentMouseMove, false);
    document.addEventListener('mouseup', this.onDocumentMouseUp, false);
    // Prepare Orbit controls
    this.controls = new THREE.OrbitControls(this.camera);
    this.controls.target = new THREE.Vector3(0, 0, 0);
    this.controls.maxDistance = 150;
    // Prepare clock
    this.clock = new THREE.Clock();
    // Prepare stats
    this.stats = new Stats();
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '50px';
    this.stats.domElement.style.bottom = '50px';
    this.stats.domElement.style.zIndex = 1;
    this.container.appendChild( this.stats.domElement );
    // Add lights
    this.scene.add( new THREE.AmbientLight(0x444444));
    var dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(200, 200, 1000).normalize();
    this.camera.add(dirLight);
    this.camera.add(dirLight.target);
    ....
  },
  addSkybox: function() {
    ....
  },
  onDocumentMouseDown: function (event) {
    ....
  },
  onDocumentMouseMove: function (event) {
    ....
  },
  onDocumentMouseUp: function (event) {
    ....
  }
};
// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  render();
  update();
}
// Update controls and stats
function update() {
  var delta = lesson10.clock.getDelta();
  lesson10.controls.update(delta);
  lesson10.stats.update();
}
// Render the scene
function render() {
  if (lesson10.renderer) {
    lesson10.renderer.render(lesson10.scene, lesson10.camera);
  }
}
// Initialize lesson on page load
function initializeLesson() {
  lesson10.init();
  animate();
}
if (window.addEventListener)
  window.addEventListener('load', initializeLesson, false);
else if (window.attachEvent)
  window.attachEvent('onload', initializeLesson);
else window.onload = initializeLesson;
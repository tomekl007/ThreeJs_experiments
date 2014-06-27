
document.onreadystatechange = function(){

var camera, scene, renderer;
var geometry, material, mesh, sphereMesh;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 2, 10000);
    camera.position.z = 1000;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry(200, 200, 200);
    material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
    });

    material2 = new THREE.MeshBasicMaterial({
        color: 0x000dd0,
        wireframe: true
    });

	var radius = 50,
    	segments = 16,
    	rings = 16;
    var sphere = new THREE.SphereGeometry(radius, segments, rings);

    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    sphereMesh = new THREE.Mesh(sphere, material2);
    sphereMesh.position.x = 300;
    scene.add(sphereMesh);


    renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    console.log(renderer);

    console.log(" body " + document.body);
    document.body.appendChild(renderer.domElement);
    console.dir(sphereMesh);

}

function animate() {

    // note: three.js includes requestAnimationFrame shim
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    sphereMesh.rotation.x -= 0.01;
    sphereMesh.rotation.y -= 0.02;



    renderer.render(scene, camera);

}

}
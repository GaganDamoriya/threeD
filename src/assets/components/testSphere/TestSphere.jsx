import React, { useEffect } from "react";
import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const TestSphere = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const geometry = new THREE.SphereGeometry(3, 32, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff83,
      roughness: 0.2,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    // scene.add(ambientLight);

    const light = new THREE.PointLight(0xffffff, 80, 100);
    light.position.set(0, 7, 10);
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.z = 20;
    scene.add(camera);

    const canvas = document.getElementById("myThreeJsCanvas2");
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);
    renderer.render(scene, camera);

    const controls = new OrbitControls(camera, canvas);
    controls.enabled = true;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;

    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    function render() {
      requestAnimationFrame(render);
      controls.update();
      renderer.render(scene, camera);
    }

    render();

    const t1 = gsap.timeline({ defaults: { duration: 1 } });
    t1.fromTo(sphere.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
    t1.fromTo(".navBar", { y: "-100%" }, { y: "0%" });
    t1.fromTo(".title", { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas2" />
      <h1 className="title">Give it a Spin !</h1>
    </div>
  );
};

export default TestSphere;

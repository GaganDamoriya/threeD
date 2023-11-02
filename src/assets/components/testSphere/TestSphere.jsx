import React, { useEffect } from "react";
import * as THREE from "three";

const TestSphere = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(3, 64, 14);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff83 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 50, 100);
    light.position.set(0, 8, 10);
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000);
    camera.position.z = 20;
    scene.add(camera);

    const canvas = document.getElementById("myThreeJsCanvas2");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      clearColor: 0x000000,
    });
    renderer.setSize(800, 600);

    // Create an animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere (or perform any other animations)
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas2" />
    </div>
  );
};

export default TestSphere;

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Cinematic3DHeroProps {
  intensity?: number;
}

export const Cinematic3DHero: React.FC<Cinematic3DHeroProps> = ({ intensity = 1 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03060f, 0.0018);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 1. Floating Celestial Particles (Gold & Silver Stardust)
    const particleCount = reducedMotion ? 40 : (window.innerWidth < 768 ? 70 : 180);
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const goldColor = new THREE.Color('#FBBF24');
    const whiteColor = new THREE.Color('#FFFFFF');
    const cyanColor = new THREE.Color('#7DD3FC');
    const tempColor = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = (Math.random() - 0.5) * 40;
      positions[i3 + 2] = (Math.random() - 0.5) * 40;

      // Color variation
      const r = Math.random();
      if (r < 0.6) {
        tempColor.copy(goldColor).lerp(whiteColor, Math.random() * 0.5);
      } else if (r < 0.85) {
        tempColor.copy(whiteColor);
      } else {
        tempColor.copy(cyanColor);
      }

      colors[i3] = tempColor.r;
      colors[i3 + 1] = tempColor.g;
      colors[i3 + 2] = tempColor.b;

      scales[i] = Math.random() * 2.5 + 0.5;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 2. Luminous 3D Cross Structure
    const crossGroup = new THREE.Group();

    const crossMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFD700,
      emissive: 0xF59E0B,
      emissiveIntensity: 0.55,
      metalness: 0.85,
      roughness: 0.2,
     });

    // Vertical Beam
    const verticalGeo = new THREE.BoxGeometry(0.5, 7.5, 0.4);
    const verticalMesh = new THREE.Mesh(verticalGeo, crossMaterial);
    crossGroup.add(verticalMesh);

    // Horizontal Beam
    const horizontalGeo = new THREE.BoxGeometry(4.8, 0.5, 0.4);
    const horizontalMesh = new THREE.Mesh(horizontalGeo, crossMaterial);
    horizontalMesh.position.y = 1.5;
    crossGroup.add(horizontalMesh);

    // Radiant Halo Ring behind Cross
    const haloGeo = new THREE.TorusGeometry(2.2, 0.04, 16, 64);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xFBBF24,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMaterial);
    haloMesh.position.set(0, 1.5, -0.2);
    crossGroup.add(haloMesh);

    crossGroup.position.set(0, 0.5, -3);
    crossGroup.scale.set(0.9, 0.9, 0.9);
    scene.add(crossGroup);

    // 3. Volumetric Heavenly Light Rays (Subtle Cones)
    const raysGroup = new THREE.Group();
    const rayMaterial = new THREE.MeshBasicMaterial({
      color: 0xF59E0B,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    for (let i = 0; i < 7; i++) {
      const coneGeo = new THREE.ConeGeometry(3.5, 26, 16, 1, true);
      const ray = new THREE.Mesh(coneGeo, rayMaterial);
      ray.position.set(0, 8, -6);
      ray.rotation.z = (i - 3) * 0.14;
      ray.rotation.x = Math.PI;
      raysGroup.add(ray);
    }
    scene.add(raysGroup);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xFBBF24, 3 * intensity, 35);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    const blueRimLight = new THREE.PointLight(0x38BDF8, 2, 25);
    blueRimLight.position.set(-6, -4, 4);
    scene.add(blueRimLight);

    // Mouse & Scroll Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      if (!reducedMotion) {
        mouseX += (targetMouseX - mouseX) * 0.04;
        mouseY += (targetMouseY - mouseY) * 0.04;

        camera.position.x = mouseX * 2.2;
        camera.position.y = -mouseY * 1.5;
        camera.lookAt(0, 0.5, 0);

        // Slow rotation & float of cross
        crossGroup.rotation.y = Math.sin(elapsedTime * 0.4) * 0.15 + mouseX * 0.2;
        crossGroup.rotation.x = Math.cos(elapsedTime * 0.3) * 0.08 - mouseY * 0.1;
        crossGroup.position.y = 0.5 + Math.sin(elapsedTime * 0.8) * 0.2;

        // Halo spin
        haloMesh.rotation.z = elapsedTime * 0.2;

        // Particle drifting
        particles.rotation.y = elapsedTime * 0.03;
        particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

        // Ray pulsing
        raysGroup.rotation.z = Math.sin(elapsedTime * 0.15) * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      particleGeometry.dispose();
      particleMaterial.dispose();
      verticalGeo.dispose();
      horizontalGeo.dispose();
      crossMaterial.dispose();
      haloGeo.dispose();
      haloMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion, intensity]);

  if (!webglSupported) {
    return (
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15)_0%,rgba(3,6,15,0.95)_75%)]" />
    );
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

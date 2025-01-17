import * as THREE from "three";

export const createPointLight = (
  color = 0xffffff,
  intensity = 1,
  position = [0, 0, 0]
) => {
  const light = new THREE.PointLight(color, intensity);
  light.position.set(...position);
  return light;
};

export const createCustomShaderMaterial = (
  vertexShader,
  fragmentShader,
  uniforms
) => {
  return new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      ...uniforms,
      time: { value: 0 },
      resolution: { value: new THREE.Vector2() },
    },
    transparent: true,
  });
};

export const createStarfield = (count = 1000) => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 2000;
    positions[i + 1] = (Math.random() - 0.5) * 2000;
    positions[i + 2] = -Math.random() * 2000;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    size: 2,
    sizeAttenuation: true,
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
    fog: true,
  });

  return new THREE.Points(geometry, material);
};

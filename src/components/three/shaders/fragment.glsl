varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vWorldPosition;

uniform vec3 color;
uniform float time;

void main() {
    // Create a gradient based on position
    vec3 gradientColor = mix(color, color * 0.5, vPosition.y * 0.5 + 0.5);
    
    // Add some noise
    float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453123);
    
    // Pulse effect
    float pulse = sin(time * 2.0) * 0.5 + 0.5;
    
    // Rim lighting effect
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float rimDot = 1.0 - max(0.0, dot(viewDirection, vNormal));
    float rimAmount = pow(rimDot, 4.0);
    
    // Combine effects
    vec3 finalColor = gradientColor + vec3(rimAmount * 0.3) + (noise * 0.05);
    finalColor *= (1.0 + pulse * 0.2);
    
    gl_FragColor = vec4(finalColor, 1.0);
}

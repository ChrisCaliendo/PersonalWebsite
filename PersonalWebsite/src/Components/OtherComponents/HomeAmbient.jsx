import { useEffect, useRef } from "react";

const HomeAmbient = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!container || !canvas || !context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };
    let particles = [];
    let frameId;
    let lastFrameTime;
    let width = 0;
    let height = 0;
    const glowRadius = 260;

    const resizeCanvas = () => {
      const bounds = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(72, Math.max(28, Math.floor((width * height) / 18000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        radius: Math.random() * 1.4 + 1,
      }));

      if (reducedMotion.matches) drawFrame();
    };

    const drawFrame = () => {
      context.clearRect(0, 0, width, height);

      if (pointer.active) {
        const glow = context.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          glowRadius,
        );
        glow.addColorStop(0, "rgba(91, 145, 99, 0.32)");
        glow.addColorStop(0.45, "rgba(116, 157, 119, 0.18)");
        glow.addColorStop(1, "rgba(116, 157, 119, 0)");
        context.fillStyle = glow;
        context.fillRect(
          pointer.x - glowRadius,
          pointer.y - glowRadius,
          glowRadius * 2,
          glowRadius * 2,
        );
      }

      particles.forEach((particle, index) => {
        const pointerDistance = pointer.active
          ? Math.hypot(particle.x - pointer.x, particle.y - pointer.y)
          : Infinity;
        const pointerInfluence = Math.max(0, 1 - pointerDistance / 190);

        if (!reducedMotion.matches) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > height) particle.vy *= -1;

          if (pointer.active) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.hypot(dx, dy);

            if (distance < 125 && distance > 0) {
              const force = (125 - distance) / 500;
              particle.x += (dx / distance) * force;
              particle.y += (dy / distance) * force;
            }
          }
        }

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const other = particles[nextIndex];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);

          if (distance < 125) {
            const nearbyInfluence = Math.max(
              pointerInfluence,
              pointer.active
                ? Math.max(0, 1 - Math.hypot(other.x - pointer.x, other.y - pointer.y) / 190)
                : 0,
            );
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(55, 103, 64, ${(1 - distance / 125) * (0.16 + nearbyInfluence * 0.3)})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(55, 103, 64, ${0.34 + pointerInfluence * 0.5})`;
        context.fill();
      });
    };

    const animate = (timestamp) => {
      if (pointer.active && !reducedMotion.matches) {
        const elapsed = lastFrameTime === undefined ? 0 : timestamp - lastFrameTime;
        const smoothing = 1 - Math.exp(-elapsed / 85);
        pointer.x += (pointer.targetX - pointer.x) * smoothing;
        pointer.y += (pointer.targetY - pointer.y) * smoothing;
      }

      lastFrameTime = timestamp;
      drawFrame();
      if (!reducedMotion.matches) frameId = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      if (event.pointerType === "touch") return;
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
      if (!pointer.active || reducedMotion.matches) {
        pointer.x = pointer.targetX;
        pointer.y = pointer.targetY;
      }
      pointer.active = true;
      if (reducedMotion.matches) drawFrame();
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      if (reducedMotion.matches) drawFrame();
    };

    const handleMotionChange = () => {
      window.cancelAnimationFrame(frameId);
      lastFrameTime = undefined;
      if (reducedMotion.matches) {
        pointer.x = pointer.targetX;
        pointer.y = pointer.targetY;
        drawFrame();
      } else {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    reducedMotion.addEventListener("change", handleMotionChange);
    resizeCanvas();
    if (!reducedMotion.matches) animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div className="home-ambient" ref={containerRef} aria-hidden="true">
      <canvas className="home-ambient-canvas" ref={canvasRef} />
    </div>
  );
};

export default HomeAmbient;

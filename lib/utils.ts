export const runFireworks = async () => {
  const { default: confetti } = await import("canvas-confetti");

  const DURATION = 5000;
  const DEFAULTS = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const animationEnd = Date.now() + DURATION;

  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

  const interval: NodeJS.Timer = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) return clearInterval(interval);

    const particleCount = Math.floor(50 * (timeLeft / DURATION));
    const origin1 = { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 };
    const origin2 = { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 };

    confetti({ ...DEFAULTS, particleCount, origin: origin1 });
    confetti({ ...DEFAULTS, particleCount, origin: origin2 });
  }, 250);
};

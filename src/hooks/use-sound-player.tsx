export function useSoundPlayer() {
  const playSound = (key: string) => {
    const keyMapping: Record<string, string> = {
      " ": "space",
      Enter: "enter",
      Backspace: "backspace",
      Tab: "tab",
    };

    const soundKey = keyMapping[key] || key.toLowerCase();

    const audio = new Audio(`/sounds/${soundKey}.wav`);
    audio.play().catch(() => {
      playFallbackSound();
    });
  };

  const playFallbackSound = () => {
    const audio = new Audio(`/sounds/b.wav`);
    audio.play();
  };

  return { playSound };
}

export function calculateWPM(correctChars: number, elapsedTime: number) {
  if (elapsedTime <= 0) return 0;
  return Math.round((correctChars / 5 / elapsedTime) * 60);
}

export function calculateCPM(correctChars: number, elapsedTime: number) {
  if (elapsedTime <= 0) return 0;
  return Math.round(correctChars * (60 / elapsedTime));
}

export function getRandomArbitrary(min, max) {
  const random = Math.random() * (max - min) + min;
  return parseInt(random, 10)
}
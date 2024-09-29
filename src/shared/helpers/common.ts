export function generateRandomValue(min: number, max: number, numDigitsAfterPoint: number = 0): number {
  const randomValue = Math.random() * (max - min) + min;
  const fixedValueString = randomValue.toFixed(numDigitsAfterPoint);
  return Number(fixedValueString);
}

export function generateRandomBoolean(): boolean {
  const randomValue = generateRandomValue(0, 1);
  return Boolean(randomValue);
}

export function getRandomItems<T>(items: T[]): T[] {
  const startPosition = generateRandomValue(0, items.length - 1);
  const endPosition = generateRandomValue(startPosition, items.length - 1);
  return items.slice(startPosition, endPosition);
}

export function getRandomItem<T>(items: T[]): T {
  const position = generateRandomValue(0, items.length - 1);
  return items[position];
}

export function getRandomEnumValue<T extends object>(enumObject: T): T[keyof T] {
  const enumValues = Object.values(enumObject);
  return getRandomItem(enumValues);
}

export function getRandomEnumValues<T extends object>(enumObject: T): T[keyof T][] {
  const enumValues = Object.values(enumObject);
  return getRandomItems(enumValues);
}

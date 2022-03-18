export const random = (min: number, max: number) : number => Math.floor(Math.random() * (max - min + 1) + min);
export const chance = (percentage: number) : boolean => random(0, 100) < percentage * 100;

export default { random, chance };

export const CatAction = {
  FEED: 'FEED',
  PET: 'PET',
  PLAY: 'PLAY',
  NAP: 'NAP'
} as const;
export type CatAction = typeof CatAction[keyof typeof CatAction];


export const CatMood = {
  HAPPY: 'HAPPY',
  NEUTRAL: 'NEUTRAL',
  SAD: 'SAD',
  SLEEPY: 'SLEEPY',
} as const;
export type CatMood = typeof CatMood[keyof typeof CatMood];


export interface CatState {
  happiness: number;
  hunger: number;
  energy: number;
}
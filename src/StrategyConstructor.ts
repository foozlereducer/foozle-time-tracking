import { IStrategy } from "./index";
export type StrategyConstructor = {
  // A Constructor for the IStrategy
  new (): IStrategy;
};

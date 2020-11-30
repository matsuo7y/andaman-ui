// Types
export enum TradeRunType {
  OandaSimulation = "oanda_simulation",
  OandaTrade = "oanda_trade",
}

export enum TradeSetType {
  Trade = "trade",
  Simulation = "simulation",
  GridSearch = "grid_search",
}

// States
export enum TradeRunState {
  Pending = "pending",
  Running = "running",
  Finished = "finished",
}
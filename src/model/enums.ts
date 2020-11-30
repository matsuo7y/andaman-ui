// definitions
export enum TradePair {
  GbpUsd = "GBP/USD",
	EurUsd = "EUR/USD",
	AudUsd = "AUD/USD",
	AudJpy = "AUD/JPY",
	GbpAud = "GBP/AUD",
	EurAud = "EUR/AUD",
	UsdJpy = "USD/JPY",
	GbpJpy = "GBP/JPY",
	EurJpy = "EUR/JPY",
	EurGbp = "EUR/GBP",
}

export enum Timezone {
  TokyoAM = "tokyo_am",
	TokyoPM = "tokyo_pm",
	LondonAM = "london_am",
	LondonPM = "london_pm",
	NewYorkAM = "newyork_am",
	NewYorkPM = "newyork_pm",
}

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

export enum TradeAlgorithmType {
  Frame = "frame",
}

export enum TradeDirection {
  Long = "long",
  Short = "short",
}

// States
export enum TradeRunState {
  Pending = "pending",
  Running = "running",
  Finished = "finished",
}

export enum OrderState {
  Open = "open",
  Closed = "closed"
}
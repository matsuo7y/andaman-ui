export {}

declare global {
  interface Number {
    toDateString(): string
  }
}

Number.prototype.toDateString = function () {
  const num = (this as Number).valueOf()
  const time = new Date(num + 1000)

  return `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`
}

export type Customizer<T> = (resp: T) => T

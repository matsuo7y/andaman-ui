export interface OffsetPaging {
  all: number
  count: number
  offset: number
}

export function newOffsetPaging(init: any): OffsetPaging {
  return {
    all: init.all,
    count: init.count,
    offset: init.offset,
  }
}
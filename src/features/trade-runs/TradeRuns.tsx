import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'app/store'
import { setCountOffset } from 'features/trade-runs/trade-runs-slice'
import Paginator, { CountOffset } from 'component/Paginator'

const TradeRuns = () => {
  const dispatch = useDispatch()

  const { all, count, offset } = useSelector((state: RootState) => state.tradeRuns)

  const onMove = (co: CountOffset) => dispatch(setCountOffset(co))

  return <Paginator all={all} count={count} offset={offset} onMove={onMove} />
}

export default TradeRuns

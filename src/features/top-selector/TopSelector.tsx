import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { RootState } from 'app/store'
import { setTopOption, setShowOption, setRunOption, TopOption } from 'features/top-selector/top-selector-slice'
import { TradeRunType, TradeSetType, Links } from 'model/enums'
import ButtonSelector from 'component/ButtonSelector'

const TopSelector = () => {
  const dispatch = useDispatch()

  const { topOption, showOption, runOption } = useSelector((state: RootState) => state.topSelector)

  const onTopOptionSelected = (option: string) => dispatch(setTopOption(option))

  const onShowOptionSelected = (option: string) => dispatch(setShowOption({ type: option as TradeRunType }))

  const onRunOptionSelected = (option: string) => dispatch(setRunOption({ type: option as TradeSetType }))

  const topSelector = (
    <ButtonSelector options={[TopOption.Show, TopOption.Run]} initOption={topOption} onSelected={onTopOptionSelected} />
  )

  const confirmLink = (option: TopOption) => {
    switch (option) {
      case TopOption.Show:
        return Links.TradeRuns
      default:
        return Links.TradeSets
    }
  }

  const confirmButton = (
    <div className="d-flex justify-content-center">
      <Link to={confirmLink(topOption)}>
        <Button className="m-2" variant="secondary">
          confirm
        </Button>
      </Link>
    </div>
  )

  const detailSelector = (option: TopOption) => {
    switch (option) {
      case TopOption.Show:
        return (
          <ButtonSelector
            key="show"
            options={[TradeRunType.OandaTrade, TradeRunType.OandaSimulation]}
            initOption={showOption.type}
            onSelected={onShowOptionSelected}
          />
        )

      default:
        return (
          <ButtonSelector
            key="run"
            options={[TradeSetType.Trade, TradeSetType.Simulation, TradeSetType.GridSearch]}
            initOption={runOption.type}
            onSelected={onRunOptionSelected}
          />
        )
    }
  }

  return (
    <div>
      {topSelector}
      {detailSelector(topOption)}
      {confirmButton}
    </div>
  )
}

export default TopSelector

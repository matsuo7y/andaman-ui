import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'app/store'
import APIClient, { ResponseHandler } from 'model/api-client'
import { TradeRunsParam } from 'model/params'
import { TradeRunDetailsResponse, tradeRunDetailsResponseCustomizer } from 'model/response'
import { setResponse, setError } from 'features/trade-runs/trade-runs-slice'
import CardComponent, { CardComponentProps } from 'component/CardComponent'
import { RequestProps } from 'component/Request'
import { CardsProps } from 'component/Cards'
import RequestedCards from 'component/RequestedCards'

const TradeRuns = () => {
  const { response, error, fetched } = useSelector((state: RootState) => state.tradeRuns)
  const tradeRuns = response.tradeRuns
  const { all, count, offset } = response.paging

  const { showOption } = useSelector((state: RootState) => state.topSelector)

  const dispatch = useDispatch()

  const fetch = (count: number, offset: number) => {
    const params: TradeRunsParam = { type: showOption.type, count, offset }

    const handler: ResponseHandler<TradeRunDetailsResponse> = {
      onSuccess: (resp) => dispatch(setResponse(resp)),
      onError: (error) => dispatch(setError(error)),
      customizer: tradeRunDetailsResponseCustomizer
    }

    APIClient.shared.tradeRuns(params, handler)
  }

  useEffect(() => fetch(count, offset))

  const cardProps: CardComponentProps[] = tradeRuns.map((tradeRun) => {
    const { tradeRunId, type, ...list } = tradeRun
    const tradeSet = tradeRun.tradeSet

    const extra = (
      <CardComponent
        width={'16rem'}
        color={'bg-white'}
        title={tradeSet.name}
        subtitle={`version: ${tradeSet.version}`}
        list={list}
      />
    )

    return {
      width: '18rem',
      color: 'bg-light',
      margin: 'm-2',
      title: tradeRun.tradeRunId.toString(),
      subtitle: tradeRun.type,
      list,
      extra
    }
  })

  const onMove = (offset: number) => fetch(count, offset)

  const requestProps: RequestProps = {
    isError: error != undefined,
    statusCode: error?.statusCode,
    message: error?.message
  }

  const cardsProps: CardsProps = {
    cardProps,
    paginatorProps: { all, count, offset, onMove }
  }

  return <RequestedCards requesting={!fetched} requestProps={requestProps} cardsProps={cardsProps} />
}

export default TradeRuns

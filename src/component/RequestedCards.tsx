import React from 'react'

import Request, { RequestProps } from 'component/Request'
import Cards, { CardsProps } from 'component/Cards'

export type RequestedCardsProps = {
  requesting: boolean
  requestProps: RequestProps
  cardsProps: CardsProps
}

const RequestedCards = (props: RequestedCardsProps) => {
  const { isError, statusCode, message } = props.requestProps
  if (props.requesting || isError) {
    return <Request isError={isError} statusCode={statusCode} message={message} />
  }

  const { cardProps, paginatorProps } = props.cardsProps!
  return <Cards cardProps={cardProps} paginatorProps={paginatorProps} />
}

export default RequestedCards

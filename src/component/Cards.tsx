import React from 'react'

import CardComponent, { CardComponentProps } from 'component/CardComponent'
import Paginator, { PaginatorProps } from 'component/Paginator'

export type CardsProps = {
  cardProps: CardComponentProps[]
  paginatorProps: PaginatorProps
}

const Cards = (props: CardsProps) => {
  const cardComponents = props.cardProps.map((props) => (
    <CardComponent
      width={props.width}
      color={props.color}
      margin={props.margin}
      title={props.title}
      subtitle={props.subtitle}
      list={props.list}
      extra={props.extra}
    />
  ))

  const { all, count, offset, onMove } = props.paginatorProps

  return (
    <div>
      <div className="d-flex flex-wrap p-2">{cardComponents}</div>
      <div className="d-flex justify-content-center p-1">
        <Paginator all={all} count={count} offset={offset} onMove={onMove} />
      </div>
    </div>
  )
}

export default Cards

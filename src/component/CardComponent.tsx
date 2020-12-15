import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export type CardComponentProps = {
  width: string
  color?: string
  margin?: string
  title?: string
  subtitle?: string
  list: any
  extra?: JSX.Element
}

const CardComponent = (props: CardComponentProps) => {
  const row = (key: any, value: any) => (
    <Row>
      <Col>{key}</Col>
      <Col>{value}</Col>
    </Row>
  )

  const rows = () => {
    let rowList = []
    for (const key in props.list) {
      rowList.push(row(key, props.list[key]))
    }
    return rowList
  }

  const style = { width: props.width }
  const className = `${props.color ?? 'bg-light'} ${props.margin ?? ''}`

  const title = props.title ? <Card.Title>{props.title}</Card.Title> : null
  const subtitle = props.subtitle ? <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle> : null

  return (
    <Card style={style} className={className}>
      <Card.Body>
        {title}
        {subtitle}
        <Card.Text>
          <Container>{rows()}</Container>
        </Card.Text>
        {props.extra ?? null}
      </Card.Body>
    </Card>
  )
}

export default CardComponent

import React from 'react'
import { Card } from 'react-bootstrap'

type CardComponentProps<T extends object> = {
  title?: string
  subtitle?: string
  list: T
  extra?: React.FC
}

const CardComponent = <T extends object>(props: CardComponentProps<T>) => {
  const row = (key: any, value: any) => (
    <tr>
      <th scope="row">{key}</th>
      <td>{value}</td>
    </tr>
  )

  const rows = () => {
    let rowList = []
    for (const key in props.list) {
      rowList.push(row(key, props.list[key]))
    }
    return rowList
  }

  const title = props.title ? <Card.Title>{props.title}</Card.Title> : null
  const subtitle = props.subtitle ? <Card.Subtitle>{props.subtitle}</Card.Subtitle> : null

  return (
    <Card>
      <Card.Body>
        {title}
        {subtitle}
        <Card.Text>
          <table className="table table-sm">
            <tbody>{rows()}</tbody>
          </table>
        </Card.Text>
        {props.extra ?? null}
      </Card.Body>
    </Card>
  )
}

export default CardComponent

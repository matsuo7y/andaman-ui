import React from 'react'
import { Alert } from 'react-bootstrap'

export type RequestProps = {
  isError: boolean
  statusCode?: number
  message?: string
}

const Request = (props: RequestProps) => {
  const requesting = <Alert variant="light">Requesting...</Alert>

  const error = (
    <Alert variant="warning">
      <Alert.Heading>Error: {props.statusCode}</Alert.Heading>
      <p>{props.message}</p>
    </Alert>
  )

  return <div className="p-2">{props.isError ? error : requesting}</div>
}

export default Request

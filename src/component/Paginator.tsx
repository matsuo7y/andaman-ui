import React from 'react'
import { Pagination } from 'react-bootstrap'
import { OffsetPaging } from 'model/definition'

type PaginatorProps = OffsetPaging

const Paginator = (props: PaginatorProps) => {
  const overflow = props.all % props.count === 0 ? 0 : 1
  const numPages = props.all / props.count + overflow
  const currentPage = props.offset / props.count + 1

  const first = numPages > 0 && currentPage !== 1 ? <Pagination.Item>1</Pagination.Item> : null
  const last = numPages > 1 && currentPage !== numPages ? <Pagination.Item>{numPages}</Pagination.Item> : null

  const condForPrevEllipsis = numPages > 2 && currentPage > 2
  const condForCurrent = numPages > 0
  const condForNextEllipsis = numPages > 2 && currentPage < numPages - 1

  const prevEllipsis = condForPrevEllipsis ? <Pagination.Ellipsis /> : null
  const current = condForCurrent ? <Pagination.Item>{currentPage}</Pagination.Item> : null
  const nextEllipsis = condForNextEllipsis ? <Pagination.Ellipsis /> : null

  return (
    <Pagination>
      <Pagination.First onClick={() => {}} />
      <Pagination.Prev onClick={() => {}} />
      {first}
      {prevEllipsis}
      {current}
      {nextEllipsis}
      {last}
      <Pagination.Next onClick={() => {}} />
      <Pagination.Last onClick={() => {}} />
    </Pagination>
  )
}

export default Paginator

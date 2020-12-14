import React from 'react'
import { Pagination } from 'react-bootstrap'
import { OffsetPaging } from 'model/definition'

type PaginatorProps = OffsetPaging & {
  onMove: (offset: number) => void
}

const Paginator = (props: PaginatorProps) => {
  const overflow = props.all % props.count === 0 ? 0 : 1
  const numPages = Math.floor(props.all / props.count) + overflow
  const currentPage = Math.floor(props.offset / props.count) + 1

  const first = numPages > 0 && currentPage !== 1 ? <Pagination.Item>1</Pagination.Item> : null
  const last = numPages > 1 && currentPage !== numPages ? <Pagination.Item>{numPages}</Pagination.Item> : null

  const condForPrevEllipsis = numPages > 2 && currentPage > 2
  const condForCurrent = numPages > 0
  const condForNextEllipsis = numPages > 2 && currentPage < numPages - 1

  const prevEllipsis = condForPrevEllipsis ? <Pagination.Ellipsis /> : null
  const current = condForCurrent ? <Pagination.Item active>{currentPage}</Pagination.Item> : null
  const nextEllipsis = condForNextEllipsis ? <Pagination.Ellipsis /> : null

  const { all, count, offset, onMove } = props
  const onMoveToFirst = () => onMove(0)
  const onMoveToPrev = () => onMove(offset - count >= 0 ? offset - count : 0)
  const onMoveToNext = () => onMove(offset + count < all ? offset + count : all - count)
  const onMoveToLast = () => onMove(all - count)

  return (
    <Pagination>
      <Pagination.First onClick={onMoveToFirst} />
      <Pagination.Prev onClick={onMoveToPrev} />
      {first}
      {prevEllipsis}
      {current}
      {nextEllipsis}
      {last}
      <Pagination.Next onClick={onMoveToNext} />
      <Pagination.Last onClick={onMoveToLast} />
    </Pagination>
  )
}

export default Paginator

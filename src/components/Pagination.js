import React from "react"
import { PaginationElement, PaginationWrapper } from "../elements"

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>Prev</PaginationElement>
      <PaginationElement to={nextPage}>Next</PaginationElement>
    </PaginationWrapper>
  )
}

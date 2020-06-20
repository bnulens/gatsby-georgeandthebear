import React from 'react'
import styled from 'styled-components'

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  grid-column-start: ${props =>
    props.itemNumber <= Math.ceil(props.totalItems / 2) ? 1 : 2};
  grid-column-end: ${props =>
    props.itemNumber <= Math.ceil(props.totalItems / 2) ? 2 : 3};
  grid-row-start: ${props =>
    props.itemNumber <= Math.ceil(props.totalItems / 2)
      ? props.itemNumber
      : props.itemNumber - Math.ceil(props.totalItems / 2)};
  grid-row-end: ${props =>
    props.itemNumber <= Math.ceil(props.totalItems / 2)
      ? props.itemNumber + 1
      : props.itemNumber - Math.ceil(props.totalItems / 2) + 1};
  span:first-child {
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.right {
    margin-left: 16px;
  }
`

const List = styled.ol`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 24px;
  list-style: decimal !important;
  font-size: 14px;
`
const SplitList = ({ list }) => {
  return (
    <List>
      {list.map((item, i) => {
        const position = i + 1 <= Math.ceil(list.length / 2) ? "left" : "right"
        return (
          <StyledListItem
            className={position}
            itemNumber={i + 1}
            totalItems={list.length}
            key={item.name}
          >
            <span>
              {i + 1}. {item.name}
            </span>
            <span>{item.length}</span>
          </StyledListItem>
        )
      })}
    </List>
  )
}

export default SplitList;
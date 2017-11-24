/* @flow */
import React from 'react'

export type Row = {
  name: string
  point: number
  time: string
}

export default function (props: {data: Array<Row>}) {
  return (
    <ul>
      {props.data.map((d: Row, i: number) => (
        <li>
          <span className='num'>{10 - i}</span>
          <span className='name'>{d.name}</span>
          <span className='point'>
            {d.point}
            <small>P</small>
          </span>
          <span className='time'>{d.time}</span>
        </li>
      ))}
    </ul>
  )
}

/* @flow */
import React from 'react'

export type Row = {
  name: string,
  point: number,
  time: string,
  rank?: number
}

export default function (props: { data: Array<Row> }) {
  return (
    <ul>
      {props.data.map((d, i) => (
        <li key={`thanks-${i}`}>
          <span className='num'>{d.rank ? d.rank : 10 - i}</span>
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

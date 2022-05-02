import { useEffect } from 'react';
import * as d3 from 'd3';

const data = [
  {
    "name": "Stephen Raj",
    "age": 10
  },
  {
    "name": "Raj kumar",
    "age": 23
  },
  {
    "name": "Sham",
    "age": 37
  },
  {
    "name": "Gokul",
    "age": 40
  },
  {
    "name": "Mari",
    "age": 58
  }
]

function BarChart() {
  useEffect(() => {
    let max = d3.max(data, d => d.age)
    let widthScale = d3.scaleLinear()
      .range([0, 384])
      .domain([0, max])

    let positionScale = d3.scaleBand()
      .range([0, 384])
      .domain(data.map(d => d.age))
      .padding(0.1)

    d3.select("#exmpe1-list0")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr('fill', 'rgba(255, 0, 0, .7)')
      .attr('width', d => widthScale(d.age))
      .attr('height', positionScale.bandwidth())
      .attr('y', d => positionScale(d.age))

  }, [])

  return (
    <div>
      <svg
        id='exmpe1-list0'
        className="w-96 h-96 border border-black"
      >
      </svg>
    </div>
  )
}

export default BarChart
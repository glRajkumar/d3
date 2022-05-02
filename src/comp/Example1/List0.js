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
  let toMargin = 20

  useEffect(() => {
    let elDimentions = document.getElementById("exmpe1-list0-svg0").getBoundingClientRect()
    let max = d3.max(data, d => d.age)

    let widthScale = d3.scaleLinear()
      .range([0, elDimentions.width - toMargin])
      .domain([0, max])

    let positionScale = d3.scaleBand()
      .range([0, elDimentions.height - toMargin])
      .domain(data.map(d => d.age))
      .padding(0.1)

    d3.select("#exmpe1-list0-rects")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr('fill', 'rgba(255, 0, 0, .7)')
      .attr('width', d => widthScale(d.age))
      .attr('height', positionScale.bandwidth())
      .attr('y', d => positionScale(d.age))

    let xAxis = d3.axisBottom(widthScale)
    d3.select("#exmpe1-list0-xAxis")
      .style('transform', `translate(${toMargin}px, ${elDimentions.height - toMargin}px)`)
      .call(xAxis)

    let yAxis = d3.axisLeft(positionScale)
    d3.select("#exmpe1-list0-yAxis")
      .style('transform', `translateX(${toMargin}px)`)
      .call(yAxis)

    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <svg id='exmpe1-list0-svg0' className="w-96 h-96 border border-black">
        <g id='exmpe1-list0-rects' style={{ transform: `translateX(${toMargin}px)` }}></g>
        <g id='exmpe1-list0-xAxis'></g>
        <g id='exmpe1-list0-yAxis'></g>
      </svg>
    </div>
  )
}

export default BarChart
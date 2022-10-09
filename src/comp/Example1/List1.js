import { useEffect } from 'react';
import * as d3 from 'd3';

import priceData from '../../dataStore/price';

function List1() {
  useEffect(() => {
    drawBarChar()
    // eslint-disable-next-line
  }, [])

  function getScales(data = [], config) {
    const max = d3.max(data.map(d => d.price))

    const xScale = d3.scaleLinear()
      .range([0, config.width - config.left])
      .domain(d3.extent(data, d => d.year))

    const yScale = d3.scaleLinear()
      .range([config.height - config.top, 0])
      .domain([0, max])

    return { xScale, yScale }
  }

  function drawAxes(scale, config) {
    const { xScale, yScale } = scale
    const xAxis = d3.axisBottom(xScale).ticks(12).tickFormat(n => n)
    d3.select("#exmpe1-list1-xAxis")
      .style('transform', `translate(${config.left}px, ${config.height - config.top}px)`)
      .call(xAxis)

    const yAxis = d3.axisLeft(yScale)
    d3.select("#exmpe1-list1-yAxis")
      .style('transform', `translateX(${config.left}px)`)
      .call(yAxis)
  }

  async function drawBarChar() {
    const config = {
      height: 400,
      width: 680,
      left: 30,
      top: 35
    }

    const sortedData = priceData.sort((a, b) => a.year < b.year ? 1 : -1)

    const scale = getScales(sortedData, config)
    drawAxes(scale, config)

    const line = d3.line()
      .x(d => scale.xScale(d.year))
      .y(d => scale.yScale(d.price))
    // .defined(d => !!d.price)

    d3.select("#exmpe1-list1-path")
      .append('path')
      .datum(sortedData)
      .attr('d', line)
      .style("transform", `translateX(${config.left}px)`)
      .style('fill', 'none')
      .style("stroke", 'red')
  }

  return (
    <div>
      <svg id='exmpe1-list1-svg0' className="w-[700px] h-96 border border-slate-300">
        <g id='exmpe1-list1-xAxis'></g>
        <g id='exmpe1-list1-yAxis'></g>
        <g id='exmpe1-list1-path'></g>
      </svg>
    </div>
  )
}

export default List1
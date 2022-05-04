import { useEffect } from 'react';
import * as d3 from 'd3';

import Airlines from '../../dataStore/Airlines.csv';

function BarChart() {
  useEffect(() => {
    drawBarChar()

    // eslint-disable-next-line
  }, [])

  async function groupByAirline() {
    try {
      const airlineList = await d3.csv(Airlines)

      const result = airlineList.reduce((prev, current, i) => {
        const isAirlinePresent = prev.find(d => d.AirlineID === current.AirlineID)
        if (isAirlinePresent) {
          isAirlinePresent.count = isAirlinePresent.count + 1
        } else {
          prev.push({
            AirlineID: current.AirlineID,
            AirlineName: current.AirlineName,
            count: 1
          })
        }

        return prev
      }, [])

      result.sort((a, b) => a.count < b.count ? 1 : -1)
      return result
    } catch (err) {
      console.log(err)
    }
  }

  function getScales(airlineData = [], config) {
    const maxCount = d3.max(airlineData.map(d => d.count))

    const xScale = d3.scaleLinear()
      .range([0, config.width - config.left])
      .domain([0, maxCount])

    const yScale = d3.scaleBand()
      .range([0, config.height - config.top])
      .domain(airlineData.map(d => d.AirlineName))
      .padding(0.1)

    return { xScale, yScale }
  }

  function drawAxes(scale, config) {
    const { xScale, yScale } = scale
    const xAxis = d3.axisBottom(xScale)
    d3.select("#exmpe1-airline-barchat-xAxis")
      .style('transform', `translate(${config.left}px, ${config.height - config.top}px)`)
      .call(xAxis)

    const yAxis = d3.axisLeft(yScale)
    d3.select("#exmpe1-airline-barchat-yAxis")
      .style('transform', `translateX(${config.left}px)`)
      .call(yAxis)
  }

  async function drawBarChar() {
    const config = {
      width: 500,
      height: 384,
      left: 125,
      top: 25
    }

    const airlineData = await groupByAirline()
    const scale = getScales(airlineData, config)
    drawAxes(scale, config)

    d3.select("#exmpe1-airline-barchat-rects")
      .style('transform', `translateX(${config.left}px)`)
      .selectAll("rect")
      .data(airlineData)
      .enter()
      .append("rect")
      .attr('fill', 'rgba(255, 0, 0, .7)')
      .attr('width', d => scale.xScale(d.count))
      .attr('height', scale.yScale.bandwidth())
      .attr('y', d => scale.yScale(d.AirlineName))
  }

  return (
    <div>
      <svg id='exmpe1-airline-barchat-svg' className="w-[500px] h-96 border border-black">
        <g id='exmpe1-airline-barchat-rects'></g>
        <g id='exmpe1-airline-barchat-xAxis'></g>
        <g id='exmpe1-airline-barchat-yAxis'></g>
      </svg>
    </div>
  )
}

export default BarChart
import { useEffect } from 'react';
import * as d3 from 'd3';

import priceData from '../../dataStore/price';

function List2() {
  useEffect(() => {
    drawBarChar("#exmpe1-list2-svg0")
    drawBarChar("#exmpe1-list2-svg1", 100)
    // eslint-disable-next-line
  }, [])

  async function drawBarChar(id, innerRadius = 0) {
    const config = {
      height: 384,
      width: 384,
      left: 30,
      top: 35
    }

    const sortedData = priceData.sort((a, b) => a.year < b.year ? 1 : -1)

    const pie = d3.pie()
      .value(d => d.price)

    const colorScale = d3.scaleOrdinal()
      .range(d3.schemeCategory10)
      .domain(sortedData.map(d => d.country))

    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius((config.width / 2) - 10)

    let g = d3.select(id)
      .selectAll("g")
      .data(pie(sortedData))
      .enter()
      .append("g")
      .style("transform", `translateX(${config.width / 2}px) translateY(${config.height / 2}px)`)

    g.append("path")
      .attr("d", arc)
      .attr("fill", d => colorScale(d.data.country))
  }

  return (
    <div className='flex gap-6'>
      <svg id='exmpe1-list2-svg0' className="w-96 h-96 border border-slate-300">
      </svg>

      <svg id='exmpe1-list2-svg1' className="w-96 h-96 border border-slate-300">
      </svg>
    </div>
  )
}

export default List2
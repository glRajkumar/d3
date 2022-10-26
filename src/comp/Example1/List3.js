import { useEffect } from 'react';
import * as d3 from 'd3';

import countriesGeoData from '../../dataStore/countries.geo.json'

function List3() {
  useEffect(() => {
    drawBarChar()
    // eslint-disable-next-line
  }, [])

  async function drawBarChar() {
    let bodyHeight = 400
    let bodyWidth = 400

    let projection = d3.geoMercator()
      .scale(50)
      .translate([bodyWidth / 2, bodyHeight / 2])

    let path = d3.geoPath()
      .projection(projection)

    d3.select("#exmpe1-list3-svg0")
      .selectAll("path")
      .data(countriesGeoData.features)
      .enter()
      .append("path")
      .attr('d', d => path(d))
      .attr('stroke', "#000")
      .attr('fill', "none")
  }

  return (
    <div>
      <svg id='exmpe1-list3-svg0' className="w-[400px] h-[400px] border border-slate-300">

      </svg>
    </div>
  )
}

export default List3
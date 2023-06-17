import { useEffect } from 'react';
import * as d3 from 'd3';

import countriesGeoData from '../../dataStore/countries.geo.json'
import countriesData from '../../dataStore/country.csv'

function List3() {
  useEffect(() => {
    drawWorldMap()
    drawChoroplethMap()
    // eslint-disable-next-line
  }, [])

  async function drawWorldMap() {
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

  async function drawChoroplethMap() {
    const data = await d3.csv(countriesData)
    const dataIndex = data.reduce((prev, curr) => {
      prev[curr.Country] = Number(curr.Magnitude)
      return prev
    }, {})

    const mapData = {
      type: "FeatureCollection",
      features: countriesGeoData.features.map(c => {
        c.properties.Magnitude = dataIndex[c.properties.name]
        return c
      })
    }

    let bodyHeight = 400
    let bodyWidth = 400

    let projection = d3.geoMercator()
      .scale(50)
      .translate([bodyWidth / 2, bodyHeight / 2])

    let path = d3.geoPath()
      .projection(projection)

    let maxEarthquake = d3.max(mapData.features, d => d.properties.Magnitude)

    let medianMagnitude = d3.median(mapData.features, d => d.properties.Magnitude)

    let cScale = d3.scaleLinear()
      .domain([0, medianMagnitude, maxEarthquake])
      .range(["white", "orange", "red"])

    d3.select("#exmpe1-list3-svg1")
      .selectAll("path")
      .data(mapData.features)
      .enter()
      .append("path")
      .attr("d", d => path(d))
      .attr("stroke", "black")
      .attr("fill", d => d.properties.Magnitude ? cScale(d.properties.Magnitude) : "white")
  }

  return (
    <div className='flex flex-wrap gap-6'>
      <svg id='exmpe1-list3-svg0' className="w-[400px] h-[400px] border border-slate-300">
      </svg>

      <svg id='exmpe1-list3-svg1' className="w-[400px] h-[400px] border border-slate-300">
      </svg>
    </div>
  )
}

export default List3
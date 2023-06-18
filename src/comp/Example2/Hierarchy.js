import { useEffect } from "react";
import * as d3 from 'd3';

import hierarchyData from '../../dataStore/hierarchy.json';

function Hierarchy() {
  useEffect(() => {
    draw()
    // eslint-disable-next-line
  }, [])


  async function draw() {
    let height = 400
    let width = 400

    const treemap = d3.treemap()
      .size([width, height])
      .paddingInner(2)

    const root = d3.hierarchy(hierarchyData)
      .sum(d => d.sales)

    treemap(root)

    const cScale = d3.scaleOrdinal(d3.schemeCategory10)
    const svg = d3.select("#exmpe2-list1")
    let cell = svg.selectAll("g")
      .data(root.leaves())
      .enter()
      .append("g")
      .attr("transform", d => `translate(${d.x0},${d.y0})`)

    cell.append("rect")
      .attr("width", d => d.x1 - d.x0)
      .attr("height", d => d.y1 - d.y0)
      .attr("fill", d => cScale(d.parent.data.name))

    cell.append("text")
      .text(d => d.data.name)
      .attr("alignment-baseline", "hanging")
      .attr("fill", "white")
  }

  return (
    <div>
      <svg id='exmpe2-list1' className="w-[400px] h-[400px] border border-slate-300">
      </svg>
    </div>
  )
}

export default Hierarchy
import { useEffect } from "react";
import * as d3 from 'd3';

const nodes = [
  { "id": "John" },
  { "id": "Marcus" },
  { "id": "Jane" },
  { "id": "Clara" },
  { "id": "Nice" }
]

const links = [
  {
    "source": "John",
    "target": "Marcus"
  },
  {
    "source": "John",
    "target": "Jane"
  },
  {
    "source": "John",
    "target": "Nice"
  },
  {
    "source": "Marcus",
    "target": "Clara"
  },
  {
    "source": "John",
    "target": "Clara"
  }
]

function Networks() {
  useEffect(() => {
    showData()
    // eslint-disable-next-line
  }, [])

  function showData() {
    const width = 400
    const height = 400

    createElements()

    const forceLink = d3.forceLink().id(d => d.id)
    const forceCharge = d3.forceManyBody()
    const forceCenter = d3.forceCenter(width / 2, height / 2)

    const simulation = d3.forceSimulation()
      .force('link', forceLink)
      .force("charge", forceCharge)
      .force('center', forceCenter)

    simulation.nodes(nodes).on("tick", updateElements)
    simulation.force("link").links(links)
  }

  function createElements() {
    const body = d3.select('#exmpe2-list0')

    body.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "black")

    body.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("fill", "black")
  }

  function updateElements() {
    d3.select(".nodes")
      .selectAll("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)

    d3.select(".links")
      .selectAll("line")
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);
  }

  return (
    <div>
      <svg id="exmpe2-list0" className="w-[400px] h-[400px]"></svg>
    </div>
  )
}

export default Networks
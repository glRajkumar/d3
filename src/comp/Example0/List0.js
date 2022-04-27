import { useEffect } from 'react';
import * as d3 from 'd3';

import people from '../../dataStore/people';

function List0() {
  useEffect(() => {
    const container = d3.select("#example0-list0")

    people.forEach(p => {
      container
        .append("p")
        .text(`${p.name} - ${p.age}`)
        .style("padding", ".3rem .6rem")
        .style("border", "1px solid rgba(0,0,0,.3)")
    })
  }, [])

  return (
    <div>
      <h1 className='text-3xl font-semibold mb-4'>List - 0</h1>

      <div id='example0-list0' className='flex flex-wrap gap-2 p-4 border rounded'>
      </div>
    </div>
  )
}

export default List0
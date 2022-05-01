import { useEffect } from 'react';
import * as d3 from 'd3';

import people from '../../dataStore/people';

function List1() {
  useEffect(() => {
    let container = d3.select("#example0-list-tbody")
      .selectAll("tr")

    container.data(people)
      .enter()
      .append("tr")
      .html(d => `
        <td><p>${d.name}</p></td>
        <td><p>${d.age}</p></td>
        <td><p>${d.favCharacter.join(", ")}</p></td>
      `)

    container.attr("class", "border")
    container.selectAll("p").attr("class", "px-4 py-2")
  }, [])

  return (
    <div>
      <h1 className='text-3xl font-semibold mt-8 mb-4'>List - 0</h1>

      <div className='relative max-h-96 overflow-y-scroll'>
        <table className='table-fixed border mx-auto'>
          <thead>
            <tr className='sticky top-0 bg-white'>
              <th className='w-40 text-left'><p className='px-4 py-2 border-y'>Name</p></th>
              <th className='w-10 text-left'><p className='px-4 py-2 border-y'>Age</p></th>
              <th className='text-left'><p className='px-4 py-2 border-y'>Favourite Character in Marvel</p></th>
            </tr>
          </thead>

          <tbody id='example0-list-tbody'></tbody>
        </table>
      </div>
    </div>
  )
}

export default List1
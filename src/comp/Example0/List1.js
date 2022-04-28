import { useEffect } from 'react';
import * as d3 from 'd3';

import people from '../../dataStore/people';

function List1() {
  useEffect(() => {
    d3.select("#example0-list-tbody")
      .selectAll("tr")
      .data(people)
      .enter()
      .append("tr")
      .html(d => `
        <td>${d.name}</td>
        <td>${d.age}</td>
        <td>${d.favCharacter.join(", ")}</td>
      `)
  }, [])

  return (
    <div>
      <h1 className='text-3xl font-semibold mb-4'>List - 0</h1>
      <table className='w-full table-fixed'>
        <thead>
          <tr>
            <th className='w-40 text-left'>Name</th>
            <th className='w-10 text-left'>Age</th>
            <th className='text-left'>Favourite Character in Marvel</th>
          </tr>
        </thead>

        <tbody id='example0-list-tbody'></tbody>
      </table>
    </div>
  )
}

export default List1
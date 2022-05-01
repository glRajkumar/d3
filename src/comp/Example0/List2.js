import { useEffect } from 'react';
import * as d3 from 'd3';

function List2() {
  useEffect(() => {
    let container = d3.select("#example0-list2")
    // d3.csv() -> to access data from server we can use csv/json method.

    d3.json('http://localhost:8000/people')
      .then(data => {
        const herosWithFans = {}
        data.forEach(d => {
          d.favCharacter.forEach(hero => {
            if (herosWithFans[hero]) {
              herosWithFans[hero].push(d.name)
            } else {
              herosWithFans[hero] = [d.name]
            }
          })
        })

        const herosWithFansArr = Object.keys(herosWithFans)
          .map(key => ({
            [key]: herosWithFans[key]
          }))

        container
          .selectAll('tr')
          .data(herosWithFansArr)
          .enter()
          .append("tr")
          .html(d => {
            let [key, val] = Object.entries(d)[0]
            return `
              <td class='border-y'><p class='px-4 py-2'>${key}</p></td>
              <td class='border-y'><p class='px-4 py-2 text-center'>${val.length}</p></td>
              <td class='border-y'><p class='px-4 py-2'>${val.join(", ")}</p></td>
            `
          })
      })
      .catch(err => console.log(err))

  }, [])

  return (
    <div>
      <h1 className='text-3xl font-semibold mt-8 mb-4'>List - 2</h1>

      <table className='table-fixed border mx-4'>
        <thead>
          <tr className='border-y'>
            <th className='w-40 text-left'><p className='px-4 py-2'>Hero Name</p></th>
            <th className='w-40 text-center'><p className='px-4 py-2'>Fan Count</p></th>
            <th className='text-left'><p className='px-4 py-2'>Favourite Character in Marvel</p></th>
          </tr>
        </thead>

        <tbody id='example0-list2'></tbody>
      </table>
    </div>
  )
}

export default List2
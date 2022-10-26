import GrapghChart from './GrapghChart';
import BarChart from './BarChart';
import List0 from './List0';
import List1 from './List1';
import List2 from './List2';
import List3 from './List3';

function Example1() {
  return (
    <div className="p-4">
      <div className='mb-6'>
        <h1 className="mb-4 text-3xl font-bold">List 0</h1>
        <List0 />
      </div>

      <div className='mb-6'>
        <h1 className="mb-4 text-3xl font-bold">List 1</h1>
        <List1 />
      </div>

      <div className='mb-6'>
        <h1 className="mb-4 text-3xl font-bold">List 2</h1>
        <List2 />
      </div>

      <div className='mb-6'>
        <h1 className="mb-4 text-3xl font-bold">List 3</h1>
        <List3 />
      </div>

      <div>
        <h1 className="mb-4 text-3xl font-bold">Airline Routes</h1>

        <div className="flex items-center gap-4">
          <BarChart />
          <GrapghChart />
        </div>
      </div>
    </div>
  )
}

export default Example1
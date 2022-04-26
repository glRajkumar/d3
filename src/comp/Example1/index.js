import GrapghChart from './GrapghChart';
import BarChart from './BarChart';

function Tutorial() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">Airline Routes</h1>

      <div className="flex items-center gap-4">
        <BarChart />
        <GrapghChart />
      </div>
    </div>
  )
}

export default Tutorial
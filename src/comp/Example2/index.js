import Hierarchy from "./Hierarchy";
import Networks from "./Networks";

function Example2() {
  return (
    <div className="p-4">
      <div className='mb-6'>
        <h1 className="mb-4 text-3xl font-bold">Network</h1>
        <Networks />
      </div>

      <div className='mb-6'>
        <h1 className="mb-4 text-3xl font-bold">Hierarchy</h1>
        <Hierarchy />
      </div>
    </div>
  )
}

export default Example2
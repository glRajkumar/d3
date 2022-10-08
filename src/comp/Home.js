import { Link } from 'react-router-dom';

const links = [
  {
    path: "/example0",
    title: "Example0"
  },
  {
    path: "/example1",
    title: "Example1"
  },
]

function Home() {
  return (
    <div className='h-screen p-4 text-slate-900 overflow-y-auto'>
      <ul>
        {
          links.map(li => (
            <li key={li.title} className='my-2'>
              <Link className='hover:underline' to={li.path}>
                {li.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home
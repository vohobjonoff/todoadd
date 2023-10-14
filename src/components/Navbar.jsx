
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
      <div>
          <ul className='nav'>
              <Link to='/'>
                  <li>logo</li>
              </Link>
              <Link to='/add'>
                  <li>add</li>
              </Link>
              <Link to='/todos'>
                  <li>todos</li>
              </Link>
              <Link to='/liked'>
                  <li>liked</li>
              </Link>
              <Link to=''>
                  <li>basket</li>
              </Link>
          </ul>
    </div>
  )
}

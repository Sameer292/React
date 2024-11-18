import React from 'react'
import { Container, Logo, Logoutbtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  return (
    <Header classname='py-3 shadow bg-slate-500'>
      <Container>

        <nav className='flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <Link to="/">
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex items-center gap-3'>
            {
              navItems.map((item) => (
                item.active ? (
                  <li key={item.name}>

                    <button
                      onClick={() => navigate(item.slug)}
                    >{item.name}</button>

                  </li>
                ) : null
              ))
            }
            {
              authStatus && (
                <li><Logoutbtn /></li>
              )
            }
          </ul>
        </nav>

      </Container>
    </Header>
  )
}

export default Header
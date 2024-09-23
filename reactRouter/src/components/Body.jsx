import React from 'react'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <>
    <Outlet/>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non voluptate repellat sapiente voluptatibus excepturi inventore vero porro, impedit tenetur deleniti eum quasi eligendi. Error ipsum est natus aliquam? Doloremque, odit.
      </p>
    </>
  )
}

export default Body

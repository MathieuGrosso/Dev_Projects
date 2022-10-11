import { Link } from 'react-router-dom'
import React from 'react'

function Header() {
  return (
    <nav>
      <Link to="/"> Accueil </Link>
      <Link to="/survey/1"> Suivante </Link>
      <Link to="/survey/3"> Suivante </Link>
      <Link to="/survey/4"> Suivante </Link>
      <Link to="/survey/5"> Suivante </Link>
      <Link to="/survey/6"> Suivante </Link>
      <Link to="/survey/7"> Suivante </Link>
      <Link to="/survey/8"> Suivante </Link>
      <Link to="/survey/9"> Suivante </Link>
      <Link to="/Freelances"> Freelances </Link>
      <Link to="/Results"> Results </Link>
    </nav>
  )
}

export default Header

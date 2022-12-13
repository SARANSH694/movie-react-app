import React from 'react'
import '../index.css'
import Search from '../Components/Search'
import Movie from '../Components/Movie'
import { useGlobalContext } from '../context'

const Home = () => {

  return (
    <div>
      <Search />
      <Movie />
    </div>
  )
}

export default Home
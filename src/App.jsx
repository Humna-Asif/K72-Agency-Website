import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import StairsNav from './components/Navigation/StairsNav'
import SmoothScroll from './components/common/SmoothScroll'


const App = () => {

  const location = useLocation()

  // pages where StairsNav should appear
  const stairsNavRoutes = ['/projects', '/agence']


  const isStairsNav = stairsNavRoutes.includes(location.pathname)

  return (
    <div>
      <SmoothScroll />
      {isStairsNav ? <StairsNav /> : <Navbar />}
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import SocialMedia from './Components/SocialMedia/SocialMedia'
import Experience from './Components/Experience/Experience'
import TechStack from './Components/TechStack/TechStack'
import Projects from './Components/Projects/Projects'
import Profile from './Components/Profile/Profile'
import Github from './Components/Github/Github'  
import ProblemSolving from './Components/ProblemSolvingPlatform/ProblemSolvingPlatform'

const App = () => {
  return (
    <div>

      <ProblemSolving />
      <Projects />
      <SocialMedia />

      <Github />
      <Profile />
      <Experience />



      <div>
        <TechStack />
      </div>
    </div>
  )
}

export default App
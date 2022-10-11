import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
// import { createGlobalStyle } from 'styled-components';
import Header from './components/Header'
import Error from './components/Error'
// import Question from './components/Question'
import { ThemeProvider, SurveyProvider } from './utils/Context'
import Footer from './components/Footer'
import GlobalStyle from './utils/styles/GlobalStyle'






ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/survey/:questionNumber" element={<Survey />} />

            <Route element={<Error />} />
            <Route path="/freelances/" element={<Freelances />} />
            <Route path="/results/" element={<Results />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)


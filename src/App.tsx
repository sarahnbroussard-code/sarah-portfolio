import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import CaseStudy from './pages/CaseStudy'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Leadership from './pages/Leadership'
import NotFound from './pages/NotFound'
import Services from './pages/Services'
import Strategy from './pages/Strategy'
import SweatpalsCaseStudy from './pages/SweatpalsCaseStudy'
import JiraAlignCaseStudy from './pages/JiraAlignCaseStudy'

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/experience"
          element={
            <Layout>
              <Experience />
            </Layout>
          }
        />
        <Route
          path="/experience/sweatpals"
          element={
            <Layout>
              <SweatpalsCaseStudy />
            </Layout>
          }
        />
        <Route
          path="/experience/atlassian-jira-align"
          element={
            <Layout>
              <JiraAlignCaseStudy />
            </Layout>
          }
        />
        <Route
          path="/experience/:slug"
          element={
            <Layout>
              <CaseStudy />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/strategy"
          element={
            <Layout>
              <Strategy />
            </Layout>
          }
        />
        <Route
          path="/leadership"
          element={
            <Layout>
              <Leadership />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

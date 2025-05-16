// Basic tut on JSX syntax

// https://gist.github.com/KadamKaustubh147/4be129fff65462e80a796dacd27465d4

import React from 'react'

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom'

// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import HomeCards from './components/HomeCards'
// import JobListings from './components/JobListings'
// import ViewAllJobs from './components/ViewAllJobs'

import HomePage from './pages/HomePage'
import MainLayout from './pages/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import SingleJobPage from './pages/SingleJobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'
import JobPage, { jobLoader } from './pages/SingleJobPage'
    
    
const App = () => {
  // break everything into components
  // return (
    //   <>
    
    //   <Navbar />
    //   <Hero />
    //   <HomeCards />
    //   <JobListings />
    //   <ViewAllJobs />
    
    //   </>
    // )

const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
};

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

    // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path='/jobs' element={<JobsPage/>} />
          <Route path='/jobs/:id' element={<SingleJobPage deleteJob={deleteJob}/>} loader={jobLoader} />
          <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} />
          <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Route>
    )
    )
  return <RouterProvider router={router} />
}

export default App

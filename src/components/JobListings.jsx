import React from 'react'
import {useState, useEffect } from 'react'
import Job from './Job'
import Spinner from './Spinner'

// first we destructure the props, the default isHome is set to false
const JobListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // watch component life cycle stuff
  useEffect(() => {
    const fetchJobs = async () => {
      // this limit thing is a json server thingy
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try{
        const res = await fetch(apiUrl)
        const data = await res.json();
        // both need await kyuki both return promises
        // 1st is a HTTP request it takes time therefore await
        // 2nd is JSON parsing it takes time therefore await
        setJobs(data)
      }
      catch(e){
        console.log(`Error fetching data ${e}`)
      }
      finally{
        setLoading(false)
      }
    }
    fetchJobs();
  }, [])

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            { isHome ? 'Recent Jobs' : 'Browse Jobs' }
          </h2>
            { loading ? (
              <Spinner loading={loading}/>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <Job key={job.id} job={job}/>
              ))}
              </div>
            ) }
        </div>
      </section>
    </>
  )
}

export default JobListing

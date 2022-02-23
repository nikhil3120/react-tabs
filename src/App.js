import React,{useEffect, useState} from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading,setLoading] = useState(true)
  const [jobs,setJobs] = useState([])
  const [value,setValue] = useState(0)

  const fetchTabs = async()=>{
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(()=>{
    fetchTabs()
  },[])

  if(loading){
    return(
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }
  const {title,dates,duties,company} = jobs[value]
  return (
    
      <section className='section'>

        <div className='title'>
          <h2>Experiance</h2>
          <div className='underline'></div>
        </div>

        <div className='jobs-center'>
          <div className='btn-container'>
            {jobs.map((job,index) =>{
              return(
                <button  className={`job-btn ${index===value && ' active-btn'}`} key={job.id} onClick={()=>setValue(index)}>
                  {console.log(index)}
                  {job.company}
                </button>
              )
            })}
          </div>  
          <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty,index)=>{
            return(
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
        </div>
      
        

        <div>
          <button type='button' className='btn'>
            MORE INFO
          </button>
        </div>
      </section>
      
  );
}

export default App;

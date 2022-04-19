import React from 'react'
import { Link } from 'react-router-dom'
import LandingPageCard from '../../components/LandingPageCard/LandingPageCard'
import './index.css'

export default function LandingPage() {
  return (
    <>
      <div className='landingPageContainerTop'>
        <div className='darkOverlay'>
        <div className='mainContainer'>
        
          <div className='main'>
      
         
          <div className='mainSection'>
            <div className='mainSectionCards'><div> 
            <div className='mainTitle'>
            FP Systems
          </div></div>
              <LandingPageCard title='Stock market Data' label='FP is the interface to a back end infrastructure that continuosly scans the US market.' to='login'/>
              <LandingPageCard title='Signals' label='FP assists to portfolio consolidation & provides automated technical analysis services.' to='login'/>
              <LandingPageCard title='Risk-as-a-service' label='This service provides the tools for automatic risk calculations for a given portfolio. Portfolio and parameters can be saved in your personnal space.' to=''/>
            </div>
            <div className='mainSectionLogin'>
            <Link to="login"><p className='pleaseLogin'>Please <span style={{fontWeight:'bolder'}}>login</span></p></Link>
            </div>
          </div>
          </div>
        </div>
        </div>
        
      </div>
      <div className='landingPageContainerBottom'>
      <div className='darkOverlay'>
      <div className='landingPageContainerBottomText'>
     
        <div className='landingPageText'>
        <p className='landingPageTextStyle'>
          What is it that drives a swarm of bees or a flock of birds? Who calls the shots for the next group movement among these creatures? 
                                    Is there a decision-maker or are there several of them? Is their common movement due to exogenous shocks, be it wind or noise? 
                                    Has, what is considered as exogenous, been internalized and anticipated in such a way that it can no longer be considered as so? Or is perhaps their 
                                    movement the result of frequencies that are unknown to the human kind? Finally, which is the place of chaos and order in the harmonious dance presented 
                                    by these clouds of starlings?
                                 
          </p>
          <br></br>
          <br></br>
          <p style={{fontStyle:'italic'}} className='landingPageTextStyle'>"The explosion of information made possible by modern technology has intensified the need
                                        to develop methods for better analysis and interpretation of data. In addition to useful information, 
                                        the blogoshpere has also created a platform for ill-informed pseudo experts of all sorts. Bad analysis has proliferated
                                            with the ease of access to information and expanded channels for mass communication, contributing to waves of pessimism or
                                            optimism in financial markets. A misleading focus on the noise in the data to the detriment of the signal is just one example of 
                                            the pitfalls of the Information Age."
                                    </p>
                                    <br></br>
                                    <p className='landingPageTextStyle'>

Applied Financial Macroeconomics and Investment Strategy, Robert T.McGee
</p>
        </div>
       
        </div>
      </div>
       
      </div>
      </>
  )
}

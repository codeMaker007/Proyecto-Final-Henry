import React from 'react'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import OverAll from '../components/overall/OverAll'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { data } from '../constants'
import './newDashboard.scss'

const NewDashboard = () => {
  return (
    <div className="ds">

    <div className="newDashboard">
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
          <div className="row">
            {
              data.summary.map((item, index) => (
                <div key={`summary-${index}`} className='col-6 col-md-6 col-sm-12 mb'>
                  <SummaryBox item={item} />
                </div>
              ))
            }
          </div>
          </div>
              <div className="col-4 hide-md">
                  <SummaryBoxSpecial item={data.revenueSummary} />          
              </div>  
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <div className="title mb"><i className='title2'>
        Panel Del Administrador 
          </i></div>
        <div className="mb">
          <OverAll />
        </div>
      </DashboardWrapperRight>
      </DashboardWrapper>
   </div>
            </div>
  )
}

export default NewDashboard


  

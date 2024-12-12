import React from 'react'
import ContributionOverview from './contribution/ContributionOverview'
import FamilyOverview from "./family/FamilyOverview"
import RiskOverview from "./risks/RiskOverview"
import NotificationOverview from "./notification/NotificationOverview"
import HistoryOverview from "./history/HistoryOverview"
import '../style/useroverviewdashbord.css'
function UserOverviewDashboard() {
  return (
    <div className='userOverviewDashboard_container'>
        <div className='UserOverviewDashboard_lists'> <ContributionOverview/>  </div>
        <div className='UserOverviewDashboard_lists'> <FamilyOverview/> </div>
        <div className='UserOverviewDashboard_lists'> <RiskOverview/></div>
        <div className='UserOverviewDashboard_lists'> <NotificationOverview/> </div>
        <div className='UserOverviewDashboard_lists'> <HistoryOverview/></div>
    </div>
  )
}

export default UserOverviewDashboard
import React from 'react'
import SchInfoCard from '../components/SchInfoCard'
import AppliedSch from '../components/AppliedSch';
import {MdOutlinePendingActions} from 'react-icons/md'
import {TiTickOutline} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'

const ScholarshipUI = () => {
  return (
    <div>
        <div className='font-raleway px-5 pb-3 font-bold text-[20px] text-govtblue'>Apply for existing government scholarships</div>
        <div className='flex-wrap'>
        <div className=''>
        <SchInfoCard name="Atal Bihari Vajpayee General Scholarship Scheme (ICCR)" desc="The Council has introduced return airfare for all under this scheme w.e.f 2022-23. The earlier students will continue to be governed by earlier guidelines." />
        <SchInfoCard name="Suborno Jayanti Scholarship Scheme (ICCR)" desc="The scholarships to Bangladesh nationals will be offered under one scheme Suborno Jayanti Scholarship Scheme subsuming all other schemes under which scholarships were being offered till now." />
        </div>
        <div className=''>
        <SchInfoCard name="Dr. A.P.J Abdul Kalam Commonwealth Scholarship Scheme (ICCR)" desc="For the nationals of Commonwealth countries." />
        <SchInfoCard name="Nehru Memorial Scholarship Scheme (ICCR)" desc="For the nationals of Sri Lanka." />
        </div>
        <div className=''>
        <SchInfoCard name="Dr. S. Radhakrishnan Cultural Exchange Scholarship Scheme (ICCR)" desc="For the nationals of 29 countries namely, Australia, Belarus, Brazil, Cambodia, Canada, China, Colombia, Cuba, France, Guyana, Hungary, Indonesia, Israel, Kuwait, Laos, Malaysia, Mexico, Mongolia, Myanmar, Norway, Romania, Russia, Slovenia, Spain, Syria, Turkmenistan, Uzbekistan, Vietnam and Yemen." />
        <SchInfoCard name="Africa Scholarship Scheme (MEA)" desc="For the nationals of 54 countries in the African continent" />
        </div>
        <div className='font-raleway px-5 py-3 font-bold text-[20px] text-govtblue'>Applied Scholarships</div>
        <div>
        <AppliedSch name="Atal Bihari Vajpayee General Scholarship Scheme (ICCR)" appliedDate="DD/MM/YYYY" status="Pending" icon=<MdOutlinePendingActions size={20} /> />
        <AppliedSch name="Dr. A.P.J Abdul Kalam Commonwealth Scholarship Scheme (ICCR)" appliedDate="DD/MM/YYYY" status="Accepted" icon=<TiTickOutline size={20} color="green" /> />
        <AppliedSch name="Dr. S. Radhakrishnan Cultural Exchange Scholarship Scheme (ICCR)" appliedDate="DD/MM/YYYY" status="Rejected" icon=<ImCross size={15} color="red" /> />
        </div>
        </div>
    </div>
  )
}

export default ScholarshipUI
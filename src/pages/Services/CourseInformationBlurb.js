import React from 'react'

export default ({ courseLength, enrolment, commencingCohort, includes }) =>
  <>
    <div className='row'>
      <div className='col-md-6 col-xs-12'>
        <p>
          <span className='Bold'>Course Length:</span> {courseLength}
        </p>
      </div>
      <div className='col-md-6 col-xs-12'>
        <p>
          <span className='Bold'>Commencing cohort:</span> {commencingCohort}
        </p>
      </div>
    </div>
    <div className='row marginTop1rem-md'>
      <div className='col-md-6 col-xs-12'>
        <p>
          <span className='Bold'>Enrolment:</span> {enrolment}
        </p>
      </div>
      <div className='col-md-6 col-xs-12'>
        <p>
          <span className='Bold'>Includes:</span> {includes}
        </p>
      </div>
    </div>
  </>

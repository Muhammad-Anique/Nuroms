import React from 'react'
import './Page.css'
import Section from '../Section/Section'

function Page() {
  return (
    <div className='PageContainer HideScrollbar'>
      <Section/>
      <Section/>
      <Section/>
      <Section/>
    </div>
  )
}

export default Page

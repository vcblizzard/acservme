import React from 'react'
import NavContact from "./NavContact.jsx"
import PagesContact from "./Pages/PagesContact.jsx"
import ContactFooter from './Pages/Footer/ContactFooter.jsx'

function Contact() {
  return (
    <div>
<NavContact />
<PagesContact />
<section className='mt-5'>
<ContactFooter />
</section>
    </div>
  )
}

export default Contact
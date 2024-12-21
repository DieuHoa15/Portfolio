import React from 'react'
import ContactButton from './ContactButton'
import githubIcon from '../assets/images/github-icon.png'
import linkedInIcon from '../assets/images/linkedin-icon.png'
import gmailIcon from '../assets/images/gmail-icon.png'

const Contact = () => {
  return (
    <div className='mx-5 md:mx-7 my-3 md:my-0 flex flex-col items-center'>
      <h1 className='font-bold text-3xl md:text-4xl text-rose-600'>
        Contact Me
      </h1>
      <div className='flex flex-col items-center mt-14 animate-slide space-y-7'>
        {/* <ContactButton
          icon={githubIcon}
          name="Github"
          link='https://github.com/DieuHoa15'
        /> */}
        <ContactButton
          icon={linkedInIcon}
          name='LinkedIn'
          link='https://www.linkedin.com/in/an-vu22/'
        />
        <ContactButton
          icon={gmailIcon}
          name='Email'
          link='mailto:antvu22@gmail.com'
        />
      </div>
    </div>
  )
}

export default Contact
import React from 'react'

const ContactButton = ({ icon, name, link }) => {
  return (
    <div className='flex flex-row items-center space-x-5'>
      <img
        className='max-h-12 max-w-12'
        src={icon}
        alt={'${name} icon'}
      />
      <button className='rounded-full bg-orange-500 hover:bg-orange-300 py-2 px-3'>
        <a href={link} target='_blank'>{name}</a>
      </button>
    </div>
  )
}

export default ContactButton
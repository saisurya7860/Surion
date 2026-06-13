import React from 'react'

const SectionTitle = ({title,des}) => {
  return (
    <div className='text-3xl md:text-4xl font-bold text-center'>
      {title}
      <p className='text-xl font-normal py-3 text-gray-600'>{des}</p>
    </div>
  )
}

export default SectionTitle

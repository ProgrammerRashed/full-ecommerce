import React from 'react'

const MainProfilePage = () => {
  return (
    <div>

    <div className='bg-accent p-5 space-y-4'>
    <h1 className='text-xl'>Personal Profile</h1>
    <div>
      <p>Md Rashed Ali</p>
      <p>shopping.rashed@gmail.com</p>
    </div>
    <p className='text-blue-400 hover:underline'>Subscribe to Newsletter</p>
    </div>
    <div className='bg-accent p-5 space-y-4'>
    <h1 className='text-xl'>Personal Profile</h1>
    <div>
      <p>Md Rashed Ali</p>
      <p>+8801738313337</p>
      {/* ADDRESS */}
      <div>
        <p>Haldibari Hat</p>
        <p>Rangpur - Thakurgaon - Baliadangi</p>
      </div>
    </div>
    <p className='text-blue-400 hover:underline'>Subscribe to Newsletter</p>
    </div>
    </div>
  )
}

export default MainProfilePage

import FormColorBook from '@/components/FormColorBook'
import React from 'react'

const DashboardPage = () => {
    return (
        <section className='relative' id='dashboard'>
            <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
                <div className='relative pt-80 sm:pt-24 ml-auto flex justify-start items-center h-screen'>
                    <div className='lg:w-2/3 mx-auto'>
                        <h1 className=''>Lets generate your colorbook.</h1>
                        <FormColorBook />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashboardPage
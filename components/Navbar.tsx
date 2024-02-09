import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header>
            <nav className='z-10 w-full absolute'>
                <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
                    <div className='flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative'>

                        <div className='relative z-20 w-full flex justify-between lg:w-max md:px-0'>
                            <Link href={"/"} className='flex space-x-2 items-center'>
                                <span className='text-2xl font-bold text-slate-700'>
                                    ColorPages
                                </span>
                            </Link>
                        </div>

                        <div className='flex flex-wrap z-20 gap-6 p-8 items-center'>
                            <div className='text-gray-600 lg:pr-4 lg:w-auto w-full lg:pt-0'>
                                <ul className='tracking-wide font-medium lg:text-sm hidden md:flex gap-6'>
                                    <li className='cursor-pointer'>
                                        <Link href={"/dashboard"}>
                                            <span>
                                                Dashboard
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='cursor-pointer'>
                                        <span>
                                            Free coloring pages
                                        </span>
                                    </li>
                                    <li className='cursor-pointer'>
                                        <span>
                                            Coloring Page Generator
                                        </span>
                                    </li>
                                    <li className='cursor-pointer'>
                                        <span>
                                            Wall of Love
                                        </span>
                                    </li>
                                    <li className='cursor-pointer'>
                                        <span>
                                            Pricing
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Navbar
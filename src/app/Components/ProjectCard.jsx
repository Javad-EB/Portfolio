import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <section>
            <article
                className='h-52 md:h-72 rounded-t-xl relative group'
                style={{ background: `url(${imgUrl})`, backgroundSize:"cover" }}>
                <div className='overlay items-center justify-center  absolute top-0 left-0 h-full w-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                    <Link href={gitUrl} rel="noopener noreferrer" target="_blank" className='h-14 w-14 border-2 relative mr-2 rounded-full border-[#ADB7BE] hover:border-white group/link'>
                        <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white' />
                    </Link>
                    <Link href={previewUrl} rel="noopener noreferrer" target="_blank" className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                        <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white' />
                    </Link>
                </div>
            </article>
            <article className='text-white rounded-b-xl bg-[#181818] mt-3 py-6 px-4 '>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#ADB7BE]'>{description}</p>
            </article>
        </section>
    )
}

export default ProjectCard
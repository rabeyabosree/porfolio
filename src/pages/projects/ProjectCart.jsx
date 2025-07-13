import React from 'react'

function ProjectCart({ title, description, tags, img, liveLink, github }) {
    return (
        <div className='bg-gray-400 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center max-w-md mx-auto'>
            <h1 className='text-2xl font-bold mb-2'>{title}</h1>

            <p className='text-gray-300 mb-4 text-center'>{description}</p>

            <div className='flex flex-wrap gap-2 mb-4 justify-center'>
                {tags.map((tag, i) => (
                    <span key={i} className='bg-gray-600 px-2 py-1 rounded text-xs'>
                        {tag}
                    </span>
                ))}
            </div>

            <div className='w-full border border-gray-50 rounded-lg overflow-hidden mb-4'>
                <img src={img} className='w-full object-cover h-48' alt={title} />
            </div>

            <div className='flex gap-4'>
                <a
                    href={liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm'
                >
                    Live Demo
                </a>

                <a
                    href={github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm'
                >
                    Github Repo
                </a>
            </div>
        </div>
    )
}

export default ProjectCart


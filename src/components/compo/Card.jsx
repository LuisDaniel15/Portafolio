import React from 'react'

function Card({ children, title, status=true, color, icon, text }) {
    return (
        <div className={`${color == 'purple' ? 'bg-purple-200' : 'bg-violet-200'} text-[15px] shadow-xl hover:shadow-sm transition duration-200 hover:hover:shadow-sm px-5 py-2 pb-3 rounded-md w-auto  
        lg:min-h-[260px] sm:w-[100%] sm:min-h-[200px] mb-2 md:w-[50%] cursor-default`}>
            <h2 className='font-semibold text-xl p-3'>{title}</h2>
            {status ? (
                <article className='flex'>
                    <div className='pr-4'>
                        {children}
                    </div>
                    <div className=''>
                        <p>{text}</p>
                    </div>
                </article>
            ) : (
                <article>
                    <li className='font-medium p-2'>Diseño responsivo</li>
                    <p>Aseguro que tus sitios web sean completamente adaptables a diferentes tamaños de pantalla y dispositivos.</p>
                    <li className='font-medium p-2'>Optimización del rendimiento</li>
                    <p>Trabajo para que tu sitio web cargue rápidamente y funcione de manera eficiente.</p>
                </article>
            )

            }

            {/* <article className='flex'>
                <div className='pr-4'>
                    {children}
                </div>
                <div className=''>
                    <p>{text}</p>
                </div>
            </article>
            <article>
                <li className='font-medium p-2'>Diseño responsivo</li>
                <p>Aseguro que tus sitios web sean completamente adaptables a diferentes tamaños de pantalla y dispositivos.</p>
                <li className='font-medium p-2'>Optimización del rendimiento</li>
                <p>Trabajo para que tu sitio web cargue rápidamente y funcione de manera eficiente.</p>
            </article> */}
        </div>)
}

export default Card
// `absolute inset-0 ${click ? 'translate-x-0' : '-translate-x-full'} transform z-400 h-screen w-1/4 bg-blue-300`
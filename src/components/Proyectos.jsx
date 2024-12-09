import React from 'react'

function Proyectos() {
    return (
        <div className='mx-8'>
            <h1 className='text-center text-5xl p-8 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]'>Proyectos</h1>

            <div className='grid sm:grid-cols-2 gap-4 [&>div]:sm:w-[100%] [&>div]:w-[80%] [&>div]:m-auto'>
                <div className={`bg-violet-200 shadow-xl p-5 rounded-md min-h-[200px]`}>
                    <h2 className='font-semibold text-xl p-3'>Tienda Online</h2>
                    <p>HTML, CSS JAVASCRIPT</p>
                </div>
                <div className={`bg-violet-200 shadow-xl p-5 rounded-md min-h-[200px]`}>
                    <h2 className='font-semibold text-xl p-3'>Web de quiz sobre progamacion.</h2>
                    <p>RACT JS TAILWIND Y ZUSTAND</p>
                </div>
                <div className={`bg-violet-200 shadow-xl p-5 rounded-md min-h-[200px]`}>
                    <h2 className='font-semibold text-xl p-3'>Pagina de cliente</h2>
                    <p>RACT JS TAILWIND Y ZUSTAND</p>
                </div>
                <div className={`bg-violet-200 shadow-xl p-5 rounded-md min-h-[200px]`}>
                    <h2 className='font-semibold text-xl p-3'>Pagina de cliente</h2>
                    <p>RACT JS TAILWIND Y ZUSTAND</p>
                </div>
            </div>
        </div>
    )
}

export default Proyectos
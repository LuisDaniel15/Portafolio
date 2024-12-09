import React from 'react'

function Contacto() {
  return (
    <div className='px-8'>
      <h1 className='text-center text-5xl p-8 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]'>Contacto</h1>
      <p className='font-semibold'>¡Hablemos! <br />
        Si tienes alguna consulta, sugerencia o simplemente quieres ponerte en contacto conmigo, llena el siguiente formulario. Te responderé lo antes posible.</p>
      <div>
        <form action="" className='flex flex-col gap-16 md:w-[60%] m-auto [&>input]:h-10 [&>input]:rounded-sm  mt-8'>
          <input type="text" className='bg-transparent border-b-2 border-slate-400 w-[90%] focus:w-[100%] outline-none focus:border-black transition-all duration-500' placeholder='Nombres' />
          <input type="text" className='bg-transparent border-b-2 border-slate-400  w-[90%] focus:w-[100%] outline-none focus:border-black transition-all duration-500' placeholder='Apellidos' />
          <input type="number" className='bg-transparent border-b-2 border-slate-400  w-[90%] focus:w-[100%] outline-none focus:border-black transition-all duration-500' placeholder='Celular' />
          <input type="text" className='bg-transparent border-b-2 border-slate-400  w-[90%] focus:w-[100%] outline-none focus:border-black transition-all duration-500' placeholder='Nota' />
          {/* <textarea name="" id="" cols="30" rows="8" className='rounded-md'></textarea> */}
          <button className="bg-purple-100 w-24 hover:bg-violet-300 text-gray-800 font-semibold mt-2 mb-4 py-1 px-2 border border-gray-400 rounded shadow">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contacto
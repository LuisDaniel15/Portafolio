import React from 'react'
import Card from './compo/Card'
import { FaCodepen } from "react-icons/fa6";
import { VscTools } from "react-icons/vsc";
import { MdIntegrationInstructions } from "react-icons/md";




export function Cuerpo() {
    return (
        <div className=''>
            <h2 className='text-center text-5xl p-8 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]'>¡Sobre mi!</h2>
            <p className='px-8 [text-shadow:_0_2px_4px_rgb(200_149_200_/_0.8)]'>¡Hola! mi nombre es Luis Daniel soy desarrollador web Junior Front End, tengo conocimientos intermedios y avanzados en el desarrollo de sitios web.
                Este es mi portafolio donde te estare mostrando todas las habilidades y conocimientos que poseo.
            </p>
            <p className='px-8 pt-2 [text-shadow:_0_2px_4px_rgb(200_149_200_/_0.8)]'>Estoy abierto a oportunidades laborales donde pueda contribuir, aprender y crecer. Si tienes una buena oportunidad que coincida con mis habilidades, no dudes en contactarme.</p>
            <h2 className='font-semibold text-2xl px-8 py-5 [text-shadow:_0_2px_4px_rgb(70_70_40_/_0.8)]'>¿Que ofrezco?</h2>

            <div className='flex flex-col  md:block'>
                <div className='md:flex gap-4 mx-8 '>
                    <Card title={"Desarrollador web"} text={"Construyo páginas web a medida utilizando frameworks modernos como React js. Me dedico a asegurar que cada proyecto no solo cumpla con los requisitos técnicos, sino que también brinde una experiencia de usuario excepcional."}>
                        <FaCodepen size={40} color='#8e44ad' />
                    </Card>
                    <Card color={"purple"}  status={false} title={"Desarrollador web"} text={"Construyo páginas web a medida utilizando frameworks modernos como React js. Me dedico a asegurar que cada proyecto no solo cumpla con los requisitos técnicos, sino que también brinde una experiencia de usuario excepcional."}>
                        <FaCodepen size={40} color='#8e44ad' />
                    </Card>
               
                </div>
                <div className='md:flex gap-4 mx-8'>
                    <Card color={"purple"} title={"Mantenimiento y soporte:"} text={"Ofrezco servicios de mantenimiento continuo para mantener tu sitio web actualizado, seguro y funcionando sin problemas. Esto incluye la corrección de errores, actualizaciones de contenido y ajustes técnicos."}
                    >
                        <VscTools size={40} color='#2874a6' />
                    </Card>
                    <Card title={"Capacitación tecnica."} text={"Proporciono capacitación básica para que puedas gestionar tu sitio web de manera autónoma, así como soporte técnico para resolver cualquier duda o problema que pueda surgir."}
                    >
                        <MdIntegrationInstructions size={40} color='#a569bd' />
                    </Card>
                </div>
            </div>
        </div>)
}



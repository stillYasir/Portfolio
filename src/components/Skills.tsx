import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl items-center font-bold' >SKILLS & EXPERTISE :</h2>
                <hr />
                <p className='text-gray-500 pt-2'  data-aos="zoom-in-up">I have a solid base in web development <strong>Specially</strong> in HTML , CSS , JAVASCRIPT / TYPESCRIPT. Otherwise I am a good designer and have many skills as a designer as well . some of them are :
                
                
                    1 :Graphic Designer <em>(LOGO , BANNER , POSTERS , INVITATIONS)</em>
                    2 :THUMBNAILS Desiging
                    3 :Video Editing
                    4 :Photo Editing
                    </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2 ' >
                        <h3  data-aos="zoom-in-up" >HTML</h3>
                        <h3  data-aos="zoom-in-up">CSS</h3>
                        <h3  data-aos="zoom-in-up">JAVASCRIPT</h3>
                    </div>
                    <div className='space-y-2'>
                        <h3  data-aos="zoom-in-up">TAILWIND</h3>
                        <h3  data-aos="zoom-in-up">NODE.JS</h3>
                        <h3  data-aos="zoom-in-up">REACT</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
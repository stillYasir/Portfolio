
import React from 'react'
import Heading from './Heading'
import Card from './Card'


const data=[
    {
        id: '0',
        title: "Todo List",
        desc : "A managing app for your daily life which is created on react and typescript. ",
        img :'/screenshot2.png',
        tags: ["CSS", 'NODE', 'TYPECRIPT', 'REACT'],
    },
    {
        id:'1',
        title :'Countdown Timer',
        desc: "A creative stopwatch which helps you to manage time. ",
        img :"/screenshot1.png",
        tags: ["NODE","CSS","NODEJS","TYPESCRIPT"],
    },
    {
        id:'2',
        title :'Resume Builder',
        desc: "A resume builder which provides you the best resume as you want .",
        img :"/screenshot3.png",
        tags: ["TYPESCRIPT","NODE","REACT","CSS"],
    },

]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <br />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map ((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}

        />))}
      </div>
    </div>
  )
}

export default Projects
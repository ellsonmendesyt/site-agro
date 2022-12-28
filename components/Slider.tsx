import React,{useState,useEffect} from 'react'
import Image from 'next/image'




// slide é um obj que tem o nome da imagem
type Slide={
    image:string;
}

type SliderProps={
    slides:Slide[],
    interval?:number
}
const Slider = ({slides,interval=3000}:SliderProps) => {

    const length=slides.length;
    const [current,setCurrent]=useState(0)

    if(!Array.isArray(slides) || slides.length<=0) return null;

const prev=()=>{
    setCurrent(current===0 ? length-1 :current-1)
}
const next=()=>{
setCurrent(current===length-1 ? 0 :current+1 )
}
console.log(current)


useEffect(() => {
    let timer= setInterval(()=>{
    next()
    },interval)
    return () => {
       clearTimeout(timer)
    };
}, [current])

  return (
    <div className='slider-container'>
        <button className='left-arrow' onClick={prev} ><i className="fa fa-chevron-left"></i></button>
        {slides.map((slide,index)=>{
            return(
                <div  key={index} className={index===current ? 'slide active': 'slide'}>
                    {index===current && (<img className='image'src={slide.image} alt="one" />)} 
                </div>
            )
         })}
        <button className='right-arrow' onClick={prev} ><i className="fa fa-chevron-right"></i></button>
    </div>
  )
}

export default Slider
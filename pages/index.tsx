import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import background from '../public/untitled.png'
import Upcoming from '../components/Upcoming'

export default function Home() {
  var style = {
    height: '150px',
    width: '150px',
    backgroundImage:`url(${background})`
  }
  return (
    <>
    <Navbar/>
    <div className="flex  justify-around items-center bg-cover w-[100vw] h-[80vh] bg-cover bg-center" style = {{backgroundImage : `url(untitled.png)`}}><Image src={'logo.svg'} width={200} height={150} alt="logo"/>
    <div className='text-2xl font-bold'>College Logo</div>
    </div>
    <div className='text-center text-[3rem] py-2rem font-bold font-mono'>Upcoming events</div>
    <Upcoming />

    </>
  )
}

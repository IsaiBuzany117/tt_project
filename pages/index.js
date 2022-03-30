import Navinicio from "../components/navinicio"
import Image from "next/image"
import logo1 from "../assets/logo1.svg"

const index = () => {
  return (
    <div className='h-screen w-full'>
      <div className='w-full h-3/4 bg-slate-100'>
        <Navinicio />
        <div className="flex justify-center w-full mt-8">
          <Image src={logo1} alt="logo"/>  
        </div>
      </div>
      <div className='w-full h-3/4 bg-purple-700'>

      </div>
      <div className='w-full h-3/4 bg-slate-100'>

      </div>
    </div>
  )
}

export default index
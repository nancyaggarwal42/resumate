import { askGemini } from "./gemini";
// react-learn\resumate\src\gemini.js
import React, {useState} from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Sidebar = ({color, setColor, handleDownloadPDF, handleImproveSummary, handleImproveExperience,  handleFixGrammar}) => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false);
    const colors = [
        {name: "Blue", code: "#0000ff"},
        {name: "Green", code: "#008000"},
        {name: "Violet", code: "#ee82ee"},
        {name: "Yellow", code: "#ffff00"},
        {name: "Orange", code: "#ffa500"},
        {name: "Red", code: "#ff0000"}
    ]
    const [showShareBox, setShowShareBox] = useState(false)
    const handleCopyLink = () => {
        navigator.clipboard.writeText(websiteUrl);
        alert("Link copied!")
    }
    const handleWhatsappLink = () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(websiteUrl)}`, "_blank");
        alert("Non functional")
    }
    const handleEmailLink = () => {
        window.location.href = `mailto:?subject=Check this out&body=${encodeURIComponent(websiteUrl)}`;
        alert("Non functional")
    }


  return (
    <div className='py-6 px-2 w-[27vw] h-[116vh] bg-zinc-900 border-r-[2px] mr-4 mt-3' style={{borderColor: color}}>
        <h2 className='text-white text-5xl text-center'>Sidebar</h2>
        <div className="flex flex-col gap-4  align-center mt-5 text-2xl">
            <div className='relative inline-block text-center'>
                <div className='flex align-center gap-4 justify-center items-center border-[2px] border-white rounded-xl'>
                    <button onClick={() => setOpen(!open)}>Ai Assistants</button>
                    <button className='bg-zinc-900 rounded-full' onClick={() => setOpen(!open)}><IoIosArrowDropdownCircle size="1.2em"/></button>
                </div>
                {open && (
                <div className=' text-white flex flex-col gap-2 overflow-hidden mb-2 mt-2'>
                    <button onClick={handleImproveExperience} className='border-[2px] rounded-xl bg-white text-black font-semibold border-black'>Modify Experience</button>
                    <button onClick={handleImproveSummary} className='border-[2px] rounded-xl bg-white text-black font-semibold border-black'>Set Summary</button>
                    {loading && <p>Generating...</p>}
                </div>
            )}
            </div>
            <button onClick={handleDownloadPDF} className='border-[2px] border-white rounded-xl'>Download</button>
            <button onClick={() => setShowShareBox(!showShareBox)} className='border-[2px] border-white rounded-xl'>Share</button>
            {showShareBox && (
                <div className="absolute bg-zinc-800 text-white shadow-lg rounded-lg top-[35%] left-[2%]">
                    <button className='w-full py-2 cursor-pointer text-center border-[1px] border-white' onClick={handleCopyLink}>Copy Link</button>
                    <button className='w-full py-2 cursor-pointer text-center border-[1px] border-white' onClick={handleWhatsappLink}>Whatsapp</button>
                    <button className='w-full py-2 cursor-pointer text-center border-[1px] border-white' onClick={handleEmailLink}>Email</button>
                </div>
            )}
        </div>
        <div className="mt-5">
            <h2 className='text-white text-2xl text-center'>Web Features</h2>
                {/* <div className="flex flex-wrap text-xl gap-8 leading-none mt-2 items-center justify-center">
                    <button className='border border-[1px] px-2 py-2 bg-blue-600 rounded-lg'>Blue</button>
                    <button className='border border-[1px] px-2 py-2 bg-purple-500 rounded-lg'>Violet</button>
                    <button className='border border-[1px] px-2 py-2 bg-green-600 rounded-lg'>Green</button>
                    <button className='border border-[1px] px-2 py-2 bg-yellow-700 rounded-lg'>Yellow</button>
                    <button className='border border-[1px] px-2 py-2 bg-red-600 rounded-lg'>Red</button>
                    <button className='border border-[1px] px-2 py-2 bg-orange-700 rounded-lg'>Orange</button>
                </div> */}
                <div className='flex flex-wrap gap-8 mt-2'>
                    {colors.map((clr) => (
                        <button key={clr.name} onClick={()=> setColor(clr.code)} style={{background: clr.code}} className={`border px-3 py-2 rounded-lg transition-all duration-200 ${clr === clr.code ? "scale-110 brightness-75" : ""}`}>{clr.name}</button>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Sidebar
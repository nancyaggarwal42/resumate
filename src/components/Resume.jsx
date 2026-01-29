import React, { useState, forwardRef } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Resume = forwardRef(({color, setColor}, ref) => {
    const [name, setName] = useState("Nancy Aggarwal")
    const [post, setPost] = useState("Web Developer")
    const [contact, setContact] = useState({number : "8427968738", email:"nancyaggarwal149@gmail.com", location:"Delhi, India"})
    const [education, setEducation] = useState([{course: "Bachelor of Computer Application", passyear: "2023", endyear: "2026", cgpa: "8.9cgpa", college: "Guru Gobind Singh Indraprastha University"}])
    const [skills, setSkills] = useState(["Html"])
    const [summary, setSummary] = useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea est aliquam sequi necessitatibus nesciunt fugiat cum maxime, quas quod praesentium provident officiis quae delectus sunt aut doloribus maiores quibusdam nam ab optio aliquid! Provident rerum ex quos accusantium molestiae adipisci illum mollitia, nihil corrupti libero?")
    const [expPost, setExpPost] = useState([{intern: "React Developer Intern", startYear: "July 2026", finishYear: "October 2026", points: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos alias porro fugit dolorem fuga accusamus distinctio nulla vero impedit nemo?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos alias porro fugit dolorem fuga accusamus distinctio nulla vero impedit nemo?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos alias porro fugit dolorem fuga accusamus distinctio nulla vero impedit nemo?"]}])
    const [certificateName, setCertificateName] = useState({cert: "Basics of AI", company: "IBM", pointers:["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos alias porro fugit dolorem fuga accusamus distinctio nulla vero impedit nemo?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos alias porro fugit dolorem fuga accusamus distinctio nulla vero impedit nemo?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos alias porro fugit dolorem fuga accusamus distinctio nulla vero impedit nemo?"]})
    const delEducation = (deledu) => {
        const updated = education.filter((_, i) => i !==deledu)
        setEducation(updated)
    }
  return (
    <div ref={ref} className='h-[120vh] w-full text-black bg-white ml-2'>
        {/* <div className="flex gap-4">
            <img src="" alt="" />
        </div> */}
        <div className="flex flex-col w-full">
            <input className='text-5xl border-none' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className='text-2xl border-none' type="text" value={post} onChange={(e) => setPost(e.target.value)} />
        </div>
        <div className='border-[2px] w-[90%] mt-3' style={{borderColor: color}}></div>
        <div className="flex  h-full  mt-2">
            <div className="w-[25%] border-r-[3px]" style={{borderColor: color}}>
                <div className="flex flex-col gap-4 w-full px-2">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt />
                        <input className='text-xl' type="number" value={contact.number} onChange={(e) => setContact({...contact, number:e.target.value})} />
                    </div>
                    <div className="flex items-center gap-4  w-full">
                        <MdEmail />
                        <textarea className='text-xl' type="text" value={contact.email} onChange={(e) => setContact({...contact, email:e.target.value})} />
                    </div>
                    <div className="flex items-center gap-2">
                        <FaLocationDot />
                        <input className='text-xl' type="text" value={contact.location} onChange={(e) => setContact({...contact, location:e.target.value})} />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className='text-2xl text-center'>Education</h2>
                    {education.map((edu, indexn) => (
                     <div key={indexn} className='mt-2'>
                        <div className="flex items-center">
                            <textarea className='w-[200px] outline-none resize-none h-[80px]' placeholder='Course' value={edu.course} onChange={(e) => {const updated = [...education]; updated[indexn].course = e.target.value; setEducation(updated)}}/>
                            <input className='w-14 px-2' type="text" placeholder='Start Year' value={edu.passyear} onChange={(e) => {const updated = [...education]; updated[indexn].passyear = e.target.value; setEducation(updated)}} />
                            <span className='mx-1'>-</span>
                            <input className='w-14 px-2' type="text" placeholder='Pass Year' value={edu.endyear} onChange={(e) => {const updated = [...education]; updated[indexn].endyear = e.target.value; setEducation(updated)}}/>
                        </div>
                        <div className="mt-2">
                            <textarea className='w-full' value={edu.college} placeholder='Add College' onChange={(e) => {const updated = [...education]; updated[indexn].college = e.target.value; setEducation(updated)}}/>
                        </div>
                     </div>
                    ))}
                    <button className='no-print' onClick={() => setEducation([...education, {courses: "", passyear: "", endyear: "", college: ""}])}>Add Education</button>
                </div>
                <div className="mt-2">
                    <h2 className='text-2xl text-center'>Skills</h2>
                    {skills.map((skill, skiller) => (
                    <div key={skiller} className='mt-2'>
                        <div className="flex flex-col gap-2 mt-2">
                        <div className="flex gap-4 px-2">
                            <span className='text-xl'>•</span>
                            <input className='text-xl' type="text" value={skill} onChange={(e) => {const updated = [...skills]; updated[skiller] = e.target.value; setSkills(updated)}}/>
                        </div>
                        </div>
                        <div className="flex gap-16">
                            <button className='no-print' onClick={() => setSkills([...skills, ""])}>Add Skills</button>
                            <button className='no-print' onClick={() => {const del = skills.filter((_, i) => i !== skiller); setSkills(del)}}>Delete</button>
                        </div>
                    </div>

                    ))}

                    
                </div>
            </div>
            <div className="w-[68%] px-8">
                <div className="">
                    <h2 className='text-2xl'>Summary</h2>
                    <textarea className='w-full min-h-[95px] resize-none overflow-hidden rows-{3}' value={summary} onChange={(e) => setSummary(e.target.value)} />
                </div>
                <div className="border-[1px]" style={{borderColor: color}}></div>
                <div className="mt-2">
                    <h2 className='text-2xl'>Experience</h2>
                    {expPost.map((exp, idx) => (
                        <div key={idx} className="flex flex-col w-full">
                            <div className="flex justify-between">
                                <textarea placeholder='Add Company' value={exp.intern}  onChange={(e) => {const updated = [...expPost]; updated[idx].intern = e.target.value; setExpPost(updated)}}/>
                                <div className="flex">
                                    <textarea placeholder='Add start year' className='w-20' value={exp.startYear}  onChange={(e) => {const updated = [...expPost]; updated[idx].startYear = e.target.value; setExpPost(updated)}}/>
                                    <span className="mx-8">-</span>
                                    <textarea placeholder='Add Finish year' className='w-25' value={exp.finishYear}  onChange={(e) => {const updated = [...expPost]; updated[idx].finishYear = e.target.value; setExpPost(updated)}}/>
                                </div>
                            </div>
                            <div className="w-full flex flex-col">
                                {exp.points.map((point, pIdx) => (
                                    <div key={pIdx} className="flex items-start gap-2">
                                        <span>•</span>
                                        <textarea placeholder='Points' className='w-full min-h-[80px]' value={point} onChange={(e) => {const updated = [...expPost]; updated[idx].points[pIdx] = e.target.value; setExpPost(updated)}}/>
                                        <button className='no-print' onClick={() => {const updated = [...expPost]; updated[idx].points = updated[idx].points.filter((_ ,i) => i !== pIdx); setExpPost(updated)}}>Delete</button>
                                    </div>
                                ))}
                            </div>
                            <button className='no-print' onClick={() => setExpPost([...expPost, {intern: "", startYear: "", finishYear: "", points: ["", ""]}])}>Add Experience</button>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <h2 className='text-2xl'>Certificate</h2>
                    <div className="flex flex-col">
                        <input type="text" value={certificateName.cert} onChange={(e) => setCertificateName({...certificateName, cert:e.target.value})}/>
                        <input type="text" value={certificateName.company} onChange={(e) => setCertificateName({...certificateName, company:e.target.value})}/>
                    </div>
                    <div className="flex flex-col w-full mt-2">
                        {/* {certificateName.pointers.map((pointer, index) => (
                            <div className="flex gap-4 items-center">
                                <span>•</span>
                                <textarea className='w-full mt-1 leading-5' key={idx}>{pointer}</textarea>
                            </div>
                        ))} */}
                        {certificateName.pointers.map((pointer, certIdx) => (
                            <div key={certIdx} className="flex gap-4 items-center">
                                <span>•</span>
                                <textarea className="w-full" value={pointer} onChange={(e) => {const updated = [...certificateName.pointers]; updated[certIdx] = e.target.value; setCertificateName({...certificateName, pointers: updated})}}/>
                                <button className='no-print' onClick={() => {const updated = certificateName.pointers.filter((_, i) => i !== certIdx); setCertificateName({...certificateName, pointers: updated})}}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
})

export default Resume
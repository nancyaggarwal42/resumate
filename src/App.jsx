import React,{useState, useRef} from 'react'
import Sidebar from './Sidebar'
import Resume from './components/Resume'
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

const App = () => {
    const [color, setColor] = useState("Blue")
    const resumeRef = useRef(null)

    const handleDownloadPDF = async () => {
      const element = resumeRef.current 

      const canvas = await html2canvas(element, {scale:2, ignoreElements: (el) => el.classList.contains("no-print")})
      const imgData = canvas.toDataURL("image/png")

      const pdf = new jsPDF("p", "mm", "a4")

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)

      pdf.save("resume.pdf")
      console.log("downloaded")
    }

    const [summary, setSummary] = useState(
    "A highly motivated developer with strong design and problem-solving skills."
  );

  const [experience, setExperience] = useState([
    "Developed responsive web applications using React.",
    "Implemented UI designs using Tailwind CSS.",
    "Collaborated with teams to build scalable features."
  ]);

  const callGemini = async (prompt) => {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  };

  // Modify Summary
  const handleImproveSummary = async () => {
    const improved = await callGemini(`Improve this professional summary:

${summary}

Make it concise, professional, and impactful.`);
    setSummary(improved);
  };

  // Fix Grammar
  const handleFixGrammar = async () => {
    const improved = await callGemini(`Fix grammatical errors in this text:

${summary}`);
    setSummary(improved);
    console.log("summary")
  };

  // Improve experience
  const handleImproveExperience = async () => {
    const improved = await callGemini(`Rewrite these experience points to be more professional and ATS optimized:

${experience.join("\n")}

Return only bullet points.`);
    setExperience(improved.split("\n"));
  };

  return (
    <div className='h-[120vh] w-full text-white flex'>
      <Sidebar handleImproveSummary={handleImproveSummary} handleImproveExperience={handleImproveExperience} handleFixGrammar={handleFixGrammar} color={color} setColor={setColor} handleDownloadPDF={handleDownloadPDF} />
      <Resume color={color} setColor={setColor} ref={resumeRef}/>
    </div>
  )
}

export default App
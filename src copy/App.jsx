import { useState } from "react";
function App() {
 
  const [check, checkModal] = useState(false);
  function openModal() {
    checkModal(true)
  }

  function closeModal() {
    checkModal(false)
  }
 

  return (
    <>
     <button style={{cursor:"pointer",padding:'8px',borderRadius:'6px',border:'none',boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} onClick={openModal}>Open Modal</button>

     {
      check?(
        <div  style={{display:'flex',justifyContent:'space-between',width:'80%',alignItems:"center",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%",padding:"0px 20px 0px 20px"}}>
      <p>Bu nedi dostlar</p>
      <span style={{cursor:"pointer",fontWeight:"bold"}} onClick={closeModal}>x</span>
     </div>
      ):""
     }
    </>
  )
}

export default App
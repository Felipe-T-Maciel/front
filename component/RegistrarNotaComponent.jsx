export default function RegistrarNota() {
    return(
       <>
       <div className="w-screen h-screen flex justify-center items-center">
           <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "440px", width: "641px", backgroundColor: "#0C62A0", borderRadius: "32px", flexDirection:"column", overflow: "hidden", gap:"2rem" }}>
                <div style={{textalign:"center", color:"#F0EFF4", fontWeight:"400", fontSize:"24px"}}>Nome do Aluno</div>
                <input style={{ flex: "", height: "40px", width: "467px", backgroundColor: "#F0EFF4", borderRadius: "32px", padding:"20px", fontSize:"large" }} type="text" placeholder="Nome do Aluno" />
                <div style={{textalign:"center", color:"#F0EFF4", fontWeight:"400", fontSize:"24px"}}>Nota</div>
                <input style={{ flex: "", height: "40px", width: "467px", backgroundColor: "#F0EFF4", borderRadius: "32px", padding:"20px", fontSize:"large" }} type="float" placeholder="Nota do Aluno" />
                
                  <button className="duration-200 hover:scale-105 font-bold text-2xl" style={{height:"77px", width:"284px", backgroundColor:"#208AD7", borderRadius:"32px", color:"#FBFBFB" }}>Registrar Nota</button>
   
            </div>
       </div>
       </>
    );
   }
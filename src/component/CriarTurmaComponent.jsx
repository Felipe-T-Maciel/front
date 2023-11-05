export default function CriarTurma() {
    return (
        <>
            <div className="w-screen h-[440px] flex justify-center items-center" style={{position:'absolute'}}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "440px", width: "641px", backgroundColor: "#0C62A0", borderRadius: "32px", flexDirection:"column", overflow: "hidden", gap:"3rem" }}>
                    <div style={{textalign:"center", color:"#F0EFF4", fontWeight:"400", fontSize:"32px"}}>Nome da turma</div>
                    <input style={{ flex: "", height: "40px", width: "467px", backgroundColor: "#F0EFF4", borderRadius: "32px", padding:"20px", fontSize:"large" }} type="text" placeholder="Nome da Turma" />

                        <button className="duration-200 hover:scale-105 font-bold text-2xl" style={{height:"77px", width:"284px", backgroundColor:"#208AD7", borderRadius:"32px", color:"#FBFBFB" }}>Criar Turma</button>
    
                </div>
            </div>
        </>
    );
}   
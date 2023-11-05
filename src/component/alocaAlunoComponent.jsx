export default function AlocarAluno() {
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div style={{backgroundColor: '#0C62A0', height: "340px", width: "450px", display:'flex', 
                flexDirection:'column', alignItems:'center', gap:'2rem', borderRadius:'32px'}}>
                    <div style={{paddingTop:'7%'}}>
                        <h1 style={{fontWeight:'700px', fontSize:'2rem', lineHeight:'2rem', fontFamily:'Poppins,sans-serif'}} >Alocar Aluno</h1>
                    </div>
                    <div style={{display:'flex', gap:'2rem', paddingTop:'5%'}}>
                        <h2 style={{fontSize:'1rem'}}>Aluno</h2>
                        <select name="idAluno" id="" style={{width:'100px', borderRadius:'5px'}} className=" cursor-pointer duration-200 hover:scale-105"></select>
                    </div>
                    <div style={{display:'flex', gap:'2rem'}}>
                        <h2 style={{fontSize:'1rem'}}>Turma</h2>
                        <select name="nomeTurma" id="" style={{width:'100px', borderRadius:'5px'}} className=" cursor-pointer duration-200 hover:scale-105"></select>
                    </div>
                    <button style={{height:'4.5rem', width:'12rem', backgroundColor:'#208AD7',
                     borderRadius:'15px', fontWeight:'700px', fontSize:'1.5rem', lineHeight:'0.5rem'}} 
                     className=" duration-200 hover:scale-105"
                     >Alocar Aluno</button>
                </div>
            </div>
        </>
    );
}
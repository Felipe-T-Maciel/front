import axios from "axios";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from 'cookies-next';

export default function Login() {

    useEffect(() => {
        const fetchData = async () =>{
            if(getCookie('usuario')!=undefined){
                setMatricula(getCookie('usuario'))
                    const usuario = await axios.get('http://localhost:8083/users',{
                  params: {
                      matricula,
                  },
                });
                    if(usuario.data){
                        setCookie('usuario', usuario.data.matricula);
                        if(usuario.data.tipo == "Aluno"){
                            window.location.href = "http://localhost:3000/Aluno";
                        } else if(usuario.data.tipo == "Professor"){
                
                            window.location.href = "http://localhost:3000/Professor";
                        }else if(usuario.data.tipo == "Secretario"){
                
                            window.location.href = "http://localhost:3000/Secretario";
                        }
                    }
            }
        }
        fetchData();
    })
    
    const [matricula, setMatricula] = useState("")
    const [senha, setSenha] = useState("")

    const fetchProdutos = async () => {
        if(matricula>0 && matricula.length>0 && matricula.length<8){
            try {
            
                const response = await axios.get('http://localhost:8083/users/verificaLogin',{
                  params: {
                      matricula,
                      senha,
                  },
                });
      
                if(response.data){
                    const usuario = await axios.get('http://localhost:8083/users',{
                  params: {
                      matricula,
                  },
                });
                    if(usuario.data){
                        setCookie('usuario', usuario.data.matricula);
                        if(usuario.data.tipo == "Aluno"){
                            window.location.href = "http://localhost:3000/Aluno";
                        } else if(usuario.data.tipo == "Professor"){
                
                            window.location.href = "http://localhost:3000/Professor";
                        }else if(usuario.data.tipo == "Secretario"){
                
                            window.location.href = "http://localhost:3000/Secretario";
                        }
                    }
                }else{
                  alert('Matricula ou senha invalida')
                  setMatricula("")
                  setSenha("")
                }
      
                return response.data;
              } catch (error) {
                alert('Matricula ou senha invalida')
                setMatricula("")
                setSenha("")
                console.error("Erro ao buscar produtos:", error);
              }
        }else{
            alert('Matricula ou senha invalida')
            setMatricula("")
            setSenha("")
          }
      };

    return(
        <>
            <div className="w-full h-screen">
                <div className="flex">
                    <div className="w-[50%] z-50 h-screen bg-cover bg-center ">
                        <div className="flex flex-col gap-[10rem] items-center h-full pt-[20%]">
                            <div>
                                <p className="text-white text-5xl font-bold select-none">Entrar</p>
                            </div>
                            <div className="flex flex-col w-full items-center gap-4">
                                <input type="text" className="h-[4rem] p-4 w-[50%] rounded-xl duration-300 hover:scale-[1.01] text-xl focus:scale-[1.03]" placeholder="Matrícula" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
                                <input type="password" className="h-[4rem] p-4 w-[50%] rounded-xl duration-300 hover:scale-[1.01] text-xl focus:scale-[1.03]" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                            </div>
                            <div className="w-full flex justify-center">
                                <button className="bg-green-500 h-[4rem] p-4 w-[30%] rounded-xl text-white text-xl font-bold  duration-300 hover:scale-110" onClick={() => fetchProdutos()}>Confirmar</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[55%] absolute right-0 h-screen bg-cover bg-center "
                        
                    ></div>
                </div>
            </div>
        </>
    );
}
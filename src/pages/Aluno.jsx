import axios from "axios";
import { getCookie } from 'cookies-next';
import { useEffect, useState } from "react";
import CriarTurma from "../../component/CriarTurmaComponent";
import HeaderComponent from "../../component/HeaderComponent";
export default function Aluno() {

    const [aberto, setAberto] = useState(false)

    useEffect(()=>{
        if(usuario.tipo != "Aluno"){
            if(usuario.tipo == "Professor"){
            
                window.location.href = "http://localhost:3000/Professor";
            }else if(usuario.tipo == "Secretario"){
    
                window.location.href = "http://localhost:3000/Secretario";
            }
        }
    })
    const [usuario, setusuario] = useState(
        {
            matricula: "",
            nome: "",
            endereco: "",
            idade: 0,
            senha: "",
            tipo: "",
            disciplina: []
        }
    )

    useEffect(() => {
        const fetchData = async () => {
            const matricula = getCookie('usuario')
            
            const response = await axios.get('http://localhost:8083/users', {
                params: {
                matricula,
                },
            });

            setusuario({
                matricula: response.data.matricula,
                nome: response.data.nome,
                endereco: response.data.endereco,
                idade: response.data.idade,
                senha: response.data.senha,
                tipo: response.data.tipo,
                disciplina: response.data.disciplina
            });
            
        }
        fetchData();
    }, [])
    return(
        <>
            <div className="w-full h-screen flex" >
            <HeaderComponent/>
                
                <div className="w-[20%] h-full p-5 duration-300" id="fundo">

                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                </div>

                <div className="w-[60%] h-full p-5 duration-300" id="fundo">

                    <div className="mt-[10%] flex flex-col items-center">
                        <h1 className="text-gray-500 text-4xl font-thin">Seja bem vindo, {usuario.nome}!</h1>

                        <div className="mt-[10%]">
                            <div className="w-[22rem] h-[15rem] bg-gray-50 rounded-xl  drop-shadow-lg flex justify-center items-center cursor-pointer duration-200 hover:scale-105" onClick={() =>  {
                                setAberto(true)
                                let fundo = document.querySelectorAll('#fundo')
                                console.log(fundo.classList)
                                fundo.forEach(element => {
                                    element.classList.add('blur-sm')
                                });
                                }}>
                                <p className="text-gray-600 text-2xl font-thin select-none">Ver notas</p>
                            </div>  
                        </div>
                    </div>

                </div>

                {aberto ? <div className="h-screen w-full flex justify-center items-center fixed z-99" style={{zIndex:'99999'}} id="mostraNota" onClickCapture={(e) => {
                    let mostraNota = document.querySelector('#mostraNota')
                    const fundo = document.querySelectorAll('#fundo')
                    if(e.target === mostraNota && aberto){
                        setAberto(false)
                        fundo.forEach(element => {
                            element.classList.remove('blur-sm')
                        });
                        mostraNota.classList.add('blur-none')
                    }
                }}><CriarTurma/></div> : '' }
                
                <div className="w-[20%] h-full p-5 duration-300" id="fundo">

                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>

                </div>

            </div>
        </>
    );
}
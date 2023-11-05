import HeaderComponent from "../component/HeaderComponent";
import axios from "axios";
import CriarTurma from "../component/CriarTurmaComponent";
import AlocarAluno from "../component/alocaAlunoComponent";
import RegistrarDiscplina from "@/component/registrarDisciplina";
import { getCookie } from 'cookies-next';
import { useEffect, useState } from "react";
export default function Secretario() {

    const [abertoMostraNota, setAbertoMostraNota] = useState(false)
    const [abertoAlocaAluno, setAbertoAlocaAluno] = useState(false)
    const [abertoRegistrarDiscplina, setAbertoRegistrarDiscplina] = useState(false)

    useEffect(() => {
        if(usuario.tipo != "Secretario"){
            if(usuario.tipo == "Aluno"){
            
                window.location.href = "http://localhost:3000/Aluno";
            }else if(usuario.tipo == "Professor"){
    
                window.location.href = "http://localhost:3000/Professor";
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

            if(usuario.tipo != "Secretario"){
                if(usuario.tipo == "Aluno"){
                
                    window.location.href = "http://localhost:3000/Aluno";
                }else if(usuario.tipo == "Professor"){
        
                    window.location.href = "http://localhost:3000/Professor";
                }
            }
        }
        fetchData();
    }, [])              
    return(
        <>
            <HeaderComponent/>
            <div className="w-full h-screen flex">

                <div className="w-[20%] h-full p-5 duration-300 " id="fundo">

                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                </div>

                <div className="w-[60%] h-full p-5 duration-300" id="fundo">

                    <div className="mt-[10%] flex flex-col items-center">
                        <h1 className="text-gray-500 text-4xl font-thin">Seja bem vindo, {usuario.nome}!</h1>

                        <div className="mt-[10%] flex flex-wrap gap-10 justify-center">
                            <div className="w-[22rem] h-[15rem] bg-gray-50 rounded-xl  drop-shadow-lg flex justify-center items-center cursor-pointer duration-200 hover:scale-105" onClick={() =>  {
                                setAbertoAlocaAluno(true)
                                let fundo = document.querySelectorAll('#fundo')
                                console.log(fundo.classList)
                                fundo.forEach(element => {
                                    element.classList.add('blur-sm')
                                });
                                }}>
                                <p className="text-gray-600 text-2xl font-thin select-none">Alocar Aluno</p>
                            </div> 

                            <div className="w-[22rem] h-[15rem] bg-gray-50 rounded-xl  drop-shadow-lg flex justify-center items-center cursor-pointer duration-200 hover:scale-105" onClick={() =>  {
                                setAbertoMostraNota(true)
                                let fundo = document.querySelectorAll('#fundo')
                                console.log(fundo.classList)
                                fundo.forEach(element => {
                                    element.classList.add('blur-sm')
                                });
                                }}>
                                <p className="text-gray-600 text-2xl font-thin select-none">Criar Turma</p>
                            </div>  
                            <div className="w-[22rem] h-[15rem] bg-gray-50 rounded-xl  drop-shadow-lg flex justify-center items-center cursor-pointer duration-200 hover:scale-105" onClick={() =>  {
                                setAbertoRegistrarDiscplina(true)
                                let fundo = document.querySelectorAll('#fundo')
                                console.log(fundo.classList)
                                fundo.forEach(element => {
                                    element.classList.add('blur-sm')
                                });
                                }}>
                                <p className="text-gray-600 text-2xl font-thin select-none">Registrar Nova Disciplina</p>
                            </div>  
                            <div className="w-[22rem] h-[15rem] bg-gray-50 rounded-xl  drop-shadow-lg flex justify-center items-center cursor-pointer duration-200 hover:scale-105">
                                <p className="text-gray-600 text-2xl font-thin select-none">Gerar Boletins</p>
                            </div>  
                        </div>
                    </div>

                </div>

                {abertoMostraNota ? <div className="h-screen w-full flex justify-center items-center fixed z-99" style={{zIndex:'99999'}} id="mostraNota" onClickCapture={(e) => {
                    let mostraNota = document.querySelector('#mostraNota')
                    const fundo = document.querySelectorAll('#fundo')
                    if(e.target === mostraNota && abertoMostraNota){
                        setAbertoMostraNota(false)
                        fundo.forEach(element => {
                            element.classList.remove('blur-sm')
                        });
                        mostraNota.classList.add('blur-none')
                    }
                }}><CriarTurma/></div> : '' }

                {abertoAlocaAluno ? <div className="h-screen w-full flex justify-center items-center fixed z-99" style={{zIndex:'99999'}} id="alocaAluno" onClickCapture={(e) => {
                    let alocaAluno = document.querySelector('#alocaAluno')
                    const fundo = document.querySelectorAll('#fundo')
                    if(e.target === alocaAluno && abertoAlocaAluno){
                        setAbertoAlocaAluno(false)
                        fundo.forEach(element => {
                            element.classList.remove('blur-sm')
                        });
                        alocaAluno.classList.add('blur-none')
                    }
                }}><AlocarAluno/></div> : '' }

                {abertoRegistrarDiscplina ? <div className="h-screen w-full flex justify-center items-center fixed z-99" style={{zIndex:'99999'}} id="registrarDisciplina" onClickCapture={(e) => {
                    let registrarDisciplina = document.querySelector('#registrarDisciplina')
                    const fundo = document.querySelectorAll('#fundo')
                    if(e.target === registrarDisciplina && abertoRegistrarDiscplina){
                        setAbertoRegistrarDiscplina(false)
                        fundo.forEach(element => {
                            element.classList.remove('blur-sm')
                        });
                        registrarDisciplina.classList.add('blur-none')
                    }
                }}><RegistrarDiscplina/></div> : '' }

                <div className="w-[20%] h-full p-5 duration-300" id="fundo">

                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>

                </div>

            </div>
        </>
    );
}
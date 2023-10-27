import HeaderComponent from "../../component/HeaderComponent";
import axios from "axios";
import { getCookie } from 'cookies-next';
import { useEffect, useState } from "react";
export default function Secretario() {
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

                <div className="w-[20%] h-full p-5">

                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                </div>

                <div className="w-[60%] h-full p-5">

                    <div className="mt-[10%] flex flex-col items-center">
                        <h1 className="text-gray-500 text-4xl font-thin">Seja bem vindo, {usuario.nome}!</h1>

                        <div className="mt-[10%] flex flex-wrap gap-10 justify-center">
                            <div className="w-[22rem] h-[15rem] bg-gray-50 rounded-xl  drop-shadow-lg flex justify-center items-center cursor-pointer duration-200 hover:scale-105">
                                <p className="text-gray-600 text-2xl font-thin select-none">Alocar Aluno</p>
                            </div>  
                            <div className="w-[22rem] h-[15rem] bg-gray-50 rounded-xl  drop-shadow-lg flex justify-center items-center cursor-pointer duration-200 hover:scale-105">
                                <p className="text-gray-600 text-2xl font-thin select-none">Criar Turma</p>
                            </div>  
                            <div className="w-[22rem] h-[15rem] bg-gray-50 rounded-xl  drop-shadow-lg flex justify-center items-center cursor-pointer duration-200 hover:scale-105">
                                <p className="text-gray-600 text-2xl font-thin select-none">Registrar Nova Disciplina</p>
                            </div>  
                            <div className="w-[22rem] h-[15rem] bg-gray-50 rounded-xl  drop-shadow-lg flex justify-center items-center cursor-pointer duration-200 hover:scale-105">
                                <p className="text-gray-600 text-2xl font-thin select-none">Gerar Boletins</p>
                            </div>  
                        </div>
                    </div>

                </div>

                <div className="w-[20%] h-full p-5">

                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>
                    <div className="w-full h-[3rem] border-2 mt-[40%] bg-gray-50 rounded-xl drop-shadow-lg cursor-pointer duration-200 hover:scale-105"></div>

                </div>

            </div>
        </>
    );
}
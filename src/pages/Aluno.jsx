import HeaderComponent from "../component/HeaderComponent";
export default function Aluno() {
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
                        <h1 className="text-gray-500 text-4xl font-thin">Seja bem vindo, Aluno!</h1>

                        <div className="mt-[10%]">
                            <div className="w-[22rem] h-[15rem] bg-gray-50 rounded-xl  drop-shadow-lg flex justify-center items-center cursor-pointer duration-200 hover:scale-105">
                                <p className="text-gray-600 text-2xl font-thin select-none">Ver notas</p>
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
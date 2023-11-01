export default function RelatorioMedia() {
    return (<>
    <div className="w-screen h-screen flex justify-center items-center">
            <div className="relative left-auto flex-col flex justify-around items-center top-auto rounded-xl w-[926px] h-[609px] bg-[#0C62A0]">
                <div className="absolute top-4 right-4 cursor-pointer">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <rect y="5.0769" width="7.17986" height="55.0456" transform="rotate(-45 0 5.0769)" fill="white" />
                        <rect width="7.17986" height="55.0456" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 44 5.0769)" fill="white" />
                    </svg>
                </div>
                <div className="flex justify-between items-center">
                    <button className="text-white text-3xl rounded-2xl px-6 py-4 bg-[#208AD7] mr-10" >
                        Gerar<br/>Relatório
                    </button>
                    <div className="flex flex-col justify-between">
                        <div className=" flex justify-between items-center mb-8"  >
                            <label className="text-white mr-4 text-2xl" htmlFor="">Turma</label>
                            <select className="rounded-xl w-[230px] h-[40px]" name="" id="">

                            </select>
                        </div>
                        <div className=" flex justify-between items-center mb-8">
                            <label htmlFor="" className="text-white mr-4 text-2xl">Disciplina</label>
                            <select className="rounded-xl w-[230px] h-[40px]" name="" id="">

                            </select>
                        </div>
                        
                    </div>
                </div>
                <div className=" rounded-2xl w-2/3 h-[340px] bg-slate-50">

                </div>
            </div>
        </div>

    </>);
}
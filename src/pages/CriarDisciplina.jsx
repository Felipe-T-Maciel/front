export default function CriarDisciplina() {
    return (
        <>
        <div className="w-screen h-screen flex justify-center items-center">
                <div className="left-auto flex-col flex justify-around top-auto rounded-xl w-[640px] h-[440px] bg-[#0C62A0]">
                    <div className="flex justify-end items-center">

                        <div className="relative cursor-pointer">
                            <svg className="absolute top-0 right-4" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                <rect y="5.0769" width="7.17986" height="55.0456" transform="rotate(-45 0 5.0769)" fill="white" />
                                <rect width="7.17986" height="55.0456" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 44 5.0769)" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-4"  >
                        <label className="text-white mb-2 mr-4 text-2xl" htmlFor="">Nome da Disciplina:</label>
                        <input className="rounded-xl px-4 py-2 w-[430px] h-[40px]" name="" id="">

                        </input>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-4">
                        <label htmlFor="" className="text-white mb-2 mr-4 text-2xl">Carga Horária:</label>
                        <input type="number" className=" px-4 py-2 rounded-xl w-[130px] h-[40px]" name="" id="">

                        </input>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="rounded-xl px-14 py-4 text-2xl text-white bg-[#208AD7]">Registrar<br />Disciplina</button>
                    </div>
                </div>

            </div>
        </>
        );
    }
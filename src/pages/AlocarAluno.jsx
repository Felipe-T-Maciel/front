export default function AlocarAluno() {
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="left-auto flex-col flex justify-around top-auto rounded-xl w-[469px] h-[469px] bg-[#0C62A0]">
                    <div className="flex justify-end items-center">
                        <div className="m-auto text-3xl text-white">
                            Alocar Aluno
                        </div>

                        <div className="fixed mr-6 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                <rect y="5.0769" width="7.17986" height="55.0456" transform="rotate(-45 0 5.0769)" fill="white" />
                                <rect width="7.17986" height="55.0456" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 44 5.0769)" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center mb-8"  >
                        <label className="text-white mr-4 text-2xl" htmlFor="">Aluno</label>
                        <select className="rounded-xl w-[230px] h-[40px]" name="" id="">

                        </select>
                    </div>
                    <div className=" flex justify-center items-center mb-8">
                        <label htmlFor="" className="text-white mr-4 text-2xl">Turma</label>
                        <select className="rounded-xl w-[230px] h-[40px]" name="" id="">

                        </select>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="rounded-xl px-14 py-4 text-2xl text-white bg-[#208AD7]">Alocar<br />Aluno</button>
                    </div>
                </div>

            </div>
        </>
    );
}
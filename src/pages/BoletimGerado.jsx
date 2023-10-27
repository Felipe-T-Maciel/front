export default function BoletimGerado() {
    return (
        <>
            <div className="w-screen h-screen fixed flex justify-center items-center">

                <div class="w-[1218px] h-[920px] bg-[#0C62A0] rounded-xl" >
                    <div className="flex justify-end m-6 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
                            <rect y="8.48529" width="12" height="92" transform="rotate(-45 0 8.48529)" fill="white" />
                            <rect width="12" height="92" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 73.5391 8.48529)" fill="white" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-evenly mb-4">
                        <div className="flex items-center">
                            <label className="text-white text-xl mr-4">Turma</label>
                            <select className=" rounded-xl w-[290px] h-[50px]" name="" id="">
                                //colo
                            </select>
                        </div>
                        <button className="cursor-pointer rounded-xl bg-[#208AD7] text-xl text-center px-8 py-2 text-white text-xl">Gerar<br></br>Boletins</button>
                    </div>
                    <div className="flex justify-center items-center mb-4">
                        <div className="rounded-bl-xl rounded-tl-xl bg-slate-100 w-[1121px] h-[575px] overflow-y-scroll">
                            <div className="flex justify-around">
                                <span>
                                    Aluno
                                </span>
                                <span>
                                    Nota 1
                                </span>
                                <span>
                                    Nota 2
                                </span>
                                <span>
                                    Nota 3
                                </span>
                                <span>
                                    Nota 4
                                </span>
                                <span>
                                    Média
                                </span>
                                <span>
                                    Disciplina
                                </span>

                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default function MostrarNotas() {
    return (
        <>
            <div className="w-screen h-screen fixed flex justify-center items-center">

                <div class="relative w-[1218px] h-[920px] bg-[#0C62A0] rounded-xl flex flex-col justify-center" >
                    <div className="cursor-pointer">
                        <svg className="absolute top-4 right-4" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <rect y="5.0769" width="7.17986" height="55.0456" transform="rotate(-45 0 5.0769)" fill="white" />
                            <rect width="7.17986" height="55.0456" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 44 5.0769)" fill="white" />
                        </svg>  
                    </div>

                    <div className="flex justify-center items-center my-4">
                        <div className="bg-slate-100 w-[1121px] h-[775px] overflow-y-scroll">
                            <div className=" p-2 flex justify-around">
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
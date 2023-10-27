import axios from "axios";
import { useEffect, useState } from "react";
import { setCookie } from 'cookies-next';
import { getCookie } from 'cookies-next';

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
                    <div className="w-[50%] z-50 h-screen bg-cover bg-center bg-[url('https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEXCWalrqvRPN%2FZUFnTX4Tq2RZN2E4V3G%2FMMZ1EKpwDPQulEY4Zr%2BLRaAhDnkvRJ40A4k1KajFXNtJotIh5DXNn2yODDa5ZkOlNNrn1%2BA06PYee7iMTkoplDentJuA85I6BVamvgF9%2BL4nyArnscy%2BeI9nEUcfrS5No45Cv5cm%2FHoOihScR8%2FrseAAAGl%2BHOn%2BG8Q8XLvH66%2Bvq%2BtVrqFP66Z%2BnbP%2Fie9PZLS2M1FqkNJew5LR3qmAVoUIH8vIcBxXFnfyN6VSN%2FZxJKBNcTck6E6jUpIv1MLajZkTvb9OkINEtzW4NzgOlnIxW7QP49A3GFJxcDd6bIu5a%2FvMOkw%2BfUFR2cXt6FzQJc2jckhQ9I5M%2BvdJCPtCYCRRWB3TD8%2BNGKV4BJ5FIh41rg4Zrdd7JT2VVShkYH7JV0rVOzVh4Q8pLufE0CkrLhz6Qm6S6lanefDtznUF1z8ldONdgZMDe%2BUnsadHbG%2BnseuhQKN7Vff%2F9menYvxrVN1mGMsd830MGyq1ao3ke6jgYFAqs5yhkeuFyedMyYMLCCHK8deXbqq%2By0goKXH7TbcPuUzK0M&sz=w1920-h931')]">
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
                    <div className="w-[55%] absolute right-0 h-screen bg-cover bg-center bg-[url('https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEX53YDLG9OoZnw5DIBn1IM2l2xMNfbzM50yiKuxcSMB87f2iT7wnfJ3l5VE25h0CzfGxCEU2fIhXzs9xMEaucSaMeK2QbxxXoz8q2xnlmS4aHL3nbZTCVl5GdqNlSNPKwB0xmp%2B1qtqvfTZWH4hQ3Q2Pf3zAKJf4SBqSNMuYf0tiHpX1lqN8uh6IDfCEub97DHH1uPLufeQoKZMtjmfCZWG8x0L2zFuoH0XVXx4LPpwKwXjqYO5dYyKdQGMQu9yckcQ1VfbWCOHmwrazSFbtew%2FpEwnFRyL5fo6h47boEb0aZL4Gex4i6omNmR1S6lmrARWaxsJiFFoNb%2Bn2l%2Fm9wwciGZbiLcrleL0nVhFTgf8eyDbERf%2B%2BM%2BpKMv%2FwHfb3ujMAUX77DwGI6w%2FXLgsW75NCkMtwEk26RZTmfbY43HZ9nTPz0beddxbK8bqOMMT4LmHzXz9wwEw6sTW6%2BHkpaTpc7RnVVHolfiqUCapifg2R%2FatRmZ7qst9JVxLhnq%2Bw4oGCSMfF7o%2BTY%2BliQ%2FYL0BM6siqWGfc3POczqnaNZISdB5jD2iG%2BA2aQxP9zAnbvQ%3D%3D&sz=w1920-h931')]"
                        
                    ></div>
                </div>
            </div>
        </>
    );
}
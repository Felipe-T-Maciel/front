import Cookies from "js-cookie";
export default function HeaderComponent() {
    
    function sair(){
        Cookies.remove('usuario')
        window.location.href = "http://localhost:3000/login";
    }

    return (
        <div style={{backgroundColor: '#0C62A0',paddingLeft:'3%', display:'flex', alignItems:'center',
         justifyContent: "space-between", position:'absolute', width:'100%', height:'4rem', paddingRight:'3%'}}>
            <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                <div style={{backgroundColor: 'gray', width:'3rem', height:'3rem', borderRadius:'1000rem'}}></div>
                <p className="text-white text-xl">Nome da escola</p>
            </div>

            <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                {/* icone sininho */}
                <div style={{backgroundColor: 'gray', width:'3rem', height:'3rem', borderRadius:'1000rem'}}></div>
                <h1 style={{textDecoration:'underline', cursor:'pointer'}} onClick={() => sair()}>Sair</h1>
            </div>
        </div>
    );
}   
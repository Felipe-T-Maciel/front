import MyComponent from "../component/bdComponent"
import CriarTurma from "@/component/CriarTurmaComponent"
import RegistrarNota from "@/component/RegistrarNotaComponent"
import RegistrarProva from "@/component/RegistrarProvaComponent"
export default function Home() {
  return (
    <>
      <div className='p-10'>
        <CriarTurma/>
      </div>
    </>
  )
}

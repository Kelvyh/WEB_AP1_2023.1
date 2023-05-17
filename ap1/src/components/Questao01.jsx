import { useState, useEffect } from "react"

function Questao01X () {
    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
    ]
    // cria o estado para armazenar os novos valores de médias dos alunos
    const [apr, attApr] = useState([]);
    
    return (
        <div>
            <Questão01Y alunos={alunos} attApr={attApr}/>
            {/* executa um filter pra pegar só os alunos com a nota indicada em seguida usa um map para mapea-los
            imprimindo cada um an tela */}
            {apr
            .filter((x) => x <= 5.0)
            .map((x, i) => (
                <div key={i}>
                    {alunos[i].nome} - {x}
                </div>
            ))}
        </div>
    )
}

const Questão01Y = ({alunos, attApr}) => {
    const media = (alunos) => {
        // calcula a media dos alunos
        const medias = alunos.map((aluno) => {
            const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2
            return media
        })
        return medias
    }
    // devolve as medias dos alunos no componente pai
    useEffect(() => {
        attApr(() => media(alunos))
    }, [])
}

export default Questao01X
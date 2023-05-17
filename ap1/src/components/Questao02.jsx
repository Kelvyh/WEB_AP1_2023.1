import { useState } from "react"

const Questao02X = () => {
  // criando estado com a direção inicial do componente
  const [direc, setDirec] = useState(true)

  return (
    <div>
      {/* botao para alterar a direção da imagem */}
      <button onClick={() => setDirec((x) => !x)}>GIRA</button>
      {/* se direc true, mostra o pikachu de frente */}
      {direc ? (
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"></img>
      ) : (
        // senão, mostra o pikachu de costas
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"></img>
      )}
    </div>
  )
}

export default Questao02X

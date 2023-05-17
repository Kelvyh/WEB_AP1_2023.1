import { useState } from 'react'

const Questao03 = () => {
    // cria o estado para armazenar a cidade com menor população
    const [min, setMin] = useState([])
    // cria o estado para armazenar a cidade com maior população
    const [max, setMax] = useState([])

    // requisição fetch parar pegar os dados
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
    .then(
        (response) => {
            return response.json()
        })
    .then(
        (data) => {
        let min = data[0]
        let max = data[0]
        
        // percorre todos os dados recebidos
        data.forEach(city => {
            // compara a população da cidade atual com a da menor já vista
            if(city.population < min.population)
                min = city
            // compara a população da cidade atual com a da maior já vista
            if(city.population > max.population)
                max = city
        })
        
        // atualiza os valores de menor e maior população
        setMax(max)
        setMin(min)
        }
    )

    return (
    <div>
        <h1>Menor População</h1>
        <div>Capital: {min.capital}</div>
        <div>População: {min.population}</div>
        <h1>Maior População</h1>
        <div>Capital: {max.capital}</div>
        <div>População: {max.population}</div>
    </div>
    )
}

export default Questao03
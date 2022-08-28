import {useState, useEffect} from 'react';
import { carregaProdutores } from '../servicos/carregaDados';

//Um hook retorna dois valores. Um estado, e uma função que altera o estado.
export default function useProdutores(){
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

    return [titulo, lista]
}
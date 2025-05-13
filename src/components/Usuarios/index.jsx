function Usuario(props) {
    let mensagem = ''

    if (props.idade < 18) {
        mensagem = 'Menor de idade';
    } else {
        mensagem = 'Maior de idade';
   }    

    return (
        <dev>
     <h2>Nome: {props.nome}</h2>
     <h2>Cidade: {props.cidade}</h2>
     <h2>Idade: {props.idade}</h2> 
     <h3 style={{ color: props.idade < 18 ? 'red' : 'green', fontWeight: 'bold' }}>{mensagem}</h3>
     </dev>
    );
}


export default Usuario;
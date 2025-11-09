
const Link = ({
    texto,
    referencia,
    tamanhoFonte,
    pesoFonte,
    caixaFonte,
    espaçamentoFonte,
    sobreFonte,
    transição
}) => {

    const style = `
    ${tamanhoFonte}
    ${pesoFonte}
    ${caixaFonte}
    ${espaçamentoFonte} 
    ${sobreFonte}
    ${transição}    
 `;

    return <a className={style} href={referencia}>{texto}</a>;
}

export default Link;  

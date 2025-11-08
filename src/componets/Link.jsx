
const Link = ({
    texto,
    referencia,
    tamanhoFonte,
    pesoFonte,
    caixaFonte,
    espaçamentoFonte,
    sobreFonte,

}) => {

    const style = `
    ${tamanhoFonte}
    ${pesoFonte}
    ${caixaFonte}
    ${espaçamentoFonte} 
    ${sobreFonte}
    
    
    `;
    return (
        <a className={style}  href={referencia}>{texto}</a>
    );

}
export default Link;  
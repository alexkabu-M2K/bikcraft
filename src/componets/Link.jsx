
const Link = ({
    texto,
    referencia,
    tamanhoFonte,
    pesoFonte,
    corFonte,
    caixaFonte,
    espaçamentoFonte,

}) => {

    const style = `
    ${tamanhoFonte}
    ${pesoFonte}
    ${corFonte}
    ${caixaFonte}
    ${espaçamentoFonte} 
    
    `;
    return (
        <a className={style}  href={referencia}>{texto}</a>
    );

}
export default Link;  
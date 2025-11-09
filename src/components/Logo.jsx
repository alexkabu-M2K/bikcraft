
const Logo = ({
    text,
    tamanhoFonte,
    pesoFonte,
    caixaFonte,
    espaçamentoFonte,
}) => {

    const style = `
        ${tamanhoFonte}
        ${pesoFonte}
        ${caixaFonte}
        ${espaçamentoFonte}     
     `;

    return <span className={style}>{texto}</span>;
}

export default Logo;

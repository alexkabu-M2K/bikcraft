
const Logo = ({
    text,
    tamanhoFonte,
    pesoFonte,
    caixaFonte,
    espaçamentofonte,



}) => {

    const style = `
        ${tamanhoFonte}
        ${pesoFonte}
        ${caixaFonte}
        ${espaçamentofonte}

        
        
        
        
        `;




    return <span>{text}</span>;
}

export default Logo;


const Header = ({
    children,
    corFundo,
    corFonte,
    altura,
    preenchimento,
    modeloCaixa,
    justicarConteudo,
    alinharItens,

}) => {

    const style = `
        ${corFundo} 
        ${corFonte} 
        ${altura}
        ${preenchimento}
        ${modeloCaixa}
        ${justicarConteudo}
        ${alinharItens}  
 `;

    return <header className={style}>{children}</header>
};

export default Header;

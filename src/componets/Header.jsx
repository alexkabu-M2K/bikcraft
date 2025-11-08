
const Header = ({
    children,
    corFundo,
    corFonte,
    altura,
    preenchimento,


}) => {

    const style = `
                    ${corFundo} 
                    ${corFonte} 
                    ${altura}
                    ${preenchimento}
                    
                    
                    
                    
                `;




    return <header className={style}>{children}</header>
};

export default Header;

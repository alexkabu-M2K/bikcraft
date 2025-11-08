const List = ({
    children,
    modeloCaixa,
    distanciamento,
    texto,

}) => {

    const style = `
    ${modeloCaixa}
    ${distanciamento}
    ${texto}
    
    
    `;
    return (
        <ul className={style}>{children}</ul>
    );

}
export default List;  
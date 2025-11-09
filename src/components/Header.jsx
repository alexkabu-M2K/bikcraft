
const Header = ({
  children,
  corFundo,
  corFonte,
  altura,
  preenchimento,
  modeloCaixa,
  justificacao,
  alinhamento
  
}) => {

  const style = `
    ${corFundo}
    ${corFonte}
    ${altura}
    ${preenchimento}
    ${modeloCaixa}
    ${justificacao}
    ${alinhamento}
  `;

  return <header className={style}>{children}</header>;
}

export default Header;

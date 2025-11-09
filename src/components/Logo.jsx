
const Logo = ({
  texto,
  tamanhoFonte,
  pesoFonte,
  caixaFonte,
  espacamentoFonte
}) => {

  const style = `
    ${tamanhoFonte}
    ${pesoFonte}
    ${caixaFonte}
    ${espacamentoFonte}
  `;

  return <span className={style}>{texto}</span>;
}

export default Logo;

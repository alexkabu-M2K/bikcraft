
import Header from './Header.jsx';
import Logo from './Logo.jsx';

const App = () => {
  return (
    <>
      <Header
        corFundo='bg-black'
        corFonte='text-white'
        altura='h-[6rem]'
        preenchimento='px-50'


      >
        <Logo
          text='BikCraft - Bike Store'
          tamanhoFonte='text-5xl'
          corFonte='text-white'
          pesoFonte='font-bold'
          caixaFonte='uppercase'
          espaçamentoFonte='tracking-[0.5rem]'

          
        />
      </Header>
    </>
  );
}

export default App

import Header from './Header.jsx';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';  
import List from './List.jsx';
import Item from './Item.jsx';
import Link from './Link.jsx';


const App = () => {
  return (
    <>
      <Header
        corFundo='bg-black'
        corFonte='text-white'
        altura='h-[6rem]'
        preenchimento='px-50'
        modeloCaixa='flex'
        justificarConteudo='justify-between'
        alinharItens='items-center'


      >
        <Logo
          text='BikCraft - Bike Store'
          tamanhoFonte='text-5xl'
          corFonte='text-white'
          pesoFonte='font-bold'
          caixaFonte='uppercase'
          espaçamentoFonte='tracking-[0.5rem]'
        />
        <Navigation>
          <List>
            <Item>
              <Link
                texto='Modelos'
                referencia='#'
                tamanhoFonte='text-lg'
                pesoFonte='font-semibold'
                caixaFonte='uppercase'
                corFonte='text-white'
                espaçamentoFonte='mx-4'
              
              >
                

                </Link>
            </Item>
          </List>
        </Navigation>

       



      </Header>
    </>
  );
}

export default App

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
        alinharItens='items-bottom'


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
          <List
            modeloCaixa='flex'
            distanciamento='gap-10'>
            <Item>
              <Link
                texto='Modelos'
                referencia='#'
                tamanhoFonte='text-lg'
                pesoFonte='font-semibold'
                caixaFonte='uppercase'
                espaçamentoFonte='tracking-[0.15rem]'
                sobreFonte='hover:text-yellow-500'
                transição='transition-colors duration-600'
              >
              </Link>

              <Link
                texto='Contato'
                referencia='#'
                tamanhoFonte='text-lg'
                pesoFonte='font-semibold'
                caixaFonte='uppercase'
                espaçamentoFonte='tracking-[0.15rem]'
                sobreFonte='hover:text-yellow-500'
                transição='transition-colors duration-[0.5s]'
              >
              </Link>

              <Link
                texto='Sobre'
                referencia='#'
                tamanhoFonte='text-lg'
                pesoFonte='font-semibold'
                caixaFonte='uppercase'
                espaçamentoFonte='tracking-[0.15rem]'
                sobreFonte='hover:text-yellow-500'
                transição='transition-colors duration-[1s]'
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
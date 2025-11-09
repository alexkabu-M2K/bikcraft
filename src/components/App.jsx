
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
        justificacao='justify-between'
        alinhamento='items-center'
      >
        <Logo
          texto='bikcraft - Eletric Bike Store'
          tamanhoFonte='text-4xl'
          pesoFonte='font-black'
          caixaFonte='uppercase'
          espacamentoFonte='tracking-[0.25rem]'
        />
        <Navigation>
          <List
            modeloCaixa='flex'
            distanciamento='gap-10'
          >
            <Item>
              <Link
                texto='Models'
                referencia='#'
                tamanhoFonte='text-lg'
                pesoFonte='font-bold'
                caixaFonte='uppercase'
                espacamentoFonte='tracking-[0.15rem]'
                sobreFonte='hover:text-yellow-500'
                transicao='duration-200'
              />
            </Item>
            <Item>
              <Link
                texto='Contact'
                referencia='#'
                tamanhoFonte='text-lg'
                pesoFonte='font-bold'
                caixaFonte='uppercase'
                espacamentoFonte='tracking-[0.15rem]'
                sobreFonte='hover:text-yellow-500'
                transicao='duration-200'
              />
            </Item>
            <Item>
              <Link
                texto='About'
                referencia='#'
                tamanhoFonte='text-lg'
                pesoFonte='font-bold'
                caixaFonte='uppercase'
                espacamentoFonte='tracking-[0.15rem]'
                sobreFonte='hover:text-yellow-500'
                transicao='duration-200'
              />
            </Item>
          </List>
        </Navigation>
      </Header>
    </>
  );
}

export default App;

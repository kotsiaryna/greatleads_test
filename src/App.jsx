import Form from './components/Form/Form'
import List from './components/List/List'
import {Divider} from "@nextui-org/react";
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Header />
      <Divider className="my-4" />
      <div className='w-10/12 mx-auto'>
        <Menu />
        <Divider className="my-4" />
        <List />
        <Divider className="my-4" />
        <Form />
      </div>
      <Divider className="my-4" />
      <Footer /> 
    </>
  )
}

export default App

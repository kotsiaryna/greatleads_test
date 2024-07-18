import {Divider} from "@nextui-org/react";
import Form from './components/Form'
import List from './components/List'
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import ModalButton from './components/ModalButton';

function App() {
  return (
    <>
      <Header />
      <Divider className="my-4" />
      <div className='w-10/12 mx-auto'>
      <ModalButton/>
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

import './App.css'
import { useModalContext } from './components/Modal/context/ModalContext'
import { Modal } from './components/Modal/Modal'


function App() {
  const {setIsModalOpen} = useModalContext();


  return (
    <>
      {/* <ShoppingCard/> */}
      {/* <ContactList/> */}
      <Modal>
        <h1>hola</h1>
        <p>Modal</p>
      </Modal>

      <button onClick = {() => setIsModalOpen(true)}>OPEN DOUPEN MODAL</button>
    </>
  )
}

export default App

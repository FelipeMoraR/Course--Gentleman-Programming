import './App.css'
import {FormLayout, CardDefault, CardPurple} from './layouts/index'


function App() {

  const handleSubmit = () => {
    
  }
  

  return (
    <>
      <CardDefault>
        <h1>Card defauld</h1>
        <p>Body default</p>
      </CardDefault>

      <CardPurple>
        <h1>Card purple</h1>
        <p>Body purple</p>
      </CardPurple>

      <FormLayout>
        <FormLayout.Input label="Name" type="text" placeholder="Enter your name" required = {true} />
        <button type = "submit" onClick={handleSubmit}>Submit</button>
      </FormLayout>
    </>
  )
}

export default App

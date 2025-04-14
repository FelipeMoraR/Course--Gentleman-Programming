import './App.css'
import { useToggle, useCounter, useFetch, useForm, useDebounce, useLocalStorage } from './hooks'

function App() {
  const initialValue = false
  const initalCounter = 0
  const initialUrl = 'https://rickandmortyapi.com/api/character/2';

  type DataFetch = {
    id: number,
    name: string
  };

  type DataForm = {
    name: string;
    email: string;
  }

  type DataForm2 = {
    search: string;
  }


  const { value, toggle } = useToggle(initialValue);
  const { count, decrement, increment, reset } = useCounter(initalCounter);
  const { data, error, loading, fetchCall } = useFetch<DataFetch>(initialUrl);
  const {values, handleChange, reset: resetForm} = useForm<DataForm>({
    name: '',
    email: ''
  });

  const {values: valuesSearch, handleChange: handleChange2, reset: resetForm2} = useForm<DataForm2>({
    search: ''
  });

  //const debounce = useDebounce(valuesSearch.search, 1000);
  const {value: valueLocalStorage, setValue} = useLocalStorage({key: 'theme', initialValue: 'light'}); //If key doesnt exist ligth is the new variable in the localStorage
  

  console.log('re-render');

  return (
    <>
      <div style={{border: '1px solid red', borderRadius: '4px', marginBottom: '1rem', padding: '1rem'}}>
        <h1>Value = {String(value)}</h1>
        <button onClick={toggle}>Change value</button>
      </div>

      <div style={{border: '1px solid blue', borderRadius: '4px', marginBottom: '1rem', padding: '1rem'}}>
        <h1>Counter = {count}</h1>

        <button onClick={increment} >Increment</button>
        <button onClick={decrement} disabled={initalCounter === count}>Decrement</button>
        <button onClick={reset} disabled={initalCounter === count}>Reset</button>
      </div>

      <div style={{border: '1px solid purple', borderRadius: '4px', marginBottom: '1rem', padding: '1rem'}}>
        
        {
          loading && (<h1>Loading...</h1>)
        }

        {
          !loading && error && (<h1>Error: {error.message}</h1>)
        }

        {
          !loading && !error && data && (<h3>{data.id}: {data.name}</h3>)  
        }
        
        <button onClick={() => fetchCall()} disabled = {loading}>Call morty</button>

      </div>
      
      <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
          <label htmlFor="name">Name</label>
          <input type = "text" name = "name" id = "name" value = {values.name} onChange = {handleChange}/>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
          <label htmlFor="email">Email</label>
          <input type = "text" name = "email" id = "email" value = {values.email} onChange = {handleChange}/>
        </div>
        
        <button onClick={resetForm} type='button'>Rest Values</button>
      </form>


      
      <div style={{display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
          <label htmlFor="email">Search</label>
          <input type = "text" name = "search" id = "search" value = {valuesSearch.search} onChange = {handleChange2}/>
      </div>
     

      <div>
        <h1>{valueLocalStorage}</h1>
        <button onClick={() => {setValue('dark')}}>Dark</button>
        <button onClick={() => {setValue('light')}}>Light</button>
      </div>
    </>
  )
}

export default App;



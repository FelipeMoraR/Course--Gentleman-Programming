import './App.css'
import { getCharacter } from './services/api.service';
import { Character } from './models/character.mode';
import { useApi } from './hooks/UseApi';


function App() {
  const {data, error, fetch, loading} = useApi<Character>(getCharacter(1), { autoFetch: false }); //This is an instanse that create it own values.
  // const {data: data2, error: error2, fetch: fetch2, loading: loading2} = useApi<Character>(getCharacter(2)); //This is other instanse and have other values, not the same as the useApi above

 

  if(error) return <h1>{error.message}</h1>

  return (
    <>
      <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
        {
          loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {JSON.stringify(data)}
              <button onClick={fetch}>fetch</button>
            </>
          )
        }
      </div>

      {/* <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
        {
          loading2 ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {JSON.stringify(data2)}
              <button onClick={fetch2}>fetch</button>
            </>
          )
        }
      </div> */}
    </>
  )
}

export default App

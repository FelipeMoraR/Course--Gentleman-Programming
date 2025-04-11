import './App.css'
import { getCharacter, getCharacter3 } from './services/api.service';
import { Character } from './models/character.mode';
import { useApi } from './hooks/UseApi';



function App() {
  const {data, error, fetch, loading} = useApi<Character, number>(getCharacter, { autoFetch: true, params: 1}); //This is an instanse that create it own values.
  // const {data: data2, error: error2, fetch: fetch2, loading: loading2} = useApi<Character, number>(getCharacter); //This is other instanse and have other values, not the same as the useApi above
  const { data:data2 , error:error2 , fetch:fetch2 , loading:loading2  } = useApi<Character, null>(getCharacter3);
 

  if(error) return <h1>{error.message}</h1>

  if(error2) return <h1>{error2.message}</h1>

  return (
    <>
      <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
        {
          loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {JSON.stringify(data)}
              <button onClick={() => fetch(412)}>fetch</button>
            </>
          )
        }
      </div>

      <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
        {
          loading2 ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {JSON.stringify(data2)}
              <button onClick={() => fetch2(null)}>fetch</button>
            </>
          )
        }
      </div>
    </>
  )
}

export default App

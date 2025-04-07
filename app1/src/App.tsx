import './App.css'
import { useFetch } from './hooks/useFetch';

const url = 'https://jsonplaceholder.typicode.com/posts/1';
const url2 = 'https://jsonplaceholder.typicode.com/posts/2';

interface Data {
  userId: number,
  id: number,
  title: string,
  body: string
}

function App() {
  // const [count, setCount] = useState(0)
  const { data, loading, error } = useFetch<Data>(url);
  const { data:data2, loading: loading2, error: error2 } = useFetch<{id:number}>(url2);
  // const handlerClick = () => {
  //   setCount(count + 1); //Being asynchronous this will be like this all the time 0+1 due to batching, this saves all the changes and when the logic finishes it will be executed
  //   setCount(count + 1); // 0 + 1
  //   setCount(count + 1); // 0 + 1
  //   setCount(count + 1); // 0 + 1
  //   setCount(count + 1); // 0 + 1

  //   setCount((latest) => latest + 1); // But if you want to change the latest value you have to use a parameter to save this last value, so in this case is 0 + 1
  //   setCount((latest) => latest + 1); // 1 + 1
  //   setCount((latest) => latest + 1); // 2 + 1
  //   setCount((latest) => latest + 1); // 3 + 1
  // }

  console.log('rendering...', loading);

  if(loading) return <h1>Loading...</h1>

  if(error) return <h1>{error}</h1>

  return <h1>{data?.id} {data2?.id}</h1>
}

export default App

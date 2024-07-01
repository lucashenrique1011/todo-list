import './App.css'
import Item from './todo'

function App() {

  const itemDaLista = ["pão", "presunto", "musarela", "ovo"]

  return (
    <>
      <h1>lista de itens</h1>
      <ul>
        {itemDaLista.map((e:any)=>{return <Item item={e}/>} )}
      </ul>
    </>
  )
}

export default App

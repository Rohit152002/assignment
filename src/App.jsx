import './App.css'
import Header from './header'
import Product_list from './Product_list'
function App() {

  function clickEvent(){
    console.log('clicked');
  }
  return (
   <div>
    <Header/>
    <Product_list/>
    <button onClick={clickEvent}>Click</button>
   </div>
  )
}

export default App

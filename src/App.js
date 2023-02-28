import React ,{useState , useEffect}  from "react";
import Commerce from "./components/Commerce";
import Header from "./components/Header";

let dummpy_Commerce=[];

const App = () => {

  const [commerce, setCommerce] = useState(dummpy_Commerce);

  const fetchData = () => {
  fetch('https://dummyjson.com/products').then(
      response => {
          return response.json();
      }
  ).then(
      data => {
          setCommerce(data.products);
      }
  );
};

useEffect(()=>{
  fetchData();
},[ ]);



  return (
    <div className="App">
          <Header/>
          <Commerce item={commerce}/>
    </div>
  );
}

export default App;

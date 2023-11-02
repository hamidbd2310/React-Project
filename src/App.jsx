import ItemOpjet from "./component/ItemOpjet";


const App = () => {
  const ItemOpj={
    name:"Abdul Hamid",
    age:32,
    city:"Chuadanga" ,
  }
  return (
    <div> 
      <ItemOpjet item={ItemOpj}/>

 
    </div>
  );
};

export default App;
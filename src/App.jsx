
import PropsFuntionPass1 from "./component/PropsFuntionPass1";

const App = () => {

  const BtnClick=()=>{
    alert("Say Hello");
  }
  return (
    <div> 
      
<PropsFuntionPass1 childBtnClick={BtnClick}/>.
    </div>
  );
};

export default App;
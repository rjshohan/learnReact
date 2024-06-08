import "./app.css";
import PersonList from "./comp2/PersonList";
import { personList } from "./utils";
const App = () => {
  return (
    <div className="app" >
     <PersonList list={personList} name="akash"/>
    </div>
  );
};
export default App;
//create react app
//folder structure
//jsx
// components --- class , functional  : Done (practice)
//props--  props destructure  :Done (practice)
//state,setState --- class components : Done
//event handling--(onClick,onMouse)  :done(practice)
//conditional rendering :Done
//list rending, key


// todo
// 1. Map Method
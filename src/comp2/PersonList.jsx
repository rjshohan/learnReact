import { nedSquadList } from "../utils";
import Person from "./Person";

// props

// const PersonList =(props)=>{
//     return <h3>{props.name}{props.list}</h3>
// }

// const PersonList =(props)=>{
//     const {name,list} = props
//     return <h3>{name}</h3>
// }

// const PersonList =({name,list})=>{
//     return <h3>{name}</h3>
// }





const PersonList = ({ list }) => {
  console.log({ list });
  return (
    <div>
      <h4>Person List</h4>

      <div className="" style={{display:"flex"}}>
      <ul style={{marginBottom:"100px"}}>
        {/* {list.map((person, index) => {
          return <Person key={index} person={person} index ={index}/>;
        })} */}

        {list.map((person, index) => (
          <Person key={person.id} person={person} index ={index}/>
        ))}
      </ul>
      <ul>
        {/* {nedSquadList.map((person, index) => {
          return <Person key={index} person={person} index ={index}/>;
        })} */}

        {/* {list.map((person, index) => (
          <li>{index+1} . {person.name}</li>
        ))} */}
      </ul>
      </div>
    </div>
  );
};
export default PersonList;

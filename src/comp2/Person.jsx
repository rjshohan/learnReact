
const Person = ({person,index}) => {
    console.log(person)
  return (
    <li className="single_person">
        <div>
            <h3>Name : {person.name}</h3>
            <p>Desination: {person.designation}</p>
        </div>
    </li>
  )
}

export default Person
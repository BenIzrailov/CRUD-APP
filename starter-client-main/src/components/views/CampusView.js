const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>      
      <h1>Name: {campus.name}</h1>
      <h2>Description: {campus.description}</h2>
      <img src={campus.imgurl} height = '150' width = '250'/>
      <h3>Address: {campus.address}</h3>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>{name}</li>
        );
      })}
      </ul>
    </div>
  );

};

export default CampusView;
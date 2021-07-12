const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <img src={student.imgurl} height = '150' width = '250'/>
      <h3>{student.campus.name}</h3>
      <h2>Email:{student.firstname + "" + student.lastname}@{student.campus.name}.com</h2>
      <h3>GPA:{student.gpa}</h3>
    </div>
  );

};

export default StudentView;
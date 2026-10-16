import Student from "./Student";

function Child(props) {
  return (
    <>
    <Student student={props.student} />
    </>
  )
}

export default Child;
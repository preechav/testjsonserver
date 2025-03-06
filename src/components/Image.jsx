export default function Image(props){
  console.log(props)
  return(
    <>
      <img src={props.imageUrl} width="100px"/>
    </>
  )
}
export default function Menu({onSelectVideo,VideoValues}){
  return (
  <>
  <form onSubmit={onSelectVideo}>
    {VideoValues.map((value,i)=>(
      <div>
        <input key= {i} type="radio" name="src" value={value} id={i}/>
        {value}
      </div>
    ))}
  </form>
  </>
  )
}
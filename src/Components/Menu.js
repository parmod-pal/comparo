export default function Menu({onSelectVideo,VideoValues}){
  return (
  <>
  <form onSubmit={(event) => onSelectVideo(event.target.value)}>
    {VideoValues.map((value,i)=>(
      <div className="video-inputs">
        <input key= {i} type="radio" name="src" value={value} id={i}/>
        {value}
      </div>
    ))}
  </form>
  </>
  )
}
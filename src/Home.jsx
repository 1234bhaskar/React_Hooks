//useContext
   
import { useContext } from "react"
import { Context } from "."
   
const Row =()=>{
    const data =useContext(Context)
    console.log(data);
    return (
        <div>
            {data}
        </div>
    )
}
const Home = () => {
  return (
    <div>
        <Row/>
    </div>
  )
}

export default Home
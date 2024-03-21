import Done from "./pages/Done"
import Inprogress from "./pages/Inprogress"
import Review from "./pages/Review"
import Todo from "./pages/Todo"
import './Cards.css'

function Cards() {
 
  return (
    <div className="main">
        <div className="card" >
        <Todo/>
        <Inprogress/>
        <Review/>
        <Done/>   
    </div>

    </div>

  )
}

export default Cards




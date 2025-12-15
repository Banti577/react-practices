import { Link } from "react-router-dom";

const Home =() =>{
    return(
<div className="Home">
    <Link to="/controlled-component"><button>Controll</button></Link>
    <Link to="/uncontrolled-component"><button>UnControll</button></Link>

</div>
    )
}
export default Home;
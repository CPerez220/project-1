import Puppies from "./images/puppies.png"
import "./Search.css"

const Search = () => {
  return(
    <>
    <section className="container">
      <img src={Puppies}></img>
      <div className="search">
        <h2 className="find">Find Your Next Friend</h2>
        <input type="text" placeholder="Search"></input>
      </div>
    </section>
    </>
  )
}

export default Search
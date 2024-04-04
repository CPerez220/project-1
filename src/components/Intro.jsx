import { Link } from "react-router-dom"
const Intro = () => {
  return(
    <>
    <h1>Welcome to the "EL Refugio"</h1>
    <h2>Our Mission</h2>
    <h3>When "El Refugio' was founded, the main goal was to rescue the most dogs abandoned in the streets, and get them a secure home. In "El Refugio", dogs get a lot of care and tons of love from part of our excellent staff. All this dogs had different goal like be adopted by families or be train to compete in differents events. We care a lot about our dogs, so before a family adopt one, they have to prove that they have the necessary things to take care of the dog. We dont want that our dogs go back to the streets. If you want to adopt a dog, see our
      <Link to="./List">Available Dogs List</Link>
      Otherwise, if you have a dog that you want that "El Refugio" take care, fill
      <Link to="./List">This Form</Link> </h3>
    </>
  )
}

export default Intro
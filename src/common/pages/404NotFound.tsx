import { Link } from "react-router-dom"

export function NotFound404(): JSX.Element {
  return (
    <main>
      <h1>Sorry, this page could not be found!</h1>
      <Link to={"/"}>Return Home</Link>
      {/* Report a bug */}
    </main>
  )
}

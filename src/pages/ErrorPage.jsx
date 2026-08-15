import NavBar from "../components/NavBar"

// Shown when the URL does not match any defined route.
function ErrorPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
        <p>That page does not exist. Use the navigation links to continue.</p>
      </main>
    </>
  )
}

export default ErrorPage

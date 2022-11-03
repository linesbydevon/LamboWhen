export default function APIError(props){
  return(
    <main>
      <h2>Sorry about this</h2>
      <p>This site is having a problem connecting to the necessary data held in the Coinranking API.</p>
      <p>Please come back and try again. In the meantime please submit the following error message to the developers:</p>
      <p><code>{props.APIError}</code></p>
    </main>
  )
}
import { Sparklines, SparklinesLine } from "react-sparklines";

export default function APIError(props){
  return(
    <div className="mainWrapper">
    <main>
      <div className="sectionWrapper APIError isDown">
      <h2><span className="indicator"></span>We're down bad</h2>
      <div className="sparkBox">
      <Sparklines data={[100,90,95,80,70,88, 75, 85, 72, 66, 53, 59, 61, 40, 48, 33, 36, 26, 22, 10, 4, 5, 3, 5, 3, 5, 3, 5 ]}>
                <SparklinesLine
                  color="red"
                />
              </Sparklines>
              </div>
      <div className="message">
        <div>
      <h3>Sorry about this</h3>
      <p>This site is having a problem connecting to the necessary data held in the Coinranking API.</p>
      <p>Please come back and try again. In the meantime please submit the following error message to the developers:</p>
      <p><code>{props.APIError}</code></p>
      </div>
      </div>
      </div>
    </main>
    </div>
  )
}
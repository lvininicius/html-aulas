import TextColor from "./Components/TextColor"
import TextPerson from "./Components/TextPerson"
import TextSize from "./Components/TextSize"
import TextBackground from "./Components/TextBackground"
import Imagens from "./Components/imagens"

function App() {
  return (
    <>
      <div className='container'>
        <TextSize/>
        <TextPerson/>
        <TextColor/>
        <TextBackground/>
        <Imagens/>
      </div>
    </>
  )
}

export default App

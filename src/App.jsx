import {Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <>

    <Routes>
      <Route path="/" element={<BookList/>}/>
    </Routes>
    </>
  )
}

export default App

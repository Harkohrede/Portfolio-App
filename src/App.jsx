import RepositoriesList from './RepositoriesList'
import { ErrorBoundary } from 'react-error-boundary'
import { Routes, Route,  } from 'react-router-dom'
import Details from './details'
import ErrorPage from './404'
import Fallback from './Fallback'
function App(){
return(
  <ErrorBoundary fallback={Fallback} onReset={()=>{}}>
    <Routes>
        <Route exact path="/" element={ <RepositoriesList/>} />
        <Route path="/repository/:id" element={<Details/>} />
        <Route path="/repository/*" element={<ErrorPage/>} />
        <Route path ='*' element={<ErrorPage/>}/>
    </Routes>
  </ErrorBoundary>
)
}

export default App

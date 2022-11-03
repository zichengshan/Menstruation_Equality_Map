import App from '../App'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Report from '../pages/Report'
const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
            </Route>
            <Route path = '/report' element = {<Report />}></Route>

        </Routes>
    </Router>
)
export default BaseRouter
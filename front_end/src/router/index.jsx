import App from '../App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Report from '../pages/Report'
import Qrcode from '../pages/Qrcode'
import QrcodeGeneration from '../pages/QrcodeGeneration'
const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
            </Route>
            <Route path='/report' element={<Report />}></Route>
            <Route path='/qrcode' element={<Qrcode />}></Route>
            <Route path='/qrcode/qrcodegeneration' element={<QrcodeGeneration />}></Route>
        </Routes>
    </Router>
)
export default BaseRouter
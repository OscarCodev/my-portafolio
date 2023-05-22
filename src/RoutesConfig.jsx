import {Route, Routes} from 'react-router-dom'
import HomeScreen from './components/pages/HomeScreen';
import TecnologiesScreen from './components/pages/TecnologiesScreen';
import ExperienceScreen from './components/pages/ExperienceScreen';

const RoutesConfig = () => (
    <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='/tecnologias'element={<TecnologiesScreen />}/>
        <Route path='/experiencia' element={<ExperienceScreen />}/>
        <Route path='*'element={<div>404</div>}/>
    </Routes>
)

export default RoutesConfig;
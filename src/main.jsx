import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Clientes from './components/Clientes'
import Productos from './components/Productos'
import Facturas from './components/Facturas'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
	<Routes>
		<Route path="/" element={<Home />} >
			<Route path="/facturas" element={<Facturas />} />
			<Route path="/clientes" element={<Clientes />} />
			<Route path="/productos" element={<Productos />} />
		</Route>
	</Routes>
 </BrowserRouter>
)

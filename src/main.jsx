import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/facturas" element={<Facturas />} />
		<Route path="/clientes" element={<Clientes />} />
		<Route path="/productos" element={<Productos />} />
	</Routes>
 </BrowserRouter>
)

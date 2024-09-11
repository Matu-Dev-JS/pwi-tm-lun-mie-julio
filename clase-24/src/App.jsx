import React from 'react'

function App() {

	/* 
	PARA ENTENDERNOS DEBEN SABER:
	Sintaxis JSX
	Importar y exportar
	Components
	Props
	*/

	/* 
	HOY VEMOS:
	-renderizado condicional
	-eventos
	-estados
	*/

	//OPERADOR TERNARIO
	/* Si navegador esta abierto, entonces quiero que se muestren los links */
	/* Sino quiero que no se muestre nada */
	let navegador_abierto = false
	
	 

	/* let navegador_abierto = false
	let navegador_desplegado = null
	if(navegador_abierto){
		navegador_desplegado = <nav>
			<a href="">Link 1</a>
			<a>Link 2</a>
			<a>Link 3</a>
		</nav>
	} */

	/* 
	Si el usuario es premium vamos a mostrar un span en pagina que diga PEMIUM sino solo mostrar FREE TRIAL 
	*/

	let usuarioRol = 'PREMIUM'

	let nombreYaGuardado = ''
	let nombre = nombreYaGuardado ? nombreYaGuardado : 'Guest'

	/* 
	Si esta cargando debe haber un h2 cargando
	Si dejo de cargar
		-Si esta todo bien mostrare un div que diga contenido pagina
		-Si esta todo mal mostrare un div que diga error
	*/
	let cargando = false
	let status = 'ERROR' /* puede ser PENDIENTE, FINALIZADO, ERROR */

	let compartiendo = null 
	let cargando_vista = null
	let status_vista_compartida = null

	return (
		<div>
			{
				cargando
				? <h2>Cargando...</h2>
				: (
					status === 'FINALIZADO'
					? <div>Todo correcto</div>
					: <div>Error</div>
				)
			}


			{
				navegador_abierto 
				? <nav>
					<a href="">Link 1</a>
					<a>Link 2</a>
					<a>Link 3</a>
				</nav>
				: <h1>Cerrado</h1>
			}

			{
				usuarioRol === 'PREMIUM'
				? <span className='premium-card'>PREMIUM</span>
				: <a className='free-card'>Free Trial</a>
			}

			<span>
          		{usuarioRol === 'PREMIUM' ? 'Premium' : 'Free Trial'}
        	</span>  
			<h1>{nombre}</h1>

			<div>
				{
					!compartiendo 
					? <div>Nadie comparte</div>
					: (
						cargando_vista 
						? <LoadingView nombre={compartiendo}/>
						: (
							status_vista_compartida 
							? <h2>Vista compartida {compartiendo}</h2>
							: <h2>Error al compartir vista {compartiendo}</h2>
						)
					)
				}
    		</div>
 		 
		</div>
	)
}

const LoadingView = (props) => {
	return (
		<div>
			<img src="" alt="" />
			<h2>Cargando vista de {props.nombre}</h2>
		</div>
	)
}

export default App



import React, {useState} from 'react'

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

	let compartiendo = 'pepe'
	let cargando_vista = true
	let status_vista_compartida = null

	let estaRegistrado = false
	let inicioSesion = false


	/* 
	AND:
	Si el primer valor es true devuelve el segundo
	Si el primer valor es false devuelve el primero
	*/
	/* 
	useState es una funcion nativa de react 
	nos permite crear estados
	Recibe el valor inicial de mi estado
	Retorna un array con 2 elementos
		El primer elemento es el valor del estado
		El segundo elemento es la funcion de set
			La funcion de set es lo que usaremos para cambiar de valor mi estado
	*/
	const [contador, setContador] = useState(0)

	const incementar = () => {
		setContador(contador + 1)
		console.log(contador)

	}
	console.log('hola')
	return (
		<div>
			<button>-</button>
			<span>{contador}</span>
			<button onClick={incementar}>+</button>
			<hr />
			{
				!estaRegistrado && <a>Registrarse</a>
			}
			{
				inicioSesion && <button>Cerrar sesion</button>
			}

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
							: <ErrorView nombre={compartiendo} />
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

const ErrorView = (props) => {
	return (
		<>
			<h2>Error al compartir vista {props.nombre}</h2>
			<span>Internal Server Error</span>
		</>
	)
}

export default App



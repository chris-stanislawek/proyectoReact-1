import React,  { useState } from 'react';
import firebase from 'firebase';
import '../assets/styles/Components/Login.scss';
import logoG from '../assets/styles/img/logo-G.png';
import logoT from '../assets/styles/img/logo-T.png';



const Login = () => {

	function crearCuenta (email, password, nombres) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(response =>{ response.user.updateProfile({
				displayName: nombres
			})})
			.catch(error =>{ console.log(error) })
	}


	function handleAuth  () {
		
		const provider= new firebase.auth.GoogleAuthProvider();

		firebase.auth().signInWithPopup(provider)
			.then(response => console.log(`${response.user.email} ha iniciado sesion`))
			.catch(error => console.log(`Error ${error.code}: ${error.message}`))
	}

	
	
    return (
        
        <section className='login'>
		<section className='login__container'>
			<h2>Inicia sesión</h2>
			<form className='login__container--form'>
				<input className='input' type='email' id="email" placeholder='Correo' />
				<input className='input' type='password' id="password" placeholder='Contraseña'  />
				<button className='button' onClick={crearCuenta} >Iniciar sesión</button>
				<div className='login__container--remember-me'>
					<label>
						<input type='checkbox' id='cbox1' value='first_checkbox' />
						Recuérdame
					</label>
					<a href='/'>Olvidé mi contraseña</a>
				</div>
			</form>
			<section className='login__container--social-media'>
				<div>
					<img src={logoG}  onClick= {handleAuth} /> Inicia sesión con Google
				</div>
				<div>
					<img src={logoT} /> Inicia sesión con Twitter
				</div>
			</section>
			<p className='login__container--register'>
				No tienes ninguna cuenta <a href=''>Regístrate</a>
			</p>
		</section>

		<button className='button'> <a href="/"> Volver</a></button>
	</section>


    )
}

export default Login



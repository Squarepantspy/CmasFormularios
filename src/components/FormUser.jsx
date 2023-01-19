import React from 'react'
import { useState } from 'react'
import styles from '../styles/FormUser.module.css' //retroceder relative path con cantidad de puntos
const FormUser = (props) => {
    const [usuario, setUsuario]=useState({ //estado para reflejar los cambios en el formulario enlace bidireccional con el input
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        cpassword :''
    })
    const [requisito,setRequisito]=useState({ //estado para ver si se cumple o no cada campo
        firstName : null,
        lastName: null,
        email : null,
        password : null,
        cpassword : null,
    })
    const crearuser =(e)=>{
        e.preventDefault() //previene el comportamiento por defecto de recargar la pagina
        console.log("Bienvenido",usuario)
    }
    const validacion =(e)=>{  //funcion que pregunta el target id para volver a preguntar las validaciones
        
        if (e.target.id ==="nombre"){
            if (e.target.value.length > 1) {
                setRequisito({...requisito,firstName : true}) //caso que se cumpla la condicion estado true
            }else if (e.target.value.length ===0){ //bonificacion sensei caso que el campo este blanco estado null
                setRequisito({...requisito,firstName : null})
            }
            else setRequisito({...requisito,firstName : false})// caso que no se cumpla estado requisito false
        }
        else if (e.target.id ==="apellido"){
            if (e.target.value.length > 1) {
                setRequisito({...requisito,lastName : true})
            }else if (e.target.value.length ===0){
                setRequisito({...requisito,lastName : null})
            }
            else setRequisito({...requisito,lastName : false})
        }
        else if (e.target.id ==="email"){
            if (e.target.value.length > 1) {
                setRequisito({...requisito,email : true})
            }else if (e.target.value.length ===0){
                setRequisito({...requisito,email : null})
            }
            else setRequisito({...requisito,email : false})
        }
        else if (e.target.id ==="password"){
            if (e.target.value.length > 7) {
                setRequisito({...requisito,password : true})
            }else if (e.target.value.length ===0){
                setRequisito({...requisito,password : null})
            }
            else setRequisito({...requisito,password : false})
        }
        else if (e.target.id ==="cpassword"){
            if (e.target.value === usuario.password) { // pregunta si el valor del target de cpassword es igual al de password caso matchpass
                setRequisito({...requisito,cpassword : true},)
            }else if (e.target.value.length ===0){
                setRequisito({...requisito,cpassword : null})
            }
            else setRequisito({...requisito,cpassword : false})
        }
    }
  return (
    <div className={styles.container}>
        <h2>Formulario con validacion </h2>
        <form onSubmit={crearuser} className={styles.form}>
            <div className={styles.bloque}>
                <label htmlFor='nombre'>Nombre</label>  {/*actualiza el valor del estado y llama a un funcion para la validacion */}
                <input type="text" id="nombre" onChange={e=>setUsuario({...usuario,firstName: e.target.value},validacion(e))} value={usuario.firstName}/>
            </div>
            {
                requisito.firstName === false ?  <p>{'Nombre debe tener como minimo dos caracteres'}</p> : ''
            }
            <div className={styles.bloque}>
                <label htmlFor='apellido'>Apellido</label>
                <input type="text" id="apellido" onChange={e=>setUsuario({...usuario,lastName: e.target.value},validacion(e))} value={usuario.lastName}/>
            </div>
            {
                requisito.lastName === false ?  <p>{'Apellido debe tener como minimo dos caracteres'}</p> : ''
            }
            <div className={styles.bloque}>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" onChange={e=>setUsuario({...usuario,email: e.target.value},validacion(e))} value={usuario.email}/>
            </div>
            {
                requisito.email === false ?  <p>{'Email debe tener como minimo dos caracteres'}</p> : ''
            }
            <div className={styles.bloque}>
                <label htmlFor='password'>Password</label>
                <input type="password" id="password" onChange={e=>setUsuario({...usuario,password: e.target.value},validacion(e))} value={usuario.password}/>
            </div>
            {
                requisito.password === false ?  <p>{'Password debe tener como minimo 8 caracteres'}</p> : ''
            }
            <div className={styles.bloque}>
                <label htmlFor='cpassword'>Confirmar Password</label>
                <input type="password" id="cpassword" onChange={e=>setUsuario({...usuario,cpassword: e.target.value},validacion(e))} value={usuario.cpassword}/>
            </div>
            {
                requisito.cpassword === false ?  <p>{'Las contraseña debe coincidir'}</p> : ''
            }
            
            <input type="submit" value="Crear Usuario"/>
               
        </form>
    </div>
  )
}

export default FormUser
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createPost } from '../services/postServices'

export default function RegisterPost() {
    const { register, handleSubmit, reset } = useForm()

    const saveData = async (data) => {
        //pasamos como argumento los datos del formulario
        const response = await createPost(data)
        console.log(response)
        alert(`Registro exitoso: ${response.title} - ${response.body}`)
        reset()
    }

    return (
        <div>
            <h1>Crear nueva publicacion</h1>

            <form onSubmit={handleSubmit(saveData)}>
                <div>
                    <label>Titulo</label>
                    <input type="text" {...register("title")} />
                </div>
                <div>
                    <label>Descripcion</label>
                    <input type="text" {...register("body")} />
                </div>
                <div>
                    <label>Id Usuario</label>
                    <input type="number" {...register("userId")} />
                </div>
                <div>
                    <input type="submit" value='Guardar Datos' />
                </div>
            </form>
        </div>
    )
}

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { getPostById } from '../services/postServices'

export default function EditPost() {
    const { register, handleSubmit, reset } = useForm()

    const { postId } = useParams()
    console.log("Id de la publicacion: ", postId);
    

    const saveData = async (data) => {
        //pasamos como argumento los datos del formulario
        // const response = await createPost(data)
        // console.log(response)
        // alert(`Registro exitoso: ${response.title} - ${response.body}`)
        // reset()
    }

    useEffect(() => {
        const fetchPostId = async () => {
            const response = await getPostById(postId)
            console.log(response);
            
        }

        fetchPostId()
    }, [])

    return (
        <div>
            <h1>Editar Publicacion</h1>

            <form onSubmit={handleSubmit(saveData)}>
                <div>
                    <label>Id</label>
                    <input type="text" {...register("id")} />
                </div>
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

import React, { useEffect } from 'react'
import { set, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { getPostById } from '../services/postServices'
import { useState } from 'react'
import { updatePost } from '../services/postServices'

export default function EditPost() {
    const { register, handleSubmit, reset, formState: {errors} } = useForm()

    const [post, setPost] = useState([])


    const { postId } = useParams()
    console.log("Id de la publicacion: ", postId);


    const saveData = async (data) => {

        try {
            //constante
            const response = await updatePost(data, postId)

            console.log(response)
            //   await updatePost(data, postId)
            alert(`Publicacion actualizada: ${data.title} - ${data.body}`)

        } catch (error) {

            console.error("Error al actualizar la publicacion", error)
            alert("Error al actualizar la publicacion")
        }

    }





    useEffect(() => {
        const fetchPostId = async () => {

            const response = await getPostById(postId)
            reset(response)

            //setPost(response)            
        }

        fetchPostId()
    }, [])

    return (
        <div>
            <h1>Editar Publicacion</h1>

            <form onSubmit={handleSubmit(saveData)}>
                <div>
                    <label>Id</label>
                    <input type="text" {...register("id", {required: 'Complete el campo'})} /> 
                    {errors.title && <span style={{color: "red"}}>{errors.title.message}</span>}
                </div>
                <div>
                    <label>Titulo</label>
                    <input type="text" {...register("title")} />
                    {errors.title && <span style={{color: "red"}}>{errors.title.message}</span>}
                    
                </div>
                <div>
                    <label>Descripcion</label>
                    <input type="text" {...register("body")} />
                    {errors.title && <span style={{color: "red"}}>{errors.title.message}</span>}

                </div>
                <div>
                    <label>Id Usuario</label>
                    <input type="number" {...register("userId")} />
                    {errors.title && <span style={{color: "red"}}>{errors.title.message}</span>}

                </div>
                <div>
                    <input type="submit" value='Guardar Datos' />
                </div>
            </form>
        </div>
    )
}

import axios from "axios";

//aqui se colocara las peticiones de la api (solo logica)

//metodo que me devuelva los posts de la api
const getPosts = async () => {
    try{
        //colocar la peticion HTTP (get, post, put, patch, delete)
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        //la respuesta ya se convierte en un json
        console.log(response); //estado de la peticion
        return response.data; //data => representa la informacion del endpoint
    }catch(error){
        console.error("error al obtener los datos", error);
    }
}

//metodo para crear una nueva publicacion
//data_post = {title: "", body: "", userId}
const createPost = async (data_post) => {
    try{
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data_post)
        console.log(response);
        return response.data; 
    }catch(error){
        console.error("error al obtener los datos", error);
    }
}

//metodo que obtenga un post por su id
const getPostById = async (id_post) => {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id_post}`)
        console.log(response);
        return response.data; 
    }catch(error){
        console.error("error al obtener los datos", error);
    }
}

//metodo para actualizar todos los datos de una publicacion
const updatePost = async (data_post, id_post) => {
    try{
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id_post}`, data_post)
        console.log(response);
        return response.data; 
    }catch(error){
        console.error("error al obtener los datos", error);
    }
}

export { getPosts, createPost, getPostById, updatePost }

// const obtenerPublicaciones = async () => {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "PUT",
//             data: {

//             }
//         }) //get
//         //convierto la respuesta en un json
//         const lista_post = response.json()
//         console.log(lista_post); //[]
        
//     }catch(error){
//         console.error("Error al obtener los post", error)
//     }
// }
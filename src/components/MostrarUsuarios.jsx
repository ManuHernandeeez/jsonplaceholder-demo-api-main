import { getUsers} from "../services/postServices";
import React, { use, useEffect, useState } from 'react'

//
const [user ,setUser] = useState([])


//
useEffect(() => {
    const fetchUsers = async () => {
        const response = await getUsers();
        setUser(response);
    }
    fetchUsers();
}, []);


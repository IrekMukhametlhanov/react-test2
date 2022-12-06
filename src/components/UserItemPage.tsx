import React, {FC, useEffect, useState} from 'react';
import {Iuser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom';

type UserItemPageParams = {
    id: string;
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<Iuser | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<Iuser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;
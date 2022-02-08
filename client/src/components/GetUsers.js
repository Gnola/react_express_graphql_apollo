import React, {useState, useEffect} from 'react';
import { useQuery, gql } from '@apollo/client';
import {LOAD_USERS} from '../graphql/Queries';

const GetUsers = (props) => {
  const {loading, error, data} = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers)
    }
  }, [data])

  return (
    <>
      {
        users.map((user) => (
          <h1>{user.firstName}</h1>
        ))
      }
    </>
  )
}

export default GetUsers;

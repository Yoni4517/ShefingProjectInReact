import React, { useState, useEffect } from 'react'
import Table from './components/Table';
import Filters from './components/Filters';
import './App.css'

//main component
export default function App() {
  const UrlToUsers = "https://jsonplaceholder.typicode.com/users";
  const [usersData, setUsersData] = useState([]);//the entire array of users data
  const [filteredUsersData, setFilteredUsersData] = useState([]);//array of users data filtering by name or email
  const [filter, setFilter] = useState("");//current way of filter the table
  const [fetchError, setFetchError] = useState("null");//the data about error during fetch
  const [onFetch, setOnFetch] = useState(true);//a flag that contains "true" if the request is during fetch
  const [searchNameEmail, setSearchNameEmail] = useState("");//the string of name/email to search by

  //getting the data at the first load
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setOnFetch(true);
        const response = await fetch(UrlToUsers);
        if (!response.ok) throw "Did not recieved excepted data.";
        const users = await response.json();
        setUsersData(users);
        setFilteredUsersData(users);
        setFetchError("null");
        setOnFetch(false);
      }
      catch (err) {
        setFetchError(err.message);
      }
    }
    fetchUsers();
  }, []);

  //set the filteredUsersData according to the entered string.
  useEffect(() => {
    const filteredUsers = usersData.filter(user => {
      return (
        user.name.toLowerCase().includes(searchNameEmail.toLowerCase())
        || user.email.toLowerCase().includes(searchNameEmail.toLowerCase()));
    });
    setFilteredUsersData(filteredUsers);
  }, [searchNameEmail]);

  return (
    <div>
      {!onFetch &&
        <div>
          <Filters setFilter={setFilter} setSearchNameEmail={setSearchNameEmail} />
          <Table users={filteredUsersData} filter={filter} />
        </div>}
      {onFetch && fetchError == "null" && <h2>Loading...</h2>}
      {fetchError != "null" && <h2>{fetchError}, Try Again</h2>}
    </div>
  )
}

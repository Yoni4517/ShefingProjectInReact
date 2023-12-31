import React, { useState, useEffect } from 'react'
import RowInTable from './RowInTable'
import Posts from './Posts';

//table users details component
export default function Table(props) {

  const [userPosts, setUserPosts] = useState({ id: null, name: null });
  const [showPosts, setShowPosts] = useState(false);

  //hiding the Posts component each time the users array is changes.
  useEffect(() => {
    setShowPosts(false);
  }, [props.users])

  return (
    <div style={{ display: 'flex', alignContent: 'space-between' }}>
      <table >
        <thead>
          <tr>
            {props.filter != "email" && <th>Name</th>}
            {props.filter != "name" && <th>Email</th>}
            {props.filter == "" && <th>Company Name</th>}
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
            return <RowInTable key={user.id} user={user} filter={props.filter} setUserPosts={setUserPosts} setShowPosts={setShowPosts} />
          })}
        </tbody>
      </table>
      <Posts userPosts={userPosts} showPosts={showPosts} setShowPosts={setShowPosts} />
    </div>)
}
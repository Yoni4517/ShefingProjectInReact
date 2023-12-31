import React from 'react'
//single row of the table (that contains single user details).
export default function RowInTable(props) {
  let userData = props.user;
  function onClickTr() {
    props.setUserPosts({ id: userData.id, name: userData.name });
    props.setShowPosts(true);
  }
  return (
    <tr onDoubleClick={onClickTr}>
      {props.filter != "email" && <td>{userData.name}</td>}
      {props.filter != "name" && <td>{userData.email}</td>}
      {props.filter == "" && <td>{userData.company.name}</td>}
    </tr>)
}
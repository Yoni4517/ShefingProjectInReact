import React from 'react'

//component of filters on the table
export default function Filters(props) {
    let styleLable = {
        display: "flex",
        flexDirection: "column",
        marginRight: "2vw"
    }

    return (
        <div style={{ margin: '2vw', fontWeight: "bold", display: 'flex', justifyContent: 'flex-start' }}>
            <div style={styleLable}>
                <label htmlFor="filters">Filter By: </label>
                <select
                    name="filters"
                    id="filters"
                    onChange={e => props.setFilter(e.target.value)}>
                    <option value="">All</option>
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                </select>
            </div>
            <div style={styleLable}>
                <label htmlFor="search">Search by Name/Email: </label>
                <input id='search' onChange={() => props.setSearchNameEmail(search.value)}>
                </input>
            </div>
        </div>)
}
import React from 'react'

const TableDivBody = (props) => {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    )
}

export default TableDivBody
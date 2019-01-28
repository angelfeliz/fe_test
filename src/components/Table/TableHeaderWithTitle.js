import React from 'react'
import './Table.sass';

const TableHeaderWithTitle = (props) => {
    return(
        <div className='header-table__container'>
            <div className='header-table__title font--x-big flex sm-fl-40 md-fl-20'>{props.title}</div>

            <div className='header-table flex'>
                <div className="flex xs-fl-30 sm-fl-20 md-fl-60 head__empty-space"></div>
                {
                    props.headers.map((item, index) => {
                        return(
                            <div key={index} className={`header--font-small ${item.class}`}>{item.name}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default  TableHeaderWithTitle
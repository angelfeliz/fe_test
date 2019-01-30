import React from 'react';
import {data} from '../../seed';
import './BoardEventWithParticipants.sass';
import ParticipantRow from '../../components/Participant/ParticipantRow';

class BoardEventWithParticipants extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            rowIndexShowDetail: undefined
        };
       
    }
    showDetail = (index) => {
        
        if(index !== this.state.rowIndexShowDetail) {
            this.setState({rowIndexShowDetail: index});
            console.log(index);
        }
        else{
            this.setState({rowIndexShowDetail: undefined});
        }
    }

    render() {
        let headers =
        [
            {name:'BIB', class:'bib'},
            {name:'AGE', class:'age'},
            {name:'GENDER', class:'gender'},
            {name:'TIME', class:'time'},
            {name:'SCORE', class:'score'}
        ];

        return(
            <React.Fragment>
                <div className='header-table__container'>
                    <div className='header-table__title font--big flex md-fl-90'>{data.eventName}</div>
                    <div className='header-table flex'>
                        <div className="flex xs-fl-30 sm-fl-20 md-fl-90"></div>
                        {
                            headers.map((item, index) => {
                                return(
                                    <div key={index} className={`header--font-small ${item.class}`}>{item.name}</div>
                                );
                            })
                        }
                    </div>
                </div>

                {
                    data.participants.map((item, index) => {
                                let openDetail = index === this.state.rowIndexShowDetail;
                                console.log(openDetail);
                                return (
                                    <ParticipantRow
                                        key={index}
                                        {...item}
                                        index={index}
                                        showDetail={this.showDetail}
                                        openDetail={openDetail}
                                    />
                                );
                            })
                }
            </React.Fragment>
        )
    }
}

export default BoardEventWithParticipants;
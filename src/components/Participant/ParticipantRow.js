import React from 'react';
import PropTypes from 'prop-types';
import './ParticipantRow.sass';
import ParticipantDetail from './ParticipantDetail';

const ParticipantRow = (props) => {
    return (
        <React.Fragment>
            <div className='row'>
                <div data-testid='rowitem' className="row__section-1" onClick={()=>props.showDetail(props.index)}>
                    <div className='row--number-position flex xs-fl-10 font--small'>
                        <span>{props.position}</span>
                    </div>
                        <div className='row__inner-row flex'>
                            <div className='flex xs-fl-30 sm-fl-20 md-fl-20 lg-fl-10 row__container__photo'>
                               <img className='row__photo' alt='face' src={props.photo}/>
                            </div>
                            <div className='row__inner-row flex xs-fl-70 sm-fl-90 md-fl-90 position_container'>
                                <div className='row__name flex  sm-fl-70 md-fl-40 lg-fl-90 font--normal font--bold'>
                            <span>{props.fullName}</span>
                        </div>
                                <div className='row__inner-row  row--flex-end flex row__inner--sm-hg'>
                            <div className='row__item font--small row-score--item-bib'>
                                <span>{props.bib}</span>
                            </div>
                            <div className='row__item font--small row-score--item-age'>
                                <span>{props.age}</span>
                            </div>
                            <div className='row__item font--small row-score--item-gender'>
                                <span>{props.gender}</span>
                            </div>
                            <div className='row__item font--big row-score--item-time'>
                                    <span>{props.time}</span>
                            </div>
                                <div className='row__item font--big row--bg-blue row-score--item-score'>
                                    <span>{props.score}</span>
                            </div>
                        </div>
                            </div>
                    </div>
                </div>
                <div className="row__section-2">
                {
                    props.openDetail ?
                        <ParticipantDetail {...props}/>
                        :
                        null
                }
                    
                </div>
            </div>
        </React.Fragment>
    )
}

ParticipantRow.propTypes = {
    openDetail: PropTypes.bool,
    position: PropTypes.number,
    photo: PropTypes.string,
    fullName: PropTypes.string,
    bib: PropTypes.number,
    age: PropTypes.number,
    time: PropTypes.string,
    gender: PropTypes.string,
    score: PropTypes.number,
    events: PropTypes.array
}

ParticipantRow.defaultProps = {
    events: [],
    openDetail: false
}


export default ParticipantRow;
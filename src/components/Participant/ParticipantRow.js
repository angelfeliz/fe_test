import React from 'react';
import PropTypes from 'prop-types';
import './ParticipantRow.sass';

const ParticipantRow = (props) => {
    return (
        <React.Fragment>
            <div className='row'>
                <div className="row__section-1">
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
                            <div className='row__item row-score--item-gender'>
                                <span>{props.gender}</span>
                            </div>
                            <div className='row__item font--normal row-score--item-time'>
                                    <span>{props.time}</span>
                            </div>
                                <div className='row__item font--normal row--bg-blue row-score--item-score'>
                                    <span>{props.score}</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row__section-2 flex">
                <div className="flex md-fl-10"></div>
                <div className={`flex row__detail ${props.showDetail ? 'row__detail_visible':null}`}>
                    <div className='skills'>
                        <div className='skill-set flex'>
                            <span className='flex xs-fl-30 md-fl-10 flex skill-set__skill font--x-small font--bold'>Strength</span>
                            <span className='flex xs-fl-10 skill-set__skill-point font--x-small font--bold skill-blue'>9</span>
                            <div className='flex xs-fl-60 md-fl-70 skill-set__progress-bar'>
                                <div className="skill-set__progress-bar__progress_count skill-bg-blue"></div>
                            </div>
                        </div>
                        <div className='skill-set flex'>
                            <span className='flex  xs-fl-30 md-fl-10 skill-set__skill font--x-small font--bold'>Endurance</span>
                            <span className='flex  xs-fl-10 skill-set__skill-point font--x-small font--bold skill-orange'>12</span>
                            <div className='flex  xs-fl-60 md-fl-70 skill-set__progress-bar'>
                                <div className="skill-set__progress-bar__progress_count skill-bg-orange"></div>
                            </div>
                        </div>
                        <div className='skill-set flex'>
                            <span className='flex  xs-fl-30 md-fl-10 skill-set__skill font--x-small font--bold'>Dexterity</span>
                            <span className='flex  xs-fl-10 skill-set__skill-point font--x-small font--bold font--bold skill-green'>12</span>
                            <div className='flex  xs-fl-60 md-fl-70 skill-set__progress-bar'>
                                <div className="skill-set__progress-bar__progress_count skill-bg-green"></div>
                            </div>
                        </div>
                        <div className='skill-set flex'>
                            <span className='flex  xs-fl-30 md-fl-10 skill-set__skill font--x-small font--bold'>Decision making</span>
                            <span className='flex  xs-fl-10 skill-set__skill-point font--x-small font--bold skill-purple'>12</span>
                            <div className='flex  xs-fl-60 md-fl-70 skill-set__progress-bar'>
                                <div className="skill-set__progress-bar__progress_count skill-bg-purple"></div>
                            </div>
                        </div>
                    </div>
                    {
                        props.events.map((item, index) => {

                    return(
                    <div key={index} className='events'>
                        <div className='event'>
                            <div className='event__name font--big'>
                                <span>{item.challenge}</span>
                            </div>
                            {
                                item.activities.map((item, index) => {
                                    return (

                               <div key={index}>
                            <div className='challange'>
                                <div className='challange__name flex md-fl-50'>
                                    <div className='circle circle--bg-black font--bold'>
                                        <span>{item.order}</span>
                                    </div>
                                    <span className='flex font--normal font--bold'>Hill Climb</span>
                                </div>
                                <div className='challange__detail flex md-fl-50'>
                                    <div className='circles_skills flex'>
                                        <div className='circle circle--bg-grey'>
                                            <span className='font--bold'>A</span>
                                        </div>
                                        <div className='circle circle--bg-grey'>
                                            <span className='font--bold'>C</span>
                                        </div>
                                        <div className='circle circle--bg-grey'>
                                            <span className='font--bold'>D</span>
                                        </div>
                                        <div className='circle circle--bg-grey'>
                                            <span className='font--bold'>E</span>
                                        </div>
                                    </div>
                                    <div className='charts flex xs-fl-20'>
                                        <div className='charts--orange'></div>
                                        <div className='charts--grees'></div>
                                    </div>
                                    <div className='challange___point flex xs-fl-30'>
                                        <div className='challange__time flex font--small'>17:34</div>
                                        <div className='challange__socore flex font--small'>9</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                                 )
                                })
                            }
                        </div>
                    </div>
                    )
                        })
                    }
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

ParticipantRow.propTypes = {
    position: PropTypes.number,
    photo: PropTypes.string,
    fullName: PropTypes.string,
    bib: PropTypes.number,
    age: PropTypes.number,
    time: PropTypes.string,
    gender: PropTypes.string,
    score: PropTypes.number
}


export default ParticipantRow;
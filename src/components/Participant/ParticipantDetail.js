import React from 'react';
import PropTypes from 'prop-types';

const ParticipantDetail = (props) => {
    return (
        <div data-testid='rowdetail' className={`flex row__detail`}>
                        <div className='skills'>
                            <div className='skill-set flex'>
                                <span className='flex xs-fl-30 md-fl-10 flex skill-set__skill font--x-small font--bold'>Strength</span>
                                <span className='flex xs-fl-10 skill-set__skill-point font--x-small font--bold skill-blue'>{props.strength}</span>
                                <div className='flex xs-fl-60 md-fl-70 skill-set__progress-bar'>
                                    <div className="skill-set__progress-bar__progress_count skill-bg-blue" style={{width: props.strength+'%'}}></div>
                                </div>
                            </div>
                            <div className='skill-set flex'>
                                <span className='flex  xs-fl-30 md-fl-10 skill-set__skill font--x-small font--bold'>Endurance</span>
                                <span className='flex  xs-fl-10 skill-set__skill-point font--x-small font--bold skill-orange'>{props.endurance}</span>
                                <div className='flex  xs-fl-60 md-fl-70 skill-set__progress-bar'>
                                    <div className="skill-set__progress-bar__progress_count skill-bg-orange" style={{width: props.endurance+'%'}}></div>
                                </div>
                            </div>
                            <div className='skill-set flex'>
                                <span className='flex  xs-fl-30 md-fl-10 skill-set__skill font--x-small font--bold'>Dexterity</span>
                                <span className='flex  xs-fl-10 skill-set__skill-point font--x-small font--bold font--bold skill-green'>{props.dexterity}</span>
                                <div className='flex  xs-fl-60 md-fl-70 skill-set__progress-bar'>
                                    <div className="skill-set__progress-bar__progress_count skill-bg-green" style={{width: props.dexteriry+'%'}}></div>
                                </div>
                            </div>
                            <div className='skill-set flex'>
                                <span className='flex  xs-fl-30 md-fl-10 skill-set__skill font--x-small font--bold'>Decision making</span>
                                <span className='flex  xs-fl-10 skill-set__skill-point font--x-small font--bold skill-purple'>{props.decisionMaking}</span>
                                <div className='flex  xs-fl-60 md-fl-70 skill-set__progress-bar'>
                                    <div className="skill-set__progress-bar__progress_count skill-bg-purple" style={{width: props.decisionMaking+'%'}}></div>
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
                                                                 <div className={`circle circle--bg-grey ${item.P ? 'isVisibible': 'isNotVisible'}`}>
                                                                     <span className='font--bold'>P</span>
                                                                 </div>
                                                                 <div className={`circle circle--bg-grey ${item.R ? 'isVisibible' : 'isNotVisible'}`}>
                                                                     <span className='font--bold'>R</span>
                                                                 </div>
                                                                 <div className={`circle circle--bg-grey ${item.W ? 'isVisibible': 'isNotVisible'}`}>
                                                                     <span className='font--bold'>W</span>
                                                                 </div>
                                                                 <div className={`circle circle--bg-grey ${item.F ? 'isVisibible': 'isNotVisible'}`}>
                                                                     <span className='font--bold'>F</span>
                                                                 </div>
                                                             </div>
                                                             <div className='charts flex xs-fl-20'>
                                                                 <div className={`charts--orange`} style={{ width: item.skillP+'%' }}></div>
                                                                 <div className='charts--grees' style={{ width: item.skillR+'%' }}></div>
                                                                 <div className='charts--blue' style={{ width: item.skillW+'%' }}></div>
                                                                 <div className='charts--purple' style={{ width: item.skillF+'%' }}></div>
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
    )
}

export default ParticipantDetail;
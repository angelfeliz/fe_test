import React from 'react';
import {data} from '../../seed';
import Table from '../../components/Table/TableContainer'
import TableHeaderWithTitle from '../../components/Table/TableHeaderWithTitle'
import TableDivBody from '../../components/Table/TableDivBody'
import ParticipantRow from '../../components/Participant/ParticipantRow'

class BoardEvent extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            rowIndexShowDetail: 0
        }
    }
    showDetail = (index) => {
        this.setState({rowIndexShowDetail: index});
    }

    render() {
        return(
            <Table>
                <TableHeaderWithTitle
                    title={data.eventName}
                    headers={
                        [
                            {name:'BIB', class:'bib'},
                            {name:'AGE', class:'age'},
                            {name:'GENDER', class:'gender'},
                            {name:'TIME', class:'time'},
                            {name:'SCORE', class:'score'}
                        ]
                    }
                />
                <TableDivBody>
                    {
                        data.participants.map((item, index) => {
                            let showDetail = index === this.state.rowIndexShowDetail;

                            return(
                                <ParticipantRow
                                    key={index}
                                    {...item}
                                    showDetail={showDetail}
                                />
                            )
                        })
                    }
                </TableDivBody>
            </Table>
        )
    }
}

export default BoardEvent
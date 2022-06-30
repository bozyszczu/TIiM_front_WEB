import React, { Component } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import ClubService from '../services/ClubService';
import { withRouter } from './withRouter';


class ViewClub extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params.id,
            club: {}
        }
    }

    componentDidMount() {
        ClubService.getClubById(this.state.id).then(res => {
            this.setState({ club: res.data });
        });
    }

    back() {
        this.props.navigate('/clubs')
    }

    render() {
        return (
            <Card className='w-50' style={{ margin: "10px" }}>
                <Card.Title>Club Info</Card.Title>
                <Card.Body >
                    <ListGroup variant='flush' align='left'>
                        <ListGroup.Item><b>Club Name: </b>{this.state.club.clubName} </ListGroup.Item>
                        <ListGroup.Item><b>Short Name: </b>{this.state.club.shortname}</ListGroup.Item>
                        <ListGroup.Item><b>Coach: </b>{this.state.club.coach}</ListGroup.Item>
                        <ListGroup.Item><b>Captain: </b>{this.state.club.captain}</ListGroup.Item>
                        <ListGroup.Item><b>Stadium: </b>{this.state.club.stadium}</ListGroup.Item>
                        <ListGroup.Item><b>Web Page: </b>{this.state.club.webPage}</ListGroup.Item>
                    </ListGroup>
                    <Button style={{ margin: "10px" }} variant='danger' className="w-25" onClick={this.back.bind(this)}>Back</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default withRouter(ViewClub);
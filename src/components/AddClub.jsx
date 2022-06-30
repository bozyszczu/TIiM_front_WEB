import React, { Component } from 'react';
import ClubService from '../services/ClubService';
import { withRouter } from './withRouter';
import { Button, Card, Form } from 'react-bootstrap';

class AddClub extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clubName: '',
            shortname: '',
            coach: '',
            stadium: '',
            webPage: '',
            captain: ''

        }

        this.changeClubNameHandler = this.changeClubNameHandler.bind(this);
        this.changeShortNameHandler = this.changeShortNameHandler.bind(this);
        this.changeCoachHandler = this.changeCoachHandler.bind(this);
        this.changeStadiumHandler = this.changeStadiumHandler.bind(this);
        this.changeWebPageHandler = this.changeWebPageHandler.bind(this);
        this.changeCaptainHandler = this.changeCaptainHandler.bind(this);

        this.saveClub = this.saveClub.bind(this);
    }

    saveClub = (e) => {
        e.preventDefault();
        let club = { clubName: this.state.clubName, shortname: this.state.shortname, coach: this.state.coach, stadium: this.state.stadium, webPage: this.state.webPage, captain: this.state.captain };
        console.log('Club => ' + JSON.stringify(club));

        ClubService.addClub(club).then(res => {
            this.props.navigate('/clubs');
        });
    }

    cancel() {
        this.props.navigate('/clubs');
    }

    changeClubNameHandler = (event) => {
        this.setState({ clubName: event.target.value });
    }

    changeShortNameHandler = (event) => {
        this.setState({ shortname: event.target.value });
    }

    changeCoachHandler = (event) => {
        this.setState({ coach: event.target.value });
    }

    changeStadiumHandler = (event) => {
        this.setState({ stadium: event.target.value });
    }

    changeWebPageHandler = (event) => {
        this.setState({ webPage: event.target.value });
    }

    changeCaptainHandler = (event) => {
        this.setState({ captain: event.target.value });
    }

    render() {
        return (
            <Card style={{ margin: "10px" }}>
                <Card.Title>Add Club</Card.Title>
                <Card.Body>
                    <Form className='w-50'>
                        <Form.Group>
                            <Form.Label>Club Name: </Form.Label>
                            <Form.Control placeholder="Club Name" name="clubName" className='border p-3' value={this.state.clubName}
                                onChange={this.changeClubNameHandler} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Short Name: </Form.Label>
                            <Form.Control placeholder="Short Name" name="shortname" className='border p-3' value={this.state.shortname}
                                onChange={this.changeShortNameHandler} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Coach: </Form.Label>
                            <Form.Control placeholder="Coach" name="coach" className='border p-3' value={this.state.coach}
                                onChange={this.changeCoachHandler} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Captain: </Form.Label>
                            <Form.Control placeholder="Captain" name="captain" className='border p-3' value={this.state.captain}
                                onChange={this.changeCaptainHandler} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stadium: </Form.Label>
                            <Form.Control placeholder="Stadium" name="stadium" className='border p-3' value={this.state.stadium}
                                onChange={this.changeStadiumHandler} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Web Page: </Form.Label>
                            <Form.Control placeholder="Web Page" name="webPage" className='border p-3' value={this.state.webPage}
                                onChange={this.changeWebPageHandler} />
                        </Form.Group>
                        <Button variant='success' className='w-50' style={{ margin: "10px" }} onClick={this.saveClub}>Save</Button>
                        <Button variant='danger' className='w-50' style={{ margin: "10px" }} onClick={this.cancel.bind(this)} >Cancel</Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}

export default withRouter(AddClub);
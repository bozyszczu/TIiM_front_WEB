import React, { Component } from 'react';
import ClubService from '../services/ClubService';
import { Card, Table } from 'react-bootstrap';
import { withRouter } from '../components/withRouter';
import { Button } from 'react-bootstrap';

class ClubList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clubs: []
        };

        this.addClub = this.addClub.bind(this);
        this.editClub = this.editClub.bind(this);
        this.deleteClub = this.deleteClub.bind(this);

    }

    deleteClub(id){
        ClubService.deleteClub(id).then(res => {
            this.setState({clubs: this.state.clubs.filter(club => club.id !== id)});
        });
    }

    viewClub(id){
        this.props.navigate(`/view-club/${id}`);
    }

    editClub(id){
        this.props.navigate(`/update-club/${id}`);
    }

    addClub(){
        this.props.navigate('/add-club');
    }

    componentDidMount(){
        ClubService.getClubs().then((res) => {
            this.setState({ clubs: res.data });
        });
    }

    render() {
        return (
            <Card style={{ margin: "10px" }}>
                <Card.Body>
            <div >
                <div>
                <h2 className="text-center">Clubs List</h2>
                <div className="row">
                    <Button variant="success" style={{marginBottom:"10px"}} className="w-25" onClick = {this.addClub}>
                        Add Club
                    </Button>
                </div>
                <div className="row" style={{marginBottom:"10px"}}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Club Name</th>
                                <th>Short Name</th>
                                <th>Coach</th>
                                <th>Captain</th>
                                <th>Stadium</th>
                                <th>Web Page</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clubs.map(
                                    club =>
                                    <tr key = {club.id}>
                                        <td>{ club.id}</td>
                                        <td>{ club.clubName }</td>
                                        <td>{ club.shortname }</td>
                                        <td>{ club.coach }</td>
                                        <td>{ club.captain }</td>
                                        <td>{ club.stadium }</td>
                                        <td>{ club.webPage }</td>
                                        <td>
                                            <Button variant="primary" onClick={ () => this.viewClub(club.id)} className="w-25" style={{marginRight:"10px"}}>View</Button>
                                            <Button variant="warning" onClick={ () => this.editClub(club.id)} className="w-25" style={{marginRight:"10px"}}>Update</Button>
                                            <Button variant="danger" onClick={ () => this.deleteClub(club.id)} className="w-25" style={{marginRight:"10px"}}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
                </div>
            </div>
            </Card.Body>
            </Card>
        )
    }
}

export default withRouter(ClubList);
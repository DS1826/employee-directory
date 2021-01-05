import React from 'react';
import "./style.css";
import Table from "../Table";
import SearchName from "../SearchName";
import API from "../../utils/API";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            displayUsers: []
        }
    }

    componentDidMount() {
        API.getUsers()
            .then(res => {
                console.log(res.data.results)
                this.setState({
                    users: res.data.results,
                    displayUsers: res.data.results
                }, () => console.log(this.state))
            });
        
    }

    searchLastName(term) {
        const filteredUser = [];
        for (var i = 0; i < this.state.users.length; i++) {
            if (this.state.users[i].name.last.startsWith(term)) {
                console.log(this.state.users[i]);

                filteredUser.push(this.state.users[i]);
            }
        }
        this.setState({ displayUsers : filteredUser });
    }

    handleSearchChange = (event) => {
        console.log(event.target.value)
        this.searchLastName(event.target.value);
    }


    render() {
        return (
            <div className="main">
            <SearchName handleSearchChange={this.handleSearchChange}>

            </SearchName>
                <Table displayUsers={ this.state.displayUsers }/>
            </div>
        );
    }

}

export default Main;
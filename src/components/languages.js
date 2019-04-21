import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const URL_LAN = 'http://localhost:3008/Courses';

class languages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            languages: [],
            filtered: [],
            keyword: ''

        }
        this.handler = this.handler.bind(this);
    }

    componentDidMount() {
        fetch(URL_LAN, { method: 'GET' })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    languages: json,
                    filtered: json
                })
            })

    }

    handler(e) {
        const keyword = e.target.value;
        if (keyword === '') {
            this.setState({
                filtered: this.state.languages,
                keyword
            })
        } else {
            const filterteam = this.state.languages.filter((f) => {
                return f.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
            })
            this.setState({
                filtered: filterteam,
                keyword
            })
        }
    }

    renderlist = (filtered) => {
        return filtered.map((item) => {
            return (
                <div>
                    <div className="link_container">
                    <Link className="link" to={`/language/${item.name}`} key={item.id} className="team_item" >
                    <div className="img_container">
                     <img  className="image" alt={item.name} src={`/images/${item.logo}`} style={{ height: "25px", width: "25px" }} />
                     
                      <div>{item.name}</div>
                        </div>
                    
                     </Link>
                        </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="main_container">
                <div className="serch_container">
                    <input type="text" className="search" value={this.state.keyword} placeholder="search the language" onChange={this.handler} />
                </div>
                <br />
                <br />
                  <div className="language_container">
                  {this.renderlist(this.state.filtered)}
                  </div>
               </div>
        );
    }
}

export default languages;
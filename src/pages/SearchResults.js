import React from 'react';
import { Container } from '../styles/center';
import { Nav } from '../styles/center';
import styled from 'styled-components';
import {
    SearchSection,
    Form,
    Search,
    SearchIcon,
    SearchInput,
    ButtonSection,
    MicIcon
} from '../components/Home.js';
//import { Dropdown } from 'react-bootstrap'
import depression from "../images/depression.png";
import stress from "../images/stress.png";
import anxiety from "../images/anxiety.png";


const ParentContainer = styled.div`
dsiplay: flex;
flex-direction: row;

`;
const Navb = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
font-size: 14px;
`

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: this.props.location.state.query,
            results: this.props.location.state.results,
            time: this.props.location.state.time,
            key: this.props.location.state.key
        }
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.updateKey = this.updateKey.bind(this)
        console.log('firstTweet in SearchResults:', this.state.results[0].tweets[0])
        console.log('initialQuery in SearchResults:', this.state.query)
        console.log('results in SearchResults:', this.state.results)
        console.log(this.state.time, 'milliseconds')
    }
    handleTextChange(event){
        this.setState({query: event.target.value})
    }
    updateKey(event){
        console.log('event: ', event.target.value)
        this.setState({key: event.target.value})
    }
    post2solr = () => {
        const payload = JSON.stringify({ query: this.state.key + ':*' + this.state.query + '*' })
        console.log('payload in post2solr:', payload)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload
        };
        this.setState({time: performance.now()})
        fetch('http://localhost:8983/solr/default/query', requestOptions)
            .then(response => response.json())
            .then(response => response.response)
            .then(docs => docs.docs)
            .then(docs => this.setState({
                results: docs,
                time: performance.now() - this.state.time
            }))
        console.log('this.state at end post2solr', this.state)
        return this.state.results
    }
    handleKeyDown(event){
        if (event.key === 'Enter'){
            event.preventDefault()
            this.post2solr()
        }
    }

    render() {
        const results = this.state.results
        const firstTweet = results[0].tweets[0]
        const initialQuery = this.state.query
        return (
            <ParentContainer>
        
           <div class="navi">
            <SearchSection>
                <Form action="/" method="GET" role="search">
                    <Search>
                        <SearchIcon>
                            <svg focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
                            </svg>
                        </SearchIcon>
                        <SearchInput type='text' value={initialQuery} onChange={this.handleTextChange} onKeyDown={this.handleKeyDown}/>
                        <MicIcon>
                            <svg focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
                                <path fill='#4285f4'd='m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z'/>
                                <path fill='#34a853' d='m11 18.08h2v3.92h-2z' />
                                <path fill='#fbbc05' d='m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z'/>
                                <path fill='#ea4335' d='m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z'/>
                            </svg>
                        </MicIcon>
                    </Search>
                </Form>
            </SearchSection>
            <ButtonSection>
                <a className="button" onClick={this.post2solr}>Search</a>
                <select id="key" onChange={this.updateKey} value={this.state.key}>
                <option value="tweet">Tweets</option>
                <option value="hashtags">Hashtags</option>
                <option value="Sentiment_vdr">Vader</option>
                <option value="Sentiment_nb">Naive Bayes</option>
                <option value="Sentiment_lr">Logistic Regression</option>
                <option value="lockdown_sentiment">Lockdown Sentiment</option>
                <option value="wfh_sentiment">WFH Sentiment</option>
                <option value="shn_sentiment">SHN Sentiment</option>
            </select>
            </ButtonSection>
            </div>

<br/>
<br/>
<br/>
            

            <div className="results">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <br/> <br/>
                        <h1 className="font-weight-light">Search Results: (took {Math.round(this.state.time)} milliseconds)</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th>tweet</th>
                                    <th>hashtag</th>
                                    <th>vader</th>
                                    <th>naive bayes</th>
                                    <th>logistic regression</th>
                                    <th>absa lockdown</th>
                                    <th>absa wfh</th>
                                    <th>absa shn</th>
                                </tr>
                                {results.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.tweets[0]}</td>
                                    <td>{item.hashtags[0]}</td>
                                    <td>{item.Sentiment_vdr[0]}</td>
                                    <td>{item.Sentiment_nb[0]}</td>
                                    <td>{item.Sentiment_lr[0]}</td>
                                    <td>{item.lockdown_sentiment[0]}</td>
                                    <td>{item.wfh_sentiment[0]}</td>
                                    <td>{item.shn_sentiment[0]}</td>
                                </tr>
                                ))}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
        </ParentContainer>
        )
    }
}

export default SearchResults;

import React from 'react';
import styled from 'styled-components';
import logo from "../images/BrainTalk_logo.png";
import {Link, Redirect, withRouter} from "react-router-dom";
import history from './../history.js';

const Container = styled.div`
dsiplay: flex;
flex-direction: column;
`;

const LogoSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 290px;
height: calc(100% - 560px);
img {
    width: 300px;
    height: 150px;
    margin-top: auto;
}
`;

const SearchSection = styled.div`
padding: 20px;
display: flex;
justify-content: center;
flex-direction: column;
`;

const Form = styled.form``;

const Search = styled.div`
display: flex;
align-items: center;
padding: 0px 14px;
background: #fff;
border: 1px solid #dfe1e5;
box-shadow: none;
border-radius: 24px;
z-index: 3;
height: 44px;
margin: 0 auto;
max-width: 584px;
`;

const ButtonSection = styled.div`
display: flex;
justify-content: center;
height: 70px;
padding-top: 18px;
top: 53px;
z-index: 0;
button {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: Roboto, arial, sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
}
`;
const ButtonLinks = styled(Link)`
padding: 0 8px;
text-decoration: none;
color: #000;`

const SearchIcon = styled.span`
color: #9aa0a6;
height: 30px;
width: 30px;
padding-right: 10px;
display: flex;
align-items: center;
& svg {
    fill: #9aa0a6;
}
`;

const SearchInput = styled.input`
display: flex;
flex: 1;
flex-wrap: wrap;
height: 40px;
background-color: transparent;
border: none;
margin: 0;
padding: 0;
color: rgba(0, 0, 0, 0.87);
word-wrap: break-word;
outline: none;
-webkit-tap-highlight-color: transparent;
height: 34px;
font-size: 16px;
`;

const MicIcon = styled.div`
display: flex;
cursor: pointer;
align-items: center;
border: 0;
background: transparent;
outline: none;
padding: 0 8px;
width: 40px;
line-height: 44px;
height: 44px;
svg {
    height: 24px;
    width: 24px;
    vertical-align: middle;
}
`;


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {query: "", results: [], time: null, key: "tweets"}
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.updateKey = this.updateKey.bind(this)
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
                results: [...this.state.results, ...docs],
                time: performance.now() - this.state.time,
            }))
            .then(docs => this.redirect2results())
        console.log('this.state at end post2solr', this.state)
        return this.state.results
    }
    redirect2results = () => {
        this.props.history.push({
            pathname: '/results',
            state: this.state
        })
    }
    handleKeyDown(event){
        if (event.key === 'Enter'){
            event.preventDefault()
            this.post2solr()
        }
    }

    render(){
        return (
            <Container>
                <LogoSection>
                    <img src ={logo} alt = "profile" />
                </LogoSection>
                <SearchSection>
                    <Form action="/" method="GET" role="search">
                        <Search>
                            <SearchIcon>
                                <svg focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                    <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
                                </svg>
                            </SearchIcon>
                            <SearchInput type='text' onChange={this.handleTextChange} onKeyDown={this.handleKeyDown}/>
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
                    <a className="button" onClick={() => this.post2solr()}>Search</a>
                    <br/>
                    <br/>
                    
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
                
            </Container>)
    }
}

export {
    SearchSection,
    Form,
    Search,
    SearchIcon,
    SearchInput,
    ButtonSection,
    MicIcon,
}
export default Home

import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading : false,
            page: 1,
            totalResults : 1
        }
    }

    static defaultProps = {
        country:"in",
        pagesize : 9
    }

    static propTypes = {
        country : PropTypes.string,
        pagesize :PropTypes.number
    }
    async componentDidMount() {
        this.setState({loading : true})
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2cbf7e3f3f074a14a45d0cde3529d8d1&pagesize=${this.props.pagesize}&page=${this.state.page}&category=${this.props.category}`);
        let parseddata = await data.json();
        this.setState({
            articles: parseddata.articles,
            totalResults : parseddata.totalResults,
            loading :false
        })
        console.log(parseddata.articles);
    }
    
    handlenext = async () => {
        
        this.setState({loading : true})
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2cbf7e3f3f074a14a45d0cde3529d8d1&pagesize=${this.props.pagesize}&page=${this.state.page + 1}&category=${this.props.category}`);
        let parseddata = await data.json();
        this.setState({
            articles: parseddata.articles,
            page: this.state.page + 1,
            totalResults: this.state.totalResults-this.props.pagesize,
            loading :false
        })
    }
    handleprev = async () => {
        this.setState({loading : true})
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2cbf7e3f3f074a14a45d0cde3529d8d1&pagesize=${this.props.pagesize}&page=${this.state.page - 1}&category=${this.props.category}`);
        let parseddata = await data.json();
        this.setState({
            articles: parseddata.articles,
            page: this.state.page - 1,
            totalResults: this.state.totalResults+this.props.pagesize,
            loading :false
        })
    }

    render() {
        return (
            <div className="container my-3" >
                <h1 className="text-center">News Chrome - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {
                        this.state.articles.map((elmt) => {
                            return <div className="col-md-4" key={elmt.url}>
                                <Newsitem title={elmt.title === null ? "" : elmt.title.slice(0, 45)} description={elmt.description === null ? "" : elmt.description.slice(0, 88)} imageurl={elmt.urlToImage === null ? "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg" : elmt.urlToImage} newsUrl={elmt.url} author={elmt.author} date={elmt.publishedAt}  />
                            </div>
                        })
                    }
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page===1} className="btn btn-dark my-2" onClick={this.handleprev}>&larr; Previous</button>
                    <button type="button" disabled={this.state.totalResults<this.props.pagesize} className="btn btn-dark my-2" onClick={this.handlenext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News

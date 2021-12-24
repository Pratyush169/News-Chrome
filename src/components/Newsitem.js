import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,description,imageurl,newsUrl,author,date} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={imageurl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title.length>44? title+"...":title}</h5>
                    <p className="card-text">{description.length>87? description+"...":description}</p>
                    <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} {new Date(date).toTimeString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem

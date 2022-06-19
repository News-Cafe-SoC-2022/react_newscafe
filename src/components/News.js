import React, { useState } from 'react'
// import { Link } from "react-router-dom";

export default function News() {
  const [value, setValue] = useState([""]);
  async function FetchNews() {
    // let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad3d9f30d96d41abb8e2a7bd0e8658d8");
    let response = await fetch('');
    console.log(response);
    let result = await response.json();
    // let result = response.body;

    console.log(result);
    // console.log(result.articles);
    let p = result.articles.map((element) => {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img src={element.urlToImage} className="card-img-top" alt="Not Found!" />
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.description}</p>
            <a href={element.url} className="btn btn-primary">Read Full News</a>
          </div>
        </div>
      )


    })
    setValue(p);




  }

  FetchNews();

  // useEffect(() => {
  //   FetchNews();

  // }, []);


  return (
    <>
      <div className="container">
        {value}
        {/* <h1 className="text-center">Welcome To NewsCafe! {value}</h1> */}

        {/* <img src={props.element.urlToImage} alt={props.text}/>
            <p><strong>Title:</strong><Link to={props.element.url} target="_blank">{props.element.title.toUpperCase()}</Link></p>
            <p><strong>Description:</strong> {props.element.description}</p>
            <p><strong>Source:</strong> {props.element.source.name}</p>
            <p><strong>Author:</strong> {props.element.author}</p>
            <small><strong>Published at</strong>: {props.element.publishedAt}</small>
            <p><strong>Content:</strong> {props.element.content}</p>
            <p><span>&#128077;</span></p>
            <Link href="{{ element.url }}" target="_blank">Read Full News</Link> */}


      </div>
    </>
  )
}


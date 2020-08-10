import React from 'react';

const CardJob = (props) => {

 const { type, url , company, title , location , description , company_logo } = props;
    return ( 
        <div className="card mb-3  d-flex justify-content-center"  style = {{ width : 300 + 'px' , height : 'auto' }} >
      <img src= {company_logo} className="card-img-top "  />
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
        <p className="card-text" >
          {description}
        </p>
        <a href= {url} className="btn btn-info">
          Ir a sitio web
        </a>
      </div>
    </div>
    )
}

export default CardJob;

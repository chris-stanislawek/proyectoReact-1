import React, { useState } from "react";

const CreateJob = (props) => {
  const { createJob } = props;

  const [company_name, setCompany_name] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [website_url, setWebsite_url] = useState("");
  const [company_logo_URL, setCompany_logo_url] = useState("");

  const handlerCompany_name = (evento) => {
    console.log(evento.target.value);
    setCompany_name(evento.target.value);
  };

  const handlerDescription = (evento) => {
    console.log(evento.target.value);
    setDescription(evento.target.value);
  };

  const handlerEmail = (evento) => {
    setEmail(evento.target.value);
  };
  const handlerTitle = (evento) => {
    setTitle(evento.target.value);
  };
  const handlerWebsite_url = (evento) => {
    setWebsite_url(evento.target.value);
  };
  const handlerCompany_logo_Url = (evento) => {
    setCompany_logo_url(evento.target.value);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="company_name">Input your company name</label>
          <input
            onChange={handlerCompany_name}
            type="text"
            className="form-control"
            id="company_name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="website_url">
            Please provide your company website
          </label>
          <input
            onChange={handlerWebsite_url}
            type="text"
            className="form-control"
            id="website_url"
          />
        </div>
        <div className="form-group">
          <label htmlFor="company_logo_URL">
            Please provide a link to your company logo
          </label>
          <input
            onChange={handlerCompany_logo_Url}
            type="text"
            className="form-control"
            id="company_logo_URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Please provide your email</label>
          <input
            onChange={handlerEmail}
            type="text"
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Please provide the job title</label>
          <input
            onChange={handlerTitle}
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="form-group">
          <label for="description">Please provide a job description</label>
          <textarea
            onChange={handlerDescription}
            type="text"
            className="form-control"
            id="description"
          />
        </div>

        <button
          onClick={() => {
            createJob(
              company_name,
              description,
              email,
              title,
              website_url,
              company_logo_URL
            );
          }}
          className="btn btn-primary"
        >
          Add job
        </button>
      </div>
    </div>
  );
};

export default CreateJob;

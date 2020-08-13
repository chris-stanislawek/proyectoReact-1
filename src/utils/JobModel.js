class JobModel {
  constructor(company_name, description, email, job_title, website_url, id) {
    this[id] = {
      company_name: company_name,
      description: description,
      email: email,
      job_title: job_title,
      website_url: website_url,
    };
  }
}

module.exports = { JobModel };

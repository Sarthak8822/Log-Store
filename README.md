


<!-- PROJECT SHIELDS -->
<!--

*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

### Log Store

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#usage">Requirements Meeting</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot](images/screenshot.png)](https://example.com)

This project implements a log ingestor system and a query interface to efficiently handle vast volumes of log data. It provides a simple interface for querying log data using full-text search or specific field filters.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- Log Ingestor with HTTP log ingestion mechanism.
- Query Interface with full-text search and field-based filters.
- Efficient handling of high volumes of logs.
- Scalability considerations.
- Advanced features (bonus) like date range search, combining multiple filters, real-time log ingestion, and role-based access.

  <p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

- [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
- [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
- [![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed.
- MongoDB installed and running.
- Docker Desktop should be installed.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dyte-submissions/november-2023-hiring-Sarthak8822.git
   ```
2. Install NPM packages
   1. Instaling packages in Server's Directory
    ```sh
     cd ingestor
     npm install
    ```
   2. Instaling packages in Web-UI Directory
    ```sh
     cd log-query-interface
     npm install
    ```
3. Starting the Backend Server at PORT 3000
    ```sh
     cd ingestor
     node logIngestor.js
    ```
4. Starting the Next-Server at PORT 3001
    ```sh
    cd log-query-interface
    npm run dev
     ```



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage/Screenshots/Demo

1. Ingesting log to the Database(MongoDB)
  ![image](https://github.com/dyte-submissions/november-2023-hiring-Sarthak8822/assets/76205423/62a79d71-9836-414d-9881-90d85fde72ac)
  Postman API Key: https://api.postman.com/collections/19334552-a57f5fbe-931e-479d-bd77-5720f8ba552e?access_key=PMAT-01HFF5GJ6977KNH5P1S28BKK5X
  
3. MongoDB Entry of the log
  ![image](https://github.com/dyte-submissions/november-2023-hiring-Sarthak8822/assets/76205423/ba9a2981-f933-4828-b7f7-317be3220221)
4. Checking the log using various filters
   1. With level
      ![image](https://github.com/dyte-submissions/november-2023-hiring-Sarthak8822/assets/76205423/cb1e9e69-cca5-46cf-b338-333624c2969f)
   2. With message
      ![image](https://github.com/dyte-submissions/november-2023-hiring-Sarthak8822/assets/76205423/3367684e-0a28-4a90-bbe0-1a585ff4b987)
   3. With TracingId (usually used for debugging)
      ![image](https://github.com/dyte-submissions/november-2023-hiring-Sarthak8822/assets/76205423/975d5f6c-0933-460c-a399-6af6c4034567)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Requirements Meeting

### Log Ingestor:

1. **Mechanism to Ingest Logs:**
   - Logs are ingested via HTTP POST requests to the `/ingest` endpoint.
   - Ingested logs are stored in MongoDB.

2. **Scalability:**
   - The system is designed to handle high volumes of logs efficiently.
   - Considerations for scalability include asynchronous operations and potential optimization of database queries.

3. **Bottleneck Mitigation:**
   - Asynchronous operations are used to mitigate potential bottlenecks, such as I/O operations and database write speeds.

4. **Default Port:**
   - The Log Ingestor runs on port `3000` by default.

### Query Interface:

1. **User Interface:**
   - A user interface (Web UI) is provided for full-text search and field-based filters.

2. **Filter Options:**
   - Filters are available for various log fields, including level, message, resourceId, timestamp, traceId, spanId, commit, and metadata.parentResourceId.

3. **Efficient Search:**
   - The search functionality aims for efficiency and quick results.

### Advanced Features (Bonus):

1. **Search Within Date Ranges:**
   - Implemented the ability to filter logs between specified timestamp ranges.

2. **Regular Expressions for Search:**
   - Utilized regular expressions for partial matching in log searches.

3. **Combining Multiple Filters:**
   - Allow combining multiple filters in search queries.

4. **Real-Time Capabilities:**
   - Real-time log ingestion and searching capabilities are not implemented (optional feature).

5. **Role-Based Access:**
   - Role-based access to the query interface is not implemented (optional feature).

### Sample Queries:

- **Find all logs with the level set to "error".**
- **Search for logs with the message containing the term "Failed to connect".**
- **Retrieve all logs related to resourceId "server-1234".**
- **Filter logs between the timestamp "2023-09-10T00:00:00Z" and "2023-09-15T23:59:59Z". (Bonus)**

### Evaluation Criteria:

1. **Volume:**
   - The system is designed to ingest and handle massive volumes of logs.

2. **Speed:**
   - Efficiency in returning search results is considered in the design.

3. **Scalability:**
   - Adaptability to increasing volumes of logs and queries is considered.

4. **Usability:**
   - The user interface is designed to be intuitive and user-friendly.

5. **Advanced Features:**
   - Bonus functionalities such as date range search and regex search are implemented.

6. **Readability:**
   - The codebase is structured and clean for better readability.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@sarthak_modhe](https://sarthakmodhe.vercel.app/) - sarthakpravin08@gmail.com


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

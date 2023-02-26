import React from 'react'
import './Portfolio.scss'


const projects = [
  {
    name: 'Books_management',
    image: 'https://th.bing.com/th/id/R.627bdcb95e89774d6e2c1b8659b61ee7?rik=VsYuUzHmIbc%2bXw&riu=http%3a%2f%2fsmallbiztrends.com%2fwp-content%2fuploads%2f2014%2f01%2fManagement-BooksEdit.jpg&ehk=VsOkNOuabS8oNxwgbVvB3BadmIERbzYvKYnaADTgfMU%3d&risl=&pid=ImgRaw&r=0',
    link: 'https://github.com/surajkumar9693/Book-Managment',
  },
  {
    name: 'Url Shortner',
    image: 'https://lh3.googleusercontent.com/GiRiQRLCt0HvR2WuLlLUhvQS-_AxCOuoKmB11b-VTmyGjlJtL_6iyaCuL0xCp1SDwSM',
    link: "https://github.com/surajkumar9693/Url-shortner"
  },
  {
    name: 'Open To Intern',
    image: 'https://images-platform.99static.com/4I71gDS1jRQZY5vLE4Ok23zfRBY=/500x500/top/smart/99designs-contests-attachments/9/9264/attachment_9264660',
    link: "https://github.com/surajkumar9693/intern-project"
  },
  {
    name: 'Blogging_Site',
    image: 'https://ads2020.marketing/wp-content/uploads/2017/10/TopBloggingPlatforms-600x400.jpg',
    link: "https://github.com/surajkumar9693/blog-project"
  },
  {
    name: 'Ecommerce App',
    image: 'https://i.ytimg.com/vi/0xZFVUVT6Rs/hqdefault.jpg',
    link: "https://github.com/surajkumar9693/Shoping-Cart"
  },
  {
    name: 'Social media',
    image: 'https://www.fenews.co.uk/wp-content/uploads/2022/01/social-media-1200x800.jpg',
    link: "https://github.com/surajkumar9693/Social_media/tree/socail_media"
  },
];

function Portfolio() {

  const handleClick = (link) => {
    window.location.href = link;
  };

  return (

    <div className="PortfolioContainer" >

      {projects.map((project, index) => (
        <div onClick={() => handleClick(project.link)} style={{ cursor: 'pointer' }} key={index} className="project-box">
          <img src={project.image} alt={project.name} />
          <p>{project.name}</p>
        </div>

      ))}
    </div>

  )
}

export default Portfolio

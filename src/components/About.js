import React from 'react'
import "./About.scss"
import js from "../assets/js.png"
import postman from "../assets/postman.png"
import node from "../assets/node.png"
import redis from "../assets/redis.png"
import mongo from "../assets/mongo.png"
import aws from "../assets/aws.png"
import git from "../assets/git.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import express from "../assets/express.png"
import react from "../assets/react.png"


const About = () => {

    return (
        <>
            <div className='container'>
                <div className='about-me'>
                    <h2>About Me</h2>
                    <p>

                        Hello, I am Suraj Kumar, curruntly completed Bachelor of science veer kunwar singh university in 2022. and curruntly Trainee at functionUp Bootcamp for backend development using Javascript, Node JS, Express JS, MongoDB, and also AWS S3, Redis, HTML & CSS. I have completed various projects such as e-commerce website, book management system, blogging site, URL shortener, college internship portal, Socail media portal using these technologies.
                    </p>

                    <p>
                        My goal is to work with a reputed company for a successful career in the tech field. I am confident that my skills and project experience make me a strong fit for this role. I am a self-motivated, hard-working, and disciplined individual with strong communication and problem-solving skills. My greatest strength is my creativity and Self believe, I am confident that I can make a valuable contribution to your company and believe that my skills and project experience make me a strong fit for this role in backend development. Thank you for considering me for this opportunity. I look forward to your response.
                    </p>


                </div>
                <div className='skills' >
                    <h2>SKILLS</h2>


                    <div className='skill-name'>
                        <div className='img-container'>
                            <img src={js} alt='JS'></img>
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className='m-container'>
                            <sapn className="m-9" ></sapn>
                        </div>
                    </div>


                    <div className='skill-name'>
                        <div className='img-container'>
                            <img src={postman} alt='postman'></img>
                            <p>POSTMAN</p>
                        </div>
                        <div className='m-container'>
                            <sapn className='m-8'></sapn>
                        </div>
                    </div>


                    <div className='skill-name'>
                        <div className='img-container'>
                            <img src={node} alt='nodejs'></img>
                            <p>NODEJS</p>
                        </div>
                        <div className='m-container'>
                            <sapn className='m-9' ></sapn>
                        </div>
                    </div>


                    <div className='skill-name'>
                        <div className='img-container'>
                            <img src={redis} alt=''></img>
                            <p>REDIS</p>
                        </div>
                        <div className='m-container'>
                            <sapn className='m-7'></sapn>
                        </div>
                    </div>


                    <div className='skill-name'>
                        <div className='img-container'>
                            <img src={mongo} alt='mongo'></img>
                            <p>MONGODB</p>
                        </div>
                        <div className='m-container'>
                            <sapn className='m-9' ></sapn>
                        </div>
                    </div>


                    <div className='skill-name'>
                        <div className='img-container'>
                            <img src={aws} alt='aws'></img><p
                            >AWS-S3</p>
                        </div>
                        <div className='m-container'>
                            <sapn className='m-7'></sapn>
                        </div>
                    </div>


                    <div className='skill-name'>
                        <div className='img-container'>
                            <img src={git} alt='git'></img>
                            <p>GIT</p>
                        </div>
                        <div className='m-container'>
                            <sapn className='m-9' ></sapn>
                        </div>
                    </div>


                    <div className='skill-name'>
                        <div className='img-container'>
                            <img src={html} alt='html'></img>
                            <p>HTML5</p>
                        </div>
                        <div className='m-container'>
                            <sapn className='m-8'></sapn>
                        </div>
                    </div>


                    <div className='skill-name'>
                        <div className='img-container'>
                            <img src={css} alt='css'></img>
                            <p>CSS3</p>
                        </div>
                        <div className='m-container'>
                            <sapn className='m-8'></sapn>
                        </div>
                    </div>


                    <div className='skill-name'>
                        <div className='img-container'>
                            <img src={express} alt='express'></img>
                            <p>EXPRESSJS</p>
                        </div>
                        <div className='m-container'>
                            <sapn className='m-9' ></sapn>
                        </div>
                    </div>


                    <div className='skill-name'>
                        <div className='img-container'>
                            <img src={react} alt='react'></img>
                            <p>MY-SQL</p>
                        </div>
                        <div className='m-container'>
                            <sapn className='m-7' ></sapn>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default About

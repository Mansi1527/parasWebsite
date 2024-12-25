import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data1 = [
    {
        id: 1,
        image: IMG1,
        title: 'Project A: Java component swing based arcade game.',
        github: 'https://github.com/mazer0P/Arcade-Game',
        demo: 'https://nguyenvu1310.github.io/',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Website Scrapper: Python based data scrapping tool .',
        github: 'https://github.com/mazer0P/Web-Scrapper',
        demo: 'https://nguyenvu-personal-site.netlify.app/',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Host0n: Shell script for subnet scanning. ',
        github: 'https://github.com/NguyenVu1310/todoList-react',
        demo: 'https://nguyenvu-todo-list.netlify.app/',
    },
    // {
    //     id: 4,
    //     image: IMG4,
    //     title: '',
    //     github: 'https://github.com/NguyenVu1310/threeblock',
    //     demo: 'https://3block.systems/',
    // },
]
const data2 = [
    {
        id: 1,
        image: IMG4,
        title: 'Data leak worksheet',
        github: 'https://github.com/mazer0P/Google-Cybersecurity-Certificate/blob/main/Course%20Support%20Files/Activity%20Template_%20Data%20leak%20worksheet.pdf',
        demo: 'https://nguyenvu1310.github.io/',
    },
    {
        id: 2,
        image: IMG5,
        title: 'Security audit of a finctional comapany',
        github: 'https://github.com/mazer0P/Google-Cybersecurity-Certificate/blob/main/Course%20Support%20Files/Securityaudit%40BotiumToys.pdf',
        demo: 'https://nguyenvu-personal-site.netlify.app/',
    },
    {
        id: 3,
        image: IMG6,
        title: 'Velnerability assesement of a organization server',
        github: 'https://github.com/mazer0P/Google-Cybersecurity-Certificate/blob/main/Course%20Support%20Files/Vulnerability%20assessment%20report.pdf',
        demo: 'https://nguyenvu-todo-list.netlify.app/',
    },
    // {
    //     id: 4,
    //     image: IMG4,
    //     title: '',
    //     github: 'https://github.com/NguyenVu1310/threeblock',
    //     demo: 'https://3block.systems/',
    // },
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data1.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
            <div className='hr'></div>
            <h2>Work in Cybersecurity</h2>
            <div className="container portfolio__container">
                {
                    data2.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
            <div>

            </div>
        </section>
    )
}

export default Portfolio
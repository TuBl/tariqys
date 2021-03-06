import React, { PureComponent } from 'react'
import NoLightGallery from './NoLightGallery'

import thumb01 from '../assets/images/thumbs/1.png'
import thumb01b from '../assets/images/thumbs/1.webp'
import thumb02 from '../assets/images/thumbs/2.png'
import thumb02b from '../assets/images/thumbs/2.webp'
import thumb03 from '../assets/images/thumbs/3.png'
import thumb03b from '../assets/images/thumbs/3.webp'
import thumb04 from '../assets/images/thumbs/4.png'
import thumb04b from '../assets/images/thumbs/4.webp'
import thumb05 from '../assets/images/thumbs/5.png'
import thumb05b from '../assets/images/thumbs/5.webp'
import thumb06 from '../assets/images/thumbs/6.png'
import thumb06b from '../assets/images/thumbs/6.webp'
import thumb07 from '../assets/images/thumbs/7.png'
import thumb07b from '../assets/images/thumbs/7.webp'
import thumb08 from '../assets/images/thumbs/8.png'
import thumb08b from '../assets/images/thumbs/8.webp'
import thumb09 from '../assets/images/thumbs/9.png'
import thumb09b from '../assets/images/thumbs/9.webp'
import thumb10 from '../assets/images/thumbs/10.png'
import thumb10b from '../assets/images/thumbs/10.webp'
const DEFAULT_IMAGES = [
  {
    id: 'thumb10',
    thumbnail: thumb10b,
    altThumbnail: thumb10,
    caption: 'weather-app',
    tech: 'Weather application that I used to practice animating SVGs',
    description: 'Tech: VueJS, SaaS',
    link: 'https://tubi-weather.netlify.app/',
  },
  {
    id: 'thumb9',
    thumbnail: thumb09b,
    altThumbnail: thumb09,
    caption: 'quantumzero',
    tech: 'Client Project, A stylish, responsive website for quantumzero co',
    description: 'Tech: VueJS, Bluehost',
    link: 'https://quantumzero.net/',
  },
  {
    id: 'thumb7',
    thumbnail: thumb07b,
    altThumbnail: thumb07,
    caption: 'Tomballs',
    tech:
      'Client Project, A responsive website for TomBalls floors & remodeling utilizing VueJS for the front-end and NodeJS for the back end',
    description: 'Tech: VueJS, NodeJS, ExpressJS, MYSQL, NodeMailer, Heroku',
    link: 'https://tomballs.herokuapp.com/',
  },
  {
    id: 'thumb8',
    thumbnail: thumb08b,
    altThumbnail: thumb08,
    caption: 'SpicyCoffee',
    tech: 'Side project, an E-commerce site with stripe integration',
    description: 'Tech: VueJS, PHP, Laravel, MYSQL, Stripe-payment, Heroku',
    link: 'https://spicy-coffee.herokuapp.com/',
  },
  {
    id: 'thumb5',
    thumbnail: thumb05b,
    altThumbnail: thumb05,
    caption: 'COH-HRM',
    tech:
      'Client Project, HRM Application for Salvation Army London CA, This application was based on their old HRM application using MS Access. The database was migrated to MYSQL and a Front-end using ReactJS was designed to match the old application, but with better performance, functionality and user-interface',
    description:
      'Tech: ReactJS, ExpressJS, NodeJS, MYSQL, Sequalize, MaterialUI, PassportJS',
    link: 'https://github.com/TuBl/COHShow',
  },
  {
    id: 'thumb6',
    thumbnail: thumb06b,
    altThumbnail: thumb06,
    caption: 'InstaClone',
    tech: 'Instagram Clone using PHP Laravel, Blade Templates & VueJS',
    description: 'Tech: Vue, PHP, Laravel, SQLite, Blade Templates',
    link: 'https://github.com/TuBl/InstaClone',
  },
  {
    id: 'thumb1',
    thumbnail: thumb01b,
    altThumbnail: thumb01,
    caption: 'YelpCamp',
    tech:
      "My first functional project ever! Using EJS templates, NodeJS, MongoDB to deliver Campsites review website with Registration, Logins, posts, comments and more!. I like to look at it to see how far I've come since I began this journey.",
    description: 'Tech: HTML, CSS, MongoDB, Express.Js, Node.Js',
    link: 'https://immense-bayou-20235.herokuapp.com/',
  },
  {
    id: 'thumb3',
    thumbnail: thumb03b,
    altThumbnail: thumb03,
    caption: 'Dev-Connector',
    tech:
      'Personal Project: A social network web app with signup, login, personal profiles, posts, comments, feed, like and unlike system and more.',
    description: 'Tech: MongoDB, Express.Js, React.Js, Redux.Js, Node.Js',
    link: 'https://agile-temple-78256.herokuapp.com/',
  },

  {
    id: 'thumb4',
    thumbnail: thumb04b,
    altThumbnail: thumb04,
    caption: 'tariqys.com',
    tech:
      "Personal Project: This website! Hope you like it. It uses Gatsby.Js to serve static HTML files rather than JavaScript. Which is why it's fast. Hosted with Netlify and Cloudflare.",
    description: 'Tech: React.Js, Gatsby.Js',
    link: 'https://www.tariqys.com/',
  },

  {
    id: 'thumb2',
    thumbnail: thumb02b,
    altThumbnail: thumb02,
    caption: 'ToDo-list',
    tech:
      'Personal Project: A todo list application that utilized VueJS and a jsonplacer holder api',
    description: 'Tech: JSON place-holder API, VueJS',
    link: 'https://stupefied-hopper-845e2a.netlify.app/',
  },
]

export default class Projects extends PureComponent {
  render() {
    return (
      <div>
        <section>
          <br />
          <NoLightGallery
            images={DEFAULT_IMAGES.map(
              ({
                src,
                thumbnail,
                altThumbnail,
                caption,
                tech,
                link,
                description,
                id,
              }) => ({
                src,
                thumbnail,
                altThumbnail,
                caption,
                tech,
                link,
                description,
                id,
              })
            )}
          />

          <ul className="actions">
            <li>
              <a
                href="https://github.com/TuBl"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1pk9Fn-BNkN8GRmtrRhPG1pBmkOHxxjGk/view"
                className="button resume"
                target="_blank"
                rel="noopener noreferrer"
                id="home"
              >
                Resume
              </a>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

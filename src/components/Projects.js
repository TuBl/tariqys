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

const DEFAULT_IMAGES = [
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
    id: 'thumb4',
    thumbnail: thumb04b,
    altThumbnail: thumb04,
    caption: 'Dev-Connector',
    tech:
      "Personal Project: This website! Hope you like it. It uses Gatsby.Js to serve static HTML files rather than JavaScript. Which is why it's fast. Hosted with Netlify and Cloudflare.",
    description: 'Tech: React.Js, Gatsby.Js',
    link: 'https://agile-temple-78256.herokuapp.com/',
  },

  {
    id: 'thumb3',
    thumbnail: thumb03b,
    altThumbnail: thumb03,
    caption: 'Dev-Connector',
    tech:
      'Personal Project: A social network web app with signup, login, personal profiles, posts, comments, feed, like & unlike system and more.',
    description: 'Tech: MongoDB, Express.Js, React.Js, Redux.Js, Node.Js',
    link: 'https://agile-temple-78256.herokuapp.com/',
  },
  {
    id: 'thumb2',
    thumbnail: thumb02b,
    altThumbnail: thumb02,
    caption: 'ToDo-list',
    tech:
      'Personal Project: A todo list Web app that can add a to do, check it off as done or completely remove. done to practice NodeJS and MongoDB',
    description: 'Tech: MongoDB, Express.Js, Node.Js',
    link: 'https://github.com/TuBl/ToDo',
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
                href="https://drive.google.com/file/d/103IQT1l_GX2vtgjRSibBwjRyKu0YTOnH/view"
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

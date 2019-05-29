import React, { PureComponent } from 'react'
import Gallery from '../components/Gallery'

import ig_thumb01 from '../assets/images/ig_thumbs/01.webp'
import ig_thumb02 from '../assets/images/ig_thumbs/02.webp'
import ig_thumb03 from '../assets/images/ig_thumbs/03.webp'
import ig_thumb04 from '../assets/images/ig_thumbs/04.webp'

import alt_ig_thumb01 from '../assets/images/ig_thumbs/01.PNG'
import alt_ig_thumb02 from '../assets/images/ig_thumbs/02.PNG'
import alt_ig_thumb03 from '../assets/images/ig_thumbs/03.PNG'
import alt_ig_thumb04 from '../assets/images/ig_thumbs/04.png'

import ig_full01 from '../assets/images/ig_fulls/01.PNG'
import ig_full02 from '../assets/images/ig_fulls/02.PNG'
import ig_full03 from '../assets/images/ig_fulls/03.PNG'
import ig_full04 from '../assets/images/ig_fulls/04.png'

import book1_full from '../assets/images/book_fulls/01.png'
import book1_thumb from '../assets/images/book_thumbs/01.webp'
import alt_book1_thumb from '../assets/images/book_thumbs/01.png'

import book2_full from '../assets/images/book_fulls/02.jpg'
import book2_thumb from '../assets/images/book_thumbs/02.webp'
import alt_book2_thumb from '../assets/images/book_thumbs/02.png'

import book3_full from '../assets/images/book_fulls/03.jpg'
import book3_thumb from '../assets/images/book_thumbs/03.webp'
import alt_book3_thumb from '../assets/images/book_thumbs/03.png'

import book4_full from '../assets/images/book_fulls/04.PNG'
import book4_thumb from '../assets/images/book_thumbs/04.webp'
import alt_book4_thumb from '../assets/images/book_thumbs/04.png'

const BOOK_IMAGES = [
  {
    src: book1_full,
    thumbnail: book1_thumb,
    altThumbnail: alt_book1_thumb,
  },
  {
    src: book2_full,
    thumbnail: book2_thumb,
    altThumbnail: alt_book2_thumb,
  },
  {
    src: book3_full,
    thumbnail: book3_thumb,
    altThumbnail: alt_book3_thumb,
  },
  {
    src: book4_full,
    thumbnail: book4_thumb,
    altThumbnail: alt_book4_thumb,
  },
]

const IG_IMAGES = [
  {
    src: ig_full01,
    thumbnail: ig_thumb01,
    altThumbnail: alt_ig_thumb01,
  },
  {
    src: ig_full02,
    thumbnail: ig_thumb02,
    altThumbnail: alt_ig_thumb02,
  },
  {
    src: ig_full03,
    thumbnail: ig_thumb03,
    altThumbnail: alt_ig_thumb03,
  },
  {
    src: ig_full04,
    thumbnail: ig_thumb04,
    altThumbnail: alt_ig_thumb04,
  },
]

export default class Life extends PureComponent {
  render() {
    return (
      <div>
        <section>
          <h2 style={{ textDecoration: 'underline' }}>Instagram Feed</h2>
          <p>I occasionally blog on instagram.</p>
          <span style={{ fontSize: '0.85em' }}>Click for full photo</span>
          <Gallery
            images={IG_IMAGES.map(
              ({ src, thumbnail, altThumbnail, caption, description }) => ({
                src,
                thumbnail,
                altThumbnail,
                caption,
                description,
              })
            )}
          />
          <ul className="actions">
            <li>
              <a
                href="https://www.instagram.com/tariqys95/"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
                id="instag"
              >
                Instagram
              </a>
            </li>
          </ul>
          <h2 style={{ textDecoration: 'underline' }}>Books I Recommend</h2>
          <p>
            I enjoy learning about human psychology. I recommend these books to
            anyone!
          </p>
          <span style={{ fontSize: '0.85em' }}>Click for full photo</span>
          <Gallery
            images={BOOK_IMAGES.map(
              ({ src, thumbnail, altThumbnail, caption, description }) => ({
                src,
                thumbnail,
                altThumbnail,
                caption,
                description,
              })
            )}
          />
        </section>
      </div>
    )
  }
}

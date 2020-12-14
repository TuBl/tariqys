/* eslint-disable */

import React from 'react'

import Layout from '../components/layout'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

import AnchorLink from 'react-anchor-link-smooth-scroll'

class HomeIndex extends React.PureComponent {
  constructor() {
    super()

    this.state = {
      name: '',
      message: '',
      renderState: <Projects />,
      addedTopButton: false,
    }

    this.onClick = this.onClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)

    this.projectsRef = React.createRef()
    this.contactRef = React.createRef()
    this.topRef = React.createRef()
  }

  onClick(e, component) {
    if (component === 'Contact') {
      this.projectsRef.current.classList.remove('work')
      this.contactRef.current.classList.add('contact')
    } else if (component === 'Projects') {
      this.projectsRef.current.classList.add('work')
      this.contactRef.current.classList.remove('contact')
    }

    this.setState({ renderState: e })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    if (!this.state.addedTopButton && window.scrollY > '800') {
      this.topRef.current.classList.add('showButton')
      this.topRef.current.classList.remove('animateHide')
      this.setState({ addedTopButton: true })
    }

    if (this.state.addedTopButton && window.scrollY < '800') {
      this.topRef.current.classList.remove('showButton')
      this.topRef.current.classList.add('animateHide')
      this.setState({ addedTopButton: false })
    }
  }

  render() {
    return (
      <Layout>
        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                {'{'} One step closer to your dream site 💻 {'}'}
              </h2>
              <p>
                I'm a Full-stack developer with extensive experience in building
                beautiful, responsive Websites. I have 2 years of experience of
                Full-stack development. My goal is to get you closer to your
                dream site, whether it is a Stunning landing page, a profitable
                e-commerce platform or a complex Full-stack application. I also
                provide other services such as research, API Testing and
                micro-services / packages development. Let's make something for{' '}
                <span
                  style={{
                    textDecoration: 'underline',
                    color: 'rgba(0, 0, 0, 0.91)',
                  }}
                >
                  you?
                </span>
              </p>
            </header>
            <ul className="actions" style={{ justifyContent: 'center' }}>
              <li>
                <a
                  ref={this.projectsRef}
                  id="work"
                  href="javascript:void(0)"
                  className="button work"
                  onClick={() => {
                    this.onClick(<Projects />, 'Projects')
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  ref={this.contactRef}
                  href="javascript:void(0)"
                  className="button"
                  id="hire"
                  onClick={() => {
                    this.onClick(<Contact />, 'Contact')
                  }}
                >
                  Contact me!
                </a>
              </li>
            </ul>
          </section>
          {this.state.renderState}
          <AnchorLink href="#main" target="_blank" rel="noopener noreferrer">
            <i
              className="topButton animateHide fa fa-angle-up"
              ref={this.topRef}
              aria-label="topButton"
            />
          </AnchorLink>
        </div>
        <ul className="copyright actions">
          <li>
            &copy; {new Date().getFullYear()} Tariq Elmughrabi &nbsp; | &nbsp;
            Made with{' '}
            <span role="img" aria-label="coffee" style={{ fontSize: '1.6em' }}>
              ☕
            </span>
            &nbsp; | &nbsp; Design by{' '}
            <a
              href="https://html5up.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML5 UP (CC BY 3.0 license)
            </a>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default HomeIndex

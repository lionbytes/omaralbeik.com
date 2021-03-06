// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import PostCell from '../blog/post-cell';

// Routing & Links
import {Link} from 'react-router-dom';
import {blogLink} from '../../links';

// Strings
import {homeStrings} from '../../strings';

class LatestBlogPosts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  }

  render() {
    const {posts} = this.props;
    const sortedPosts = posts.sort((p1, p2) => (new Date(p2.published_at).getTime() - new Date(p1.published_at).getTime()))
    return (
      <div className="container-wrap">
        <section id="blogs-sec" className="container">
          <header className="sec-header">
            <h1>
              <Link to={blogLink.url}>{homeStrings.blogPosts}</Link>
            </h1>
          </header>
          <div className="sec-body">
            <ul className="home-blog-list list-unstyled inline-list row">
              {sortedPosts.map((p, i) => (<PostCell key={p.id} mobHidden={i > 0} post={p}/>))}
            </ul>
          </div>
          <footer className="sec-footer">
            <Link to={blogLink.url}>{homeStrings.moreArticles}</Link>
          </footer>
        </section>
      </div>
    )
  }
}

export default LatestBlogPosts;

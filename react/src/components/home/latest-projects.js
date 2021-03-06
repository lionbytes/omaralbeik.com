// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import ProjectCell from '../projects/project-cell';

// Routing & Links
import {Link} from 'react-router-dom';
import {projectsLink} from '../../links';

// Strings
import {homeStrings} from '../../strings';

class LatestProjects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired
  }

  render() {
    const {projects} = this.props;
    const sortedProjects = projects.sort((p1, p2) => (new Date(p2.released_at).getTime() - new Date(p1.released_at).getTime()));
    return (
      <div className="container-wrap">
        <section id="projects-sec" className="container">
          <header className="sec-header">
            <h1><Link to={projectsLink.url}>{homeStrings.latestProjects}</Link></h1>
          </header>
          <div className="sec-body">
            <ul className="home-project-list list-unstyled list-inline row thumbnails-hfixed transit-all">
              {sortedProjects.map(p => (<ProjectCell key={p.id} project={p}/>))}
            </ul>
          </div>
          <footer className="sec-footer">
            <Link to={projectsLink.url}>{homeStrings.moreProjects}</Link>
          </footer>
        </section>
      </div>
    )
  }
}

export default LatestProjects;

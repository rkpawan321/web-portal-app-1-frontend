import React from 'react';

import ProjectPage from '../../components/project';

class ProjectLayout extends React.Component {

	render() {
		return (
				<ProjectPage {...this.props} />
		)
	}
}

export default ProjectLayout;

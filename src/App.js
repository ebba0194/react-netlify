import React, { Component } from 'react';
import PortfolioItem from './components/PortfolioItem/PortfolioItem';

import { projectData } from './staticData/projects';
class App extends Component {
    render() {
        return (
            <div className="bg-gray-900">
                <div className="container max-w-6xl mx-auto">
                    <div class="px-16 pt-16 text-gray-50">
                        <h3 class="font-title text-4xl font-light">Here's some of my work.</h3>
                    </div>
                    <div class="p-16 grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8">
                        {projectData.map((project) => (
                            <div key={project.title}>
                                <PortfolioItem project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

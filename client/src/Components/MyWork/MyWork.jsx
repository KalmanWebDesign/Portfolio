import React, { useState } from 'react';
import './MyWork.css';
import decoration from '../../assets/instructional-web-design-development-services-deco.png';
import mywork_data from '../../assets/mywork_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MyWork = () => {
    const [showMore, setShowMore] = useState(false);
    const [visibleProjects, setVisibleProjects] = useState(3); // initial number of visible projects

    const toggleShowMore = () => {
        setShowMore(!showMore);
        setVisibleProjects(showMore ? 3 : mywork_data.length); // toggle between initial number and all projects
    };

    return (
        <div id="work" className="mywork">
            <div className="spacer"></div>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={decoration} alt="instructional designer and web developer decoration" />
            </div>
            <div className="mywork-container">
                {mywork_data.slice(0, visibleProjects).map((work, index) => (
                    <div key={index}>
                        <h4 className='work-name'>{work.w_name}</h4>
                        <a href={work.w_href} target="_blank" rel="noopener noreferrer">
                            <img key={index} src={work.w_img} alt={`work-${index}`} />
                        </a>
                    </div>
                ))}
            </div>
            <div className="mywork-showmore" onClick={toggleShowMore}>
                <p>{showMore ? 'Show Less' : 'Show More'}</p>
                <FontAwesomeIcon icon={showMore ? faArrowLeft : faArrowRight} />
            </div>
        </div>
    );
};

export default MyWork;
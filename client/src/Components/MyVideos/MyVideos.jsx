import React, { useState } from 'react';
import './MyVideos.css';
import decoration from '../../assets/instructional-web-design-development-services-deco.png';
import myvideos_data from '../../assets/myvideos_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MyVideos = () => {
    const [showMore, setShowMore] = useState(false);
    const [visibleProjects, setVisibleProjects] = useState(3); // initial number of visible projects

    const toggleShowMore = () => {
        setShowMore(!showMore);
        setVisibleProjects(showMore ? 3 : myvideos_data.length); // toggle between initial number and all projects
    };

    return (
        <div id="videos" className="myvids">
            <div className="spacer"></div>
            <div className="myvids-title">
                <h1>My Latest Videos</h1>
                <img src={decoration} alt="instructional designer and web developer decoration" />
            </div>
            <div className="myvids-container">

                {myvideos_data.slice(0, visibleProjects).map((vids, index) => (
                    <div key={index}>
                        <h4 className='myvids-name'>{vids.vid_name}</h4>
                        <iframe src={vids.vid_link} title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
                    </div>

                ))}

            </div>
            <div className="myvids-showmore" onClick={toggleShowMore}>
                <p>{showMore ? 'Show Less' : 'Show More'}</p>
                <FontAwesomeIcon icon={showMore ? faArrowLeft : faArrowRight} />
            </div>
        </div>
    );
};

export default MyVideos;
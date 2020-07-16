import React from 'react';
import { Col } from '../../components';

const WorkItem = ({item, handle, index}) => {
    return (
        <Col size="col-md-4 col-12">
            <div className="work-item" onClick={() => handle(true, index)}>
                <img className="work-item__background" src={`img/${item.img}`} alt={item.title} />
                <div className="work-item__overlay"></div>

                <div className="work-item__text">
                    <h1>
                        {item.title}
                    </h1>

                    <h5>
                        {item.work}
                    </h5>
                </div>
            </div>
        </Col>
    )
};

export default WorkItem;
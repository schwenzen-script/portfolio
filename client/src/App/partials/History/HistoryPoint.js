import React from 'react';
import { Row, Col } from '../../components';

const HistoryPoint = ({event}) => {
    return (
        <Row extra="d-flex justify-content-center">
            <Col size="col-12 col-md-8 history-point">
                <div className="history-point__date">
                    <span>
                        <p>{event.start}</p>
                        <p className={`${event.end === "HEDEN" ? ('end-small') : ('')}`}>{event.end}</p>
                    </span>
                </div>
                <div className="history-point__route">
                    <div className="history-point__route--point"></div>
                    <div className="history-point__route--line"></div>
                </div>

                <div className="history-point__text">
                    <span>
                        <h4 className="history-point__text--title">
                            {event.title}
                        </h4>

                        <h5 className="history-point__text--subtitle">
                            {event.function}
                        </h5>

                        <p className={`history-point__text--content`}>

                            {event.content}
                        </p>
                    </span>
                </div>
            </Col>
        </Row>
    )
};

export default HistoryPoint;
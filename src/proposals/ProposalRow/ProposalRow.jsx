import React from "react";
import classNames from "classnames";

import "./ProposalRow.css";

const withoutEventDefault = (callback) =>
    event => {
        event.preventDefault();
        callback();
    };

const ProposalRow = ({ proposal, onStatusUpdate }) => {
    const { id, title, status, speaker, category } = proposal;

    const changeLabel=()=>{
        if (status === 'accepted') return'ProposalRow--accepted'
        else if (status === 'rejected') return'ProposalRow--rejected'
        else return 'ProposalRow--unknown'
    }

    return (
        <div data-testid={`proposal-id-${id}`} className={classNames(`ProposalRow ${changeLabel()}`)}>
            <div className="ProposalsRow__status_indicator"/>
            <div className="ProposalsRow__title">
                {title}
            </div>
            <div className="ProposalsRow__speaker">
                speaker: {speaker}
                </div>
            <div className="ProposalsRow__category">
                category: {category}
            </div>
            <div className="ProposalsRow__status">
                status: {status}
            </div>
            <button disabled={status==='accepted'} className="ProposalsRow__accept_button">
                Accept
            </button>
            <button
                disabled={status!=='accepted'}
                className="ProposalsRow__reject_button"
                onClick={withoutEventDefault(() => onStatusUpdate(id, "rejected"))}
            >
                Reject
            </button>
        </div>
    );
};

export default ProposalRow;

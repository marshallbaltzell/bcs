import React from 'react';
import { Dialog } from '../ui/index.js';
import LinearProgress from '@material-ui/core/LinearProgress';

const QuoteDialog = (props) => {
    return (
        <Dialog {...props}>
            <div className="elfsight-app-753dbeb6-0308-43bd-9f3a-e38221bdfcec">
                <LinearProgress />
            </div>
        </Dialog>
    );
}

export default QuoteDialog;
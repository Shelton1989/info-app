import React from 'react';
import Typrography from '@material-ui/core/Typography';

const Title = () => (
    <div>
        <Typrography variant="title" gutterBottom>
            Weather
        </Typrography>
        <Typrography variant="body1">
            Enter a different city below to check results.
        </Typrography>
    </div>
)

export default Title;
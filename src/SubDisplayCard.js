import React from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function SubDisplayCard({sub,selectedFrequency}) {

const mapping = {
  Day:"dailyFees",
  Month:"monthlyFees",
  Week:"weeklyFees",
  Year:"yearlyFees"
}

  return <div>
      {/* <h5>{sub.subName}</h5>
      <h6>{sub.subAmount}</h6> */}
        <Card style={{backgroundColor:sub.colour}} sx={{ minWidth: 275 }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{sub.subName}</Typography>
            <Typography sx={{ fontSize: 14 }} variant='h5' gutterBottom>{sub[mapping[selectedFrequency]]} per {selectedFrequency}</Typography>
            </Card>
  </div>;
}

import React from 'react';

import { 
    Card, 
    CardImgOverlay,
    CardImg, 
    CardTitle
  } from 'reactstrap';

function Tile({data}) {

    return (
      <Card inverse>
        <CardImg top  width="100%" src={data.url} alt={data.name} />
        <CardImgOverlay>
          <CardTitle>{data.name}</CardTitle>
        </CardImgOverlay>
      </Card>
      
    )
}

export default Tile;
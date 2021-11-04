import { Link, Typography, styled } from '@mui/material';
import React from 'react';


const PageNotFound = ({ history }) => {
  return (
    <StyledPageNotFound className="page-not-found">
      <Typography component="h1" className="title">Page not found</Typography>
      <Typography className="text">
        <span>404</span> | The page you are looking for does not exist.
      </Typography>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link className="link" component="button" variant="body2" onClick={() => history.goBack()}>
        Go Back
      </Link>
    </StyledPageNotFound>
  );
};

const StyledPageNotFound = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '10%',
  height: '100%',
  width: '100%',

  '& .title': {
    fontWeight: 700,
    fontSize: 20
  },

  '& .text': {
    '& span': {
      fontWeight: 500
    }
  }
});

export default PageNotFound;

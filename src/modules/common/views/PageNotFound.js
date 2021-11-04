import { Link, Typography, styled } from '@mui/material';
import { Container } from 'reusables';
import React from 'react';

const PageNotFound = ({ history }) => {
  return (
    <Container>
      <StyledPageNotFound className="page-not-found">
        <Typography component="h1" className="title">Page not found</Typography>
        <Typography className="text">
          <span>404</span> | oops! page does not exist.
        </Typography>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link className="link" component="button" variant="body2" onClick={() => history.goBack()}>
          Go Back
        </Link>
      </StyledPageNotFound>
    </Container>
  );
};

const StyledPageNotFound = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '10%',
  height: '100%',
  width: '100%',

  '& .title': {
    fontWeight: 700,
    fontSize: 20
  },

  '& .text': {
    marginTop: 4,
    marginBottom: 12,
    '& span': {
      fontWeight: 500
    }
  }
});

export default PageNotFound;

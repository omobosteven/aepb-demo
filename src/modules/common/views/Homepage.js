import React from 'react';
import bgImage from 'assets/homeBckGround.svg';
import mapBackground from 'assets/mapBckgrd.svg';
import wasteMgt from 'assets/waste.svg';
import logo from 'assets/logo-text.svg';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';

const HomePage = () => {
  const classes = useStyles();

  return (
    <section className={classes.homepage}>
      <header className="header">
        <div className="headerLogo">
          <img src={logo} alt="logo.svg" />
        </div>

        <div className="headerLinks">
          <Link className="link loginLink" to="/login">
            Login
          </Link>

          <Link className="link regLink" to="/register">
            Register
          </Link>
        </div>
      </header>

      <Grid container className={classes.pageContent}>
        <Grid item className="textGrid" xs={12} lg={4}>
          <Typography variant="h1" className="title">
            AEPB Waste Management
          </Typography>

          <div className="text">
            <Typography>
              The Abuja Environmental Protection Board (AEPB) is the regulatory body
              statutorily charged with the responsibility for the protection and
              management of the FCT Environment.
            </Typography>
            <Typography>
              AEPB provides location-based waste management capabilities.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} className="imageGrid" lg={8}>
          <img src={wasteMgt} alt="frame.svg" className="img" />
        </Grid>
      </Grid>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  homepage: {
    width: '100%',
    minHeight: '100vh',
    background: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '15px 6.8% 10px',
    position: 'relative',

    '& .header': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    '& .header .headerLinks': {
      display: 'flex',
      alignItems: 'center',

      '& .link': {
        display: 'block',
        color: theme.palette.primary.light,
        textDecoration: 'none',
        fontSize: 16,

        '&.loginLink': {
          background: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          padding: '10px 16px',
          borderRadius: 8
        },

        '&.regLink': {
          marginLeft: 20
        }
      }
    }
  },

  pageContent: {
    marginTop: 40,

    '& .textGrid': {
      '& .title': {
        fontWeight: 500,
        color: theme.palette.common.white,
        fontSize: 32
      },

      '& .text .MuiTypography-root': {
        fontSize: 16,
        color: theme.palette.common.white,
        marginTop: 8,

        '&:last-of-type': {
          marginTop: 30
        }
      }
    },

    '& .imageGrid': {
      marginTop: '10%',
      background: `url(${mapBackground})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',

      '& .img': {
        width: '100%',
        height: 'auto'
      }
    }
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    textAlign: 'center',
    width: '100%',
    marginBottom: 5
  },

  '@media screen and (min-width: 540px)': {
    homepage: {
      '& .header .headerLinks': {
        '& .link.regLink': {
          marginLeft: 40
        }
      }
    }
  },

  '@media screen and (min-width: 768px)': {
    homepage: {
      paddingTop: 35
    },

    pageContent: {
      marginTop: 80,

      '& .textGrid': {
        maxWidth: 584,

        '& .title': {
          fontSize: 46,
          maxWidth: 384
        }
      }
    }
  },

  '@media screen and (min-width: 1024px)': {
    pageContent: {
      marginTop: 80,

      '& .imageGrid': {
        '& .img': {
          width: '90%'
        }
      }
    }
  },

  '@media screen and (min-width: 1280px)': {
    homepage: {
      padding: '35px 0 25px 0',
      '& .header .headerLinks': {
        '& .link.loginLink:hover': {
          background: `${theme.palette.secondary.main}F2`
        }
      },

      '& .header': {
        padding: '0 6.8% 0'
      }
    },

    pageContent: {
      marginTop: '0.3%',
      minHeight: 700,
      padding: '0 2% 0 6.8%',

      '& .textGrid': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& .title': {
          fontSize: 56,
          fontWeight: 700
        }
      },

      '& .imageGrid': {
        alignSelf: 'stretch',
        marginTop: 'unset',
        backgroundSize: '100% 100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .img': {
          width: '89%'
        }
      }
    }
  },

  '@media screen and (min-width: 1440px)': {
    pageContent: {
      marginTop: '3%'
    }
  }
}));

export default HomePage;

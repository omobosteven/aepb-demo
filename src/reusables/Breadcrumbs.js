import {
  Breadcrumbs as MuiBreadcrumbs,
  styled,
  Link,
  Typography,
  SvgIcon
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ReactComponent as SeparatorIcon } from 'assets/angle-right.svg';
import PropTypes from 'prop-types';

export const Breadcrumbs = ({ current, historyStack }) => {
  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<SvgIcon component={SeparatorIcon} viewBox="0 0 8 15" />}
    >
      {historyStack.map((stack) => (
        <Link component={RouterLink} to={stack.to} underline="none" key={stack.title}>
          {stack.title}
        </Link>
      ))}
      <Typography className="title">{current}</Typography>
    </StyledBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  current: PropTypes.node.isRequired,
  historyStack: PropTypes.arrayOf(PropTypes.object).isRequired
};

const StyledBreadcrumbs = styled(MuiBreadcrumbs)(({ theme }) => ({

  '& .MuiBreadcrumbs-separator': {
    marginTop: 4,

    '& .MuiSvgIcon-root': {
      fontSize: 12
    }
  },

  '& .MuiBreadcrumbs-li': {
    '& .MuiLink-root': {
      fontSize: 18,
      fontWeight: 400,
      color: '#605E5C',
      textTransform: 'capitalize',
    },

    '& .MuiTypography-body1.title': {
      fontWeight: 400,
      fontSize: 20,
      textTransform: 'capitalize',
      color: theme.palette.text.primary
    }
  }
}));

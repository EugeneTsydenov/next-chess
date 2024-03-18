import Typography from '@mui/material/Typography';
import { MenuItem } from '@mui/material';
import { Link } from '@/shared/ui';
import * as React from 'react';

interface DropDownMenuItemProps {
  dropDownLinkName: string;
  dropDownPath: string;
}

const DropDownItem: React.FC<DropDownMenuItemProps> = ({ dropDownLinkName, dropDownPath }) => {
  return (
    <MenuItem sx={{ padding: '0px' }}>
      <Link
        href={dropDownPath}
        color='inherit'
        sx={{
          padding: '6px 16px',
          textDecoration: 'none',
        }}
      >
        <Typography sx={{ fontSize: '14px' }}>{dropDownLinkName}</Typography>
      </Link>
    </MenuItem>
  );
};

export default DropDownItem;

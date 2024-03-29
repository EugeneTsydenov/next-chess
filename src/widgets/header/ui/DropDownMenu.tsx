import { IDropDawnLink } from '@/widgets/header/model/types/INavLinks';
import DropDownItem from '@/widgets/header/ui/DropDownItem';
import { MenuList, Paper } from '@mui/material';
import * as React from 'react';

interface DropDownMenuProps {
  dropDownLinks: IDropDawnLink[];
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ dropDownLinks }) => {
  return (
    <MenuList
      sx={{
        position: 'absolute',
        top: '100%',
        left: '0',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '170px',
        zIndex: '2',
        backgroundColor: 'primary.dark',
      }}
    >
      <Paper>
        {dropDownLinks.map(dropDawnLink => {
          return (
            <DropDownItem
              key={dropDawnLink.id}
              dropDownLinkName={dropDawnLink.dropDownLinkName}
              dropDownPath={dropDawnLink.dropDownPath}
            />
          );
        })}
      </Paper>
    </MenuList>
  );
};

export default DropDownMenu;

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SvgIcon from '@mui/material/SvgIcon';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 229,
    },
  },
};



const CustomArrowUpIcon = (props) => (
  <SvgIcon {...props}>
     <KeyboardArrowUpIcon/>
  </SvgIcon>
);

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectOptions({names,filterBy}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl style={{textAlign:"left"}} sx={{ m: 0, width: 300, mt: 0 }}>
        <Select
           sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "yellow !important",
            },
          }}

        style={{borderRadius:"8px",padding: "0px 12px",color: '#000',
          fontFamily: 'Inter',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          width: 253.198,
           }}
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput/>}
          IconComponent={CustomArrowUpIcon}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em style={{fontStyle:"normal"}} >{filterBy}</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {names.map((name,i) => (
            <MenuItem
              key={i}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
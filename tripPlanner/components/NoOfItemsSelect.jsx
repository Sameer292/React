// import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// export default function NoOfItemsSelect() {
//   const [totalnoOfItems, settotalnoOfItems] = React.useState("");

//   const handleChange = (event) => {
//     settotalnoOfItems(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl  sx={{ m: 1, minWidth: 80 }}>
//         <InputLabel   id="demo-simple-select-autowidth-label">Items</InputLabel>
//         <Select
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           value={totalnoOfItems}
//           onChange={handleChange}
//           autoWidth
//           label="totalnoOfItems"
//         >
//           <MenuItem value={1} > 1</MenuItem>
//           <MenuItem value={2}>2</MenuItem>
//           <MenuItem value={3}>3</MenuItem>
//           <MenuItem value={3}>4</MenuItem>
//           <MenuItem value={3}>5</MenuItem>
//           <MenuItem value={3}>6</MenuItem>
//           <MenuItem value={3}>7</MenuItem>
//           <MenuItem value={3}>8</MenuItem>
//           <MenuItem value={3}>9</MenuItem>
//           <MenuItem value={3}>10</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }




import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function NoOfItemsSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
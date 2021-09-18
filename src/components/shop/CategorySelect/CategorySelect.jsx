import React from 'react';
import { Link } from "react-router-dom";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const CategorySelect = () => {
    const classes = useStyles();
    const [category, setCategory] = React.useState('');
  
    const handleChange = (e) => {
      setCategory(e.target.value);
    };


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={1}><Link to={"/tienda/category/disney"}>Disney</Link></MenuItem>
          <MenuItem value={2}><Link to={"/tienda/category/heroes"}>Heroes</Link></MenuItem>
          <MenuItem value={3}><Link to={"/tienda/category/game"}>Game</Link></MenuItem>
          <MenuItem value={4}><Link to={"/tienda/category/varius"}>Varios</Link></MenuItem>
                
        </Select>
      </FormControl>
        </div>
    );
};

export default CategorySelect;
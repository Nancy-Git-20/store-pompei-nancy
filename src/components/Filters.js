import React, {useState, useContext} from 'react';
import { AppContext } from "../context/storeRewardsContext";

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 310,
    display:'inline-block'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);


function Filters() {
    const { productsFetched, comboCategory, FilterProdcts, filterTerm, OrderProdcts, filterPrice, setFilterPrice, setFilterProducts, filterProducts,
      filterAlpha, OrderAlpha} = useContext(AppContext);
    //console.log('filterAlpha --->', filterAlpha);

    const classes = useStyles();
    const [activeFilter, setActiveFilter] = useState('');

    const OrderByPrice = (orderType) => {
      ///console.log('orderType ', orderType);
      let newOrderProds = [];
      setFilterPrice(orderType);
      if(orderType === "Lowest"){
        setActiveFilter("Lowest");
        newOrderProds = filterProducts.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
      }else{
        setActiveFilter("Highest");
        newOrderProds = filterProducts.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
      }
      //console.log('orderProds ', newOrderProds);
      setFilterProducts(newOrderProds);
      
    }
    

    
    //<select onChange={(e) => getProductStore(e.target.value)}>
  return (

    <div className="UserActions">

        <div className="container">
            {productsFetched 
             ?
                (
                    <>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                            Categoría:
                            </InputLabel>
                            <Select
                            labelId="demo-simple-select-placeholder-label-label"
                            id="demo-simple-select-placeholder-label"
                            value={filterTerm}
                            onChange={(e) => FilterProdcts(e.target.value)}
                            // displayEmpty
                            className={classes.selectEmpty}
                            >
                            <MenuItem value="Todas">Todas</MenuItem>
                            {comboCategory.map((element, i) => (
                                //<option key={i} value={element}>{element}</option>
                                <MenuItem key={i} value={element}>{element}</MenuItem>
                            ))}
                            {/* <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem> */}
                            </Select>
                            <FormHelperText>Seleccionar categoría</FormHelperText>
                        </FormControl>
                        {/* <label>Categoría: </label> */}
                        {/* <select onChange={(e) => getProducts(e.target.value)}>
                            <option value="Todas"> Todas </option>
                            {comboCategory.map((element, i) => (
                                <option key={i} value={element}>{element}</option>
                            ))}
                        </select> */}
                        
                        {/* <select onChange={(e) => FilterProdcts(e.target.value)}>
                            <option value="Todas"> Todas </option>
                            {comboCategory.map((element, i) => (
                                <option key={i} value={element}>{element}</option>
                            ))}
                        </select> */}

                        <button name="Lowest" className={`BtnFilterPrice ${activeFilter === 'Lowest' ? 'active' : ''}`} onClick={(e) => OrderByPrice(e.target.name)}>Lowest price</button>
                        <button name="Highest" className={`BtnFilterPrice Lst ${activeFilter === 'Highest' ? 'active' : ''}`} onClick={(e) => OrderByPrice(e.target.name)}>Highest price</button>

                        <FormControl id="FilterAlpha" className={classes.formControl}>
                            <Typography component="div">
                                <Grid component="label" container alignItems="center" spacing={1}>
                                <Grid item>Z-A</Grid>
                                <Grid item>
                                    <AntSwitch checked={filterAlpha} onChange={(e) => OrderAlpha(e.target.checked)} name="checkedAlpha" />
                                </Grid>
                                <Grid item>A-Z</Grid>
                                </Grid>
                            </Typography>
                        </FormControl>


                        {/* <FormControl className={classes.formControl}>
                            <Typography component="div">
                                <Grid component="label" container alignItems="center" spacing={1}>
                                <Grid item>Highest price</Grid>
                                <Grid item>
                                    {/* checked={state.checkedC} * /}
                                    <AntSwitch checked={filterPrice} onChange={(e) => OrderProdcts(e.target.checked)} name="checkedC" />
                                    {/* <AntSwitch checked={state.checkedC} onChange={handleChange} name="OrderProdsEvt" /> * /}
                                </Grid>
                                <Grid item>Lowest price</Grid>
                                </Grid>
                            </Typography>
                        </FormControl> */}

                        
                        
                    </>
                )
             :  <em>cargando categorias...</em>    
            }    
        </div>
    </div>

  );
}

export default Filters;

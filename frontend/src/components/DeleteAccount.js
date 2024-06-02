import { Typography } from '@mui/material';
//import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import * as React from 'react';
import { useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import api from '../api';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import { useSnackbar } from 'notistack';



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const DeleteAccount = () => {
  
  const store = useSelector(store => store);
  
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
 
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const handleDelete = async() => {
	const {data} = await api.delete(`/admin/users/remove/${store.auth.userId}`);
	 enqueueSnackbar(data, { variant: "success" });
	 navigate(`/`);
	
	 
}
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" gutterBottom>
          Delete Your Account
        </Typography>
      </div>
     <Button onClick={handleDelete} variant="contained">Delete Account</Button>
    </div>
  );
}
export default DeleteAccount;

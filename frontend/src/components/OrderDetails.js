import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import * as React from 'react';
import Typography from '@mui/material/Typography';

import api from '../api';

const OrderDetails = () => {
	  const store = useSelector(store => store);
	  const [orders, setOrders] = React.useState({});
	  let { oid } = useParams();
	  console.log('this is' + oid);
	  const getDetails = async () => {
	      const {data} = await api.get(`orders/${oid}/details`,{
      headers: {
        'user-id': store.auth.userId,
        'Content-Type': 'application/json'
      }});
      setOrders(data);	
	}
   React.useEffect(() => {
    getDetails();
  }, []);	
  console.log(orders); 
  return (
    <div style={{border: "5px solid black"}}>
      <Typography variant="h4" gutterBottom>
        Order Details
      </Typography>
      {/*<Typography variant="h5" gutterBottom> Order Id: {orders["0"].order_id}</Typography>
      <Typography variant="h5" gutterBottom> Date of Order: {orders["2"].date_of_tran}</Typography>
      <Typography variant="h5" gutterBottom> Transaction Amount: {orders["2"].amount}</Typography>
      <Typography variant="h5" gutterBottom> Order Status(2--Delivered, 1--Dispatched, 0--Cancelled): {orders["2"].status}</Typography>
      <Typography variant="h5" gutterBottom> Transaction Id: {orders["0"].transaction_id}</Typography>
      <Typography variant="h5" gutterBottom> Address: {orders["1"].name}, {orders["1"].house_address}, {orders['1'].city}-{orders["1"].pincode}</Typography>*/}
      <Typography variant="h5" gutterBottom><pre>{JSON.stringify(orders,null,2)}</pre></Typography>
    </div>
  );
}
export default OrderDetails;
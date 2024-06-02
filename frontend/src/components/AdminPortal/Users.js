import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import api from '../../api';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NewUserModal from './NewUserModal';
import EditUserModal from './NewUserModal';
import { useSnackbar } from 'notistack';

const styles = {
  // this group of buttons will be aligned to the right side
  toolbarButtons: {
    display: 'flex',
  },
  BoxStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
};

const toDate = (d) => {
  var t = d.split(/[- T :]/);
  var n = new Date(Date.UTC(t[0], t[1] - 1, t[2]));
  return n.getDate() + '/' + (n.getMonth() + 1) + '/' + n.getFullYear()
}

const columns = [
  { field: 'id', headerName: 'SNo.', width: 50 },
  { field: 'uid', headerName: 'id', width: 50 },
  { field: 'username', headerName: 'Username', width: 200 },
  { field: 'first_name', headerName: 'First Name', width: 200 },
  { field: 'last_name', headerName: 'Last Name', width: 200 },
  { field: 'date_joined', headerName: 'Date Joined', width: 200 },
  /*{
    field: 'stock',
    headerName: 'Stock',
    width: 70,
  },
  {
    field: 'date_added',
    headerName: 'Date Added',
    width: 100,
  },
  {
    field: 'rating',
    headerName: 'Average Rating',
    width: 120,
  },
  {
    field: 'category_id',
    headerName: 'Category Code',
    width: 150,
  },*/
];

const initForm = {
  id: null,
  uid:null,
  username:"",
  first_name:"",
  last_name:"",
  date_joined:""
};

const Users = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [form, setForm] = React.useState(initForm)
  const store = useSelector(store => store);
  const [orders, setOrders] = React.useState([]);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const getData = async () => {
    const { data } = await api.get(`/admin/users`, {}, {
      headers: {
        'user-id': store.auth.userId,
        'Content-Type': 'application/json'
      }
    });
    const mappedData = data.map((item, index) => {
      return {
        id: (index+1),
        uid: item.id,
        username:item.username,
        first_name:item.first_name,
        last_name:item.last_name,
        date_joined:item.date_joined 
      }
    })
    setOrders(mappedData);
  }
 /* const handleUpdate = async () => {
    const data = orders[selectionModel[0]];
    setForm({
      ...form,
       id:data.id,
       uid:data.uid,
       username:data.username,
       date_joined:data.date_joined
    }
    )
    setEditModal(!editModal);
  }*/
  const handleDelete = async () => {
    const uid = orders[selectionModel[0]-1].uid;
    const { data } = await api.delete(`/admin/users/remove/${uid}`);
    /*,{
      headers: {
        'user-id': store.auth.userId,
        'Content-Type': 'application/json'
      }
    }*/ 
    enqueueSnackbar(data, { variant: "success" });
    getData();
  };
  React.useEffect(() => {
    if (store.cats.uploadUrl) setOpen(!open);
    getData();
  }, []);
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <Stack sx={{ m: 1, display: 'flex', justifyContent: 'space-around' }} spacing={2} direction="row">
        
        <Button onClick={handleDelete} disabled={selectionModel.length !== 1} variant="contained">DELETE</Button>
        
      </Stack>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={orders}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
        />
      </div>
      {/*<NewUserModal isEdit={false} form={form} setForm={setForm} open={open} setOpen={setOpen} />
      <EditUserModal isEdit={true} form={form} setForm={setForm} open={editModal} setOpen={setEditModal} />*/}
    </div>
  );
}
export default Users;
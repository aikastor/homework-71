import React, {Fragment, useState} from 'react';
import {ListItem} from "@material-ui/core/";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const MenuItem = (props) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [itemData, setItemData] = useState(props.item);

  const openDeleteModal = () => {
    setDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const openEditModal = () => {
    setEditModal(true);
  };
  const closeEditModal = ()=> {
    setEditModal(false);
  };
  const handleChange = (e)=> {
    e.persist();
    const value = e.target.value;

    setItemData(prevState => ({
      ...prevState,
      [e.target.name]: value
    }))
  };
  return (
      <Fragment>
        <ListItem key={props.id}>
          <ListItemAvatar>
            <img src={props.item.image}  style={{width: '80px', height: '80px', objectFit: 'cover'}} alt={props.item.name}/>
          </ListItemAvatar>
          <ListItemText style={{marginLeft: '10px'}}
              primary={props.item.name}
              secondary={'price: ' + props.item.price + ' KGS'}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={openDeleteModal}>
              <DeleteIcon />
            </IconButton>
            <IconButton edge="end" onClick={openEditModal}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />

        <Dialog
            open={deleteModal}
            onClose={closeDeleteModal}
        >
          <DialogTitle>{"Delete item?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Selected item: {props.item.name}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDeleteModal} color="primary">
              NO
            </Button>
            <Button onClick={()=>props.delete(props.id)} color="primary" autoFocus>
              YES
            </Button>
          </DialogActions>
        </Dialog>
        {/*-------------EDIT MODAL-----------*/}
        <Dialog
            open={editModal}
            onClose={closeEditModal}
        >
          <DialogTitle>{"Edit data"}</DialogTitle>
          <DialogContent>
            <form onSubmit={e=>e.preventDefault()}>
              <TextField required name="name"
                         label="Enter item name"
                         value={itemData.name}
                         onChange={e=>handleChange(e)}/>
              <TextField
                  required name="price"
                  label="Enter item price"
                  type="number"
                  value={itemData.price}
                  onChange={handleChange}/>
              <TextField
                  required name="image"
                  label="Enter URL to image"
                  value={itemData.image}
                  onChange={handleChange}/>
              <Button onClick={()=>props.edit(props.id, itemData)} color="primary" autoFocus>
                EDIT
              </Button>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeEditModal} color="primary">
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
  );
};

export default MenuItem;
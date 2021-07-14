import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    textAlign: 'center'
  },
}));

const LayoutAusentList = (props) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className="content__list">
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" className={classes.title}>
            Lista de Funcionarios Ausentes
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {props.list.length > 0 && props.list.map((item) => (
                  <ListItem key={item.id}>
                    <div>
                        <Checkbox checked={item.ausent} onClick={() => props.handleCheck(item)} />
                    </div>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: item.working ? '#4caf50' : '#bdbdbd' }}>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                        secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction onClick={() => props.handleDeleteEmployee(item.id)}>
                        <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LayoutAusentList

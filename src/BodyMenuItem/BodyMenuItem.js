import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import laptop from '../../img/laptop.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

export default function AutoGrid () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={3}>
            <Grid item>
              <p>
                Explore Cyber lnalnflanlfnalfnlanfl
              </p>
            </Grid>
            <Grid item>
              <img src={laptop} style={{ maxWidth: '600px' }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={3}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item xs>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

import { Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { FC } from 'react'

interface NewMonitorViewProps {}

const NewMonitorView: FC<NewMonitorViewProps> = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={5}>
            {/* select type */}

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Age'>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* friendly name */}
            <Grid item xs={12} md={6}>
              <TextField fullWidth label='Friendly Name' />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default NewMonitorView

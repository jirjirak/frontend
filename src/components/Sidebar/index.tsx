import { Box, ButtonGroup, Drawer, IconButton, SwipeableDrawer, TextField, Typography, useTheme } from '@mui/material'
import { FC } from 'react'

import TaskAltIcon from '@mui/icons-material/TaskAlt'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import SearchIcon from '@mui/icons-material/Search'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const theme = useTheme()

  const sidebarWidth = 500

  return (
    <>
      <SwipeableDrawer
        className='layout-vertical-nav'
        anchor='right'
        variant={false ? 'temporary' : 'permanent'}
        PaperProps={{
          sx: {
            p: 4,
            width: sidebarWidth,
            borderRight: 1,
            borderColor: 'divider',
            backgroundColor: theme.palette.background.default
          }
        }}
        sx={{
          width: sidebarWidth
        }}
      >
        {/* header */}
        <Box sx={{ mb: 8, display: 'flex', alignItems: 'center' }}>
          <TextField fullWidth label='search' />

          <IconButton sx={{ ml: 2 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            border: 1,
            p: 4,
            borderColor: 'divider',
            borderRadius: 1,
            display: 'flex',
            gap: 3,
            justifyContent: 'space-between',
            alignItems: 'center',

            transition: '0.2s',

            backgroundColor: '#d0f2d0',

            '&:hover': {
              boxShadow: 5
            }
          }}
        >
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <TaskAltIcon color='success' />
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              Doctop <Typography variant='body2'>( http )</Typography>
            </Typography>
          </Box>

          <Typography variant='body2'>77 day</Typography>

          <ButtonGroup size='small'>
            <IconButton>
              <RemoveRedEyeIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </ButtonGroup>
        </Box>
      </SwipeableDrawer>
    </>
  )
}

export default Sidebar

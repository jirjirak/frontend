import { FC } from 'react'
import { Box, Divider, IconButton, SwipeableDrawer, TextField, Typography, useTheme } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import MonitorCard from 'src/components/Sidebar/MonitorCard'
import CancelSharpIcon from '@mui/icons-material/CancelSharp'
import { useSettings } from 'src/@core/hooks/useSettings'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const theme = useTheme()
  const sidebarWidth = 500

  const { sideBarIsOpen, setSideBarIsOpen } = useSettings()

  const sideBarVariant = theme.breakpoints.up('md') ? 'persistent' : 'temporary'

  return (
    <>
      <SwipeableDrawer
        className='layout-vertical-nav'
        anchor='right'
        variant={sideBarVariant}
        open={sideBarIsOpen || sideBarVariant === 'persistent'}
        onOpen={() => setSideBarIsOpen(true)}
        onClose={() => setSideBarIsOpen(false)}
        PaperProps={{
          sx: {
            p: 4,
            width: {
              md: sidebarWidth,
              xs: '100%'
            },
            borderRight: 1,
            borderColor: 'divider',
            backgroundColor: theme.palette.background.default
          }
        }}
        sx={{
          width: {
            md: sidebarWidth,
            xs: '100%'
          }
        }}
      >
        {/* header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconButton color='error' onClick={() => setSideBarIsOpen(false)}>
            <CancelSharpIcon />
          </IconButton>

          <Typography variant='button' sx={{ fontWeight: 700 }}>
            Monitors
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
          <TextField size='small' fullWidth label='search' />

          <IconButton sx={{ ml: 2 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* monitors */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
          <MonitorCard />
        </Box>
      </SwipeableDrawer>
    </>
  )
}

export default Sidebar

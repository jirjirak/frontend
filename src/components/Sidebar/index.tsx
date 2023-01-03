import { Box, IconButton, SwipeableDrawer, TextField, useTheme } from '@mui/material'
import { FC, useState } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import MonitorCard from 'src/components/Sidebar/MonitorCard'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const theme = useTheme()
  const sidebarWidth = 500

  const [open, setOpen] = useState(false)

  return (
    <>
      <SwipeableDrawer
        keepMounted
        className='layout-vertical-nav'
        anchor='right'
        variant={false ? 'temporary' : 'permanent'}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
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
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
          <TextField fullWidth label='search' />

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

import { FC } from 'react'
import { Box, ButtonGroup, Chip, IconButton, Link, Tooltip, Typography } from '@mui/material'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import SmallTimeline from 'src/components/SmallTimeline'
import CloudIcon from '@mui/icons-material/Cloud'

interface MonitorCardProps {}

const MonitorCard: FC<MonitorCardProps> = () => {
  return (
    <>
      <Box
        sx={{
          border: 1,
          borderColor: 'divider',
          borderRadius: 1,
          pt: 1
        }}
      >
        {/*  */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            alignItems: 'center',
            justifyContent: 'space-between',

            transition: '0.2s',
            px: 2
          }}
        >
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <CloudIcon color='success' />

            <Tooltip title={'https://doctop.com'}>
              <Link href='/ali' sx={{ color: 'text.primary', fontSize: 15 }}>
                telegram
              </Link>
            </Tooltip>

            <Chip size='small' label='http' />
          </Box>

          <ButtonGroup size='small'>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </ButtonGroup>
        </Box>

        {/*  */}
        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', px: 2 }}>
          <Typography variant='body2' sx={{ fontWeight: 500 }}>
            uptime
          </Typography>

          <Box sx={{ mt: -2, width: '100%' }}>
            <SmallTimeline />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default MonitorCard

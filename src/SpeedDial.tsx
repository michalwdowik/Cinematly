import * as React from 'react'
// import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined'
import SaveIcon from '@mui/icons-material/Save'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
// import EditIcon from '@mui/icons-material/Edit'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
]

const OpenIconSpeedDial = () => (
    // <Box
    //   sx={{
    //     height: 320,
    //     transform: 'translateZ(0px)',
    //     flexGrow: 1,
    //   }}
    // >
    <SpeedDial
        FabProps={{
            sx: {
                bgcolor: '#fc9803',
                '&:hover': {
                    bgcolor: '#fc7b03',
                    transitionDelay: '0.2s',
                    transform: 'scale(1.2)',
                },
            },
        }}
        ariaLabel="SpeedDial openIcon example"
        sx={{
            // transition: 'background-color 0.5s ease',
            position: 'fixed',
            bottom: 50,
            right: 50,
        }}
        //   icon={<FormatListBulletedIcon />}

        icon={<SpeedDialIcon openIcon={<AccessTimeIcon />} />}
    >
        {actions.map((action) => (
            <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
            />
        ))}
    </SpeedDial>
    // </Box>
)

export default OpenIconSpeedDial

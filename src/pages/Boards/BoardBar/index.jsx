import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '& .hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="DinhHung MERN Stack Board"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/ Private WorkSpace"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to google drive"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={ <PersonAddIcon /> }>Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title="Son Lord">
            <Avatar
              alt="Son Lord"
              src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/345854008_566903088900934_6744487900982757361_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=TRay1Tgte_gAX-4ol6K&_nc_ht=scontent.fdad1-4.fna&oh=00_AfBrVv-VwoAcQIQ91aLbYp2faX2vBznxXLghraCg8vLTvQ&oe=64E21424"
            />
          </Tooltip>
          <Tooltip title="Haaland">
            <Avatar
              alt="Haaland"
              src="https://static.bongda24h.vn/medias/original/2022/07/16/Anh_Erling_Haaland_1_1607165511.jpg"
            />
          </Tooltip>
          <Tooltip title="Messi">
            <Avatar
              alt="Messi"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKq5kodOT2CO7AfvVGuRxbOPoIv-q8xhNXuA&usqp=CAU"
            />
          </Tooltip>
          <Tooltip title="Messi">
            <Avatar
              alt="Messi"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKq5kodOT2CO7AfvVGuRxbOPoIv-q8xhNXuA&usqp=CAU"
            />
          </Tooltip>
          <Tooltip title="Messi">
            <Avatar
              alt="Messi"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKq5kodOT2CO7AfvVGuRxbOPoIv-q8xhNXuA&usqp=CAU"
            />
          </Tooltip>
          <Tooltip title="Messi">
            <Avatar
              alt="Messi"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKq5kodOT2CO7AfvVGuRxbOPoIv-q8xhNXuA&usqp=CAU"
            />
          </Tooltip>
          <Tooltip title="Messi">
            <Avatar
              alt="Messi"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKq5kodOT2CO7AfvVGuRxbOPoIv-q8xhNXuA&usqp=CAU"
            />
          </Tooltip>
          <Tooltip title="Messi">
            <Avatar
              alt="Messi"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKq5kodOT2CO7AfvVGuRxbOPoIv-q8xhNXuA&usqp=CAU"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar

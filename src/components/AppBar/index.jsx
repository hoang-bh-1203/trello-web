import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
function AppBar () {
  return (
    <>
      <Box sx={{
        backgroundColor: 'primary.light',
        display: 'flex',
        alignItems: 'center',
        height: (theme) => theme.trello.appBarHeight,
        width: '100%'
      }}>
        <ModeSelect />
      </Box>
    </>
  )
}

export default AppBar
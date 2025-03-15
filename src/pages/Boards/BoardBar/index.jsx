import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <>
      <Box sx={{
        backgroundColor: 'primary.dark',
        display: 'flex',
        alignItems: 'center',
        height: (theme) => theme.trello.boardBarHeight,
        width: '100%'
      }}>
        Board Bar
      </Box>
    </>
  )
}

export default BoardBar
import { Container, Typography, Box, Stack } from "@mui/material";
import { flexbox } from "@mui/system";


export default function Leaderboardz() {
  
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>Leaderboardz</Typography>
      <Typography variant="subtitle1" align="center">Statics</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Stack paddingX={4} paddingY={1} marginX={2} sx={{ border: '1px solid  #011335', borderRadius: '1rem' }}>
          <Typography align="center">Collections</Typography>
          <Typography align="center">5</Typography>
        </Stack>
        <Stack paddingX={4} paddingY={1} marginX={2} sx={{ border: '1px solid  #011335', borderRadius: '1rem' }}>
          <Typography align="center">Collections</Typography>
          <Typography align="center">5</Typography>
        </Stack>
        <Stack paddingX={4} paddingY={1} marginX={2} sx={{ border: '1px solid  #011335', borderRadius: '1rem' }}>
          <Typography align="center">Collections</Typography>
          <Typography align="center">5</Typography>
        </Stack>
      </Box>
    </Container>
  );
}
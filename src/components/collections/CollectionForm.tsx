import { Box, Typography, Button, ToggleButtonGroup, ToggleButton, Grid, InputLabel, Input, FormHelperText } from "@mui/material";
import { useState } from "react";

const textGrey = {
  color: '#B3B5BD',
  paddingBottom: '0.5rem'
};

const inputStyle = {
  color: '#B3B5BD',
  background: '#272832'
}

export default function CollectionForm() {
  const [display, setDisplay] = useState<string | null>('general');
  
  const handleDisplay = (
    event: React.MouseEvent<HTMLElement>,
    newDisplay: string | null,
  ) => {
    setDisplay(newDisplay);
  };

  return (
    <>
      <ToggleButtonGroup
        value={display}
        exclusive
        onChange={handleDisplay}
      >
        <ToggleButton value={'general'}>General Description</ToggleButton>
        <ToggleButton value={'metadata'}>Metadata</ToggleButton>
      </ToggleButtonGroup>
      { display == 'general' ?
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <InputLabel sx={textGrey} htmlFor="my-input">Policy</InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel sx={textGrey} htmlFor="my-input">Artist Name</InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel sx={textGrey} htmlFor="my-input">Artboard Title</InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel sx={textGrey} htmlFor="my-input">Location</InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel sx={textGrey} htmlFor="my-input">Supply </InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={textGrey} htmlFor="my-input">Artboard Description </InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth multiline rows={7} />
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={textGrey} htmlFor="my-input">About me</InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth multiline rows={7} />
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={textGrey} htmlFor="my-input">Minting Details</InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth multiline rows={7} />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputLabel sx={textGrey} htmlFor="my-input">Twitter</InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputLabel sx={textGrey} htmlFor="my-input">Discord</InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputLabel sx={textGrey} htmlFor="my-input">Instagram</InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={textGrey} htmlFor="my-input">Upload your Artboard image</InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth multiline rows={7} />
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={textGrey} htmlFor="my-input">Upload your Artboard location image</InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth multiline rows={7} />
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={textGrey} htmlFor="my-input">Upload your personal/working image</InputLabel>
            <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth multiline rows={7} />
          </Grid>
        </Grid>
      :
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="my-input">Art Name</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="my-input">Artist Name</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="my-input">Artist Instagram</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
            </Grid>
            <Grid item xs={12} md={6} />
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="my-input">Mural City</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="my-input">Mural Country</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <InputLabel sx={textGrey} htmlFor="my-input">Mural Description</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth multiline rows={7} />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="my-input">NFT Rarity</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="my-input">NFT Supply</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <InputLabel sx={textGrey} htmlFor="my-input">Project Description</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth multiline rows={7} />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="my-input">Publisher</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="my-input">Publisher Twitter</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="my-input">Publisher Website</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
            </Grid>
            <Grid item xs={12} md={6} />
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="my-input">Royalty</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
            </Grid>
            <Grid item xs={12} md={6} />
            <Grid item xs={12} md={6}>
              <InputLabel sx={textGrey} htmlFor="my-input">Collection</InputLabel>
              <Input sx={inputStyle} id="my-input" aria-describedby="my-helper-text" fullWidth />
            </Grid>
          </Grid>
        </>
        
      }
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: '1rem' }}>
        <Button sx={{ marginX: '0.5rem'}} variant="outlined">Cancel</Button>
        <Button sx={{ marginX: '0.5rem'}} variant="contained">Create</Button>
      </Box>
    </>
  );
}
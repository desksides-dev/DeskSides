import React from 'react';
import './Footer.css';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'
import Container from '@mui/material/Container'

function Footer() {

  return (
  <Container>
    <Link href="/">COPYRIGHT © 2022</Link>
    {/* <Link href="/">TERMS & CONDITIONS</Link> */}
    <Box
        component="img"
        sx={{
          height: 358,
          width: 788,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="DeskSides Logo"
        src="https://uc7fe49a364077335cf864344de0.previews.dropboxusercontent.com/p/thumb/ABj9f23MFY4dSDwAv7JIfrGgqJEO9GhATrVHIUsRYIJ3UmEl6uVYZfdMdC90On98uzWw1DnU4IzP9dd8dxTRGVpGRexUs39xzjX0xzOemt8bafJ8m5nNeHs02RhFKCNkBNqWNJl8GGvt_qU4g99raX4YQMQR7-DRbaosCo0AL9GRXkDm3ZLc18LvvF9LYqTiTQoM6PnqQ-L4kMva5Em6F71k4CAfsKkS7pm-emEM7IYRyrPwh5paNVO8BfSFPjndBvWAyxvOssqkBbuMRcRcOO7g0H_E0zwFWHjuCc1wj-A5wMQ9GpRO9Ha1KB4FwAg9o3rudcm7_Eag2vSCzZI_EnpMVPb0URLQ3VsQecKEzkLy_HLX7SxbL8NehDjsZ9bB9ZE/p.png"
      />    
    <Link href="/">FACEBOOK</Link>
    <Link href="/">INSTAGRAM</Link>
    <Link href="/">CONTACT US</Link>
  </Container>
)
}

export default Footer;

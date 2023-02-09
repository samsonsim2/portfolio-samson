import './App.css'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import projects from './projects'
import ProjectCard from './components/ProjectCard'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import React from 'react'

function App() {
  const ScrollTop = () => {
    const trigger = useScrollTrigger({
      target: document.body,
      disableHysteresis: true,
      threshold: 100,
    })
  }
  const scrollToTop = React.useCallback(() => {
    document.body.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <>
      <Box sx={{ width: '100vw', background: '#e2e8f0' }}>
        <Box
          sx={{
            width: '100ve',
            height: '40vh',
            background: '#f5f5f5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1 className='text'>
            Hello! I'm <p className='text-gradient'> Samson</p>
          </h1>

          <Typography sx={{ mt: 0, color: '#828282' }}>
            Aspiring full stack developer with a passion for coding and design.
            Here are some of my projects
          </Typography>

          <Stack direction='row' sx={{ alignSelf: 'center', mt: 2, gap: 1 }}>
            <a href='https://github.com/samsonsim2' target={'_blank'}>
              <GitHubIcon sx={{ color: 'black' }} />
            </a>
            <a href='https://www.instagram.com/samson.img/' target={'_blank'}>
              <InstagramIcon sx={{ color: 'black' }} />
            </a>
          </Stack>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: 4,
          }}
        >
          <Typography variant='h4' textAlign={'center'} sx={{ mt: 4, mb: 4 }}>
            {' '}
            Projects
          </Typography>

          <Box
            sx={{
              width: '60%',

              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 4,
              marginBottom: 6,
            }}
          >
            {projects.map((project, index) => {
              return <ProjectCard key={index} project={project} />
            })}
          </Box>
        </Box>
      </Box>

      <Box sx={{ height: '100px', display: 'flex', justifyContent: 'center' }}>
        <Button onClick={scrollToTop} sx={{ height: '40px', mt: 4 }}>
          Scroll Back Up
        </Button>
      </Box>
    </>
  )
}

export default App

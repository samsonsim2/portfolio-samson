import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { Box } from '@mui/system'

const ProjectCard = ({ project }) => {
  const { title, imgSrc, techStack, description, deployedLink } = project

  return (
    <>
      <Card
        sx={{
          width: { sm: '100%', md: '40%' },
          '&:hover': {
            transform: 'scale3d(1.05, 1.05, 1)',
            transition: 'transform 0.3s ease-in-out',
          },
        }}
      >
        <CardActionArea href={deployedLink} target={'_blank'}>
          <CardMedia component='img' image={imgSrc} title={title}></CardMedia>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
          </CardContent>
          <Stack
            display='flex'
            direction='row'
            flexWrap='wrap'
            sx={{ margin: 1 }}
          >
            {project.techStack.map((tag, index) => {
              return <Chip key={index} label={tag} sx={{ mt: 1, ml: 1 }}></Chip>
            })}
          </Stack>
        </CardActionArea>
      </Card>
    </>
  )
}

export default ProjectCard

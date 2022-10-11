// import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { Loader } from '../../utils/styles/atoms'
import { useEffect } from 'react'
import { useState } from 'react'

// const freelanceProfiles = [
//     {
//         name: 'Jane Doe',
//         jobTitle: 'Devops',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'John Doe',
//         jobTitle: 'Developpeur frontend',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'Jeanne Biche',
//         jobTitle: 'Développeuse Fullstack',
//         picture: DefaultPicture,
//     },
// ]

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`


const CardContainers = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`
    

const Container  = styled.div`
 margin: 30px;
  background-color: ${colors.background};
  padding:30px
  display: flex;
  text-align:center;

  flex-direction: row;
  max-width: 1200px;

`


const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`




function Freelances(props) {
  const [freelancersList, setFreelancersList] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)
  const [error,setError] = useState(false)
  


  useEffect(()=>{
    async function fetchFreelances(){
      setDataLoading(true)
      try {
        const response = await fetch('http://localhost:8000/freelances')
        const { freelancersList } = await response.json()
        setFreelancersList(freelancersList)

      
      }
      catch(err){
        console.log(err)
        setError(true)

      }
      finally{
          setDataLoading(false)
      }
    }
    fetchFreelances()
  },[]
  )

  if (error) { 
    return <span> Oups il y a eu un problème </span>
  }


  return (
    <Container>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
        {isDataLoading ?(
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper> ) 
          : (
        <CardContainers>
      {freelancersList.map((profile,index)=>(
        <Card key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name} /> ))}
          
      </CardContainers>)
        }
     
    </Container>
  );
}


export default Freelances;

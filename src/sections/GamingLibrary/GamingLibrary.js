import './GamingLibrary.css'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import { Card } from '../../components'
import GamingLibraryData from '../../components/Data/GamingLibraryData'
const GamingLibrary = () => {
    const cards = GamingLibraryData.map(card =>{
        return <Card img={card.img} title={card.title} category={card.category} download= {card.download} rate={card.rate}/>
      })
    
  return (
    <>
    <SectionWrapper>
      <SectionHeader>Gaming Library</SectionHeader>
      <div className='most-popular-items'>
        {cards}
      </div>
   
    </SectionWrapper>
    
    </>
  )
}

export default GamingLibrary
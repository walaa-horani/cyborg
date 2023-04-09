import './MostPopular.css'
import MostPopularIData from '../../components/Data/MostPopularData'
import {Card, SectionHeader ,SectionWrapper} from '../../components/index'
const MostPopular = () => {



  const cards = MostPopularIData.map(card =>{
    return <Card img={card.img} title={card.title} category={card.category} download= {card.download} rate={card.rate}/>
  })
  return (
    <>
   <SectionWrapper>
      <SectionHeader>Most Popular</SectionHeader>
      <div className='most-popular-items'>
        {cards}
      </div>
   
    </SectionWrapper>
    
    </>
  )
}

export default MostPopular

/*
 <Card img={popular_01} title='Fortnight' category='sandbox' rate='3.3' download='5.2M'/>
       <Card img={popular_02} title='pupG' category='stream-X' rate='1.8' download='4.1M'/>
       <Card img={popular_03} title='Dota2' category='legandary' rate='4.8' download='1.2M'/>
       <Card img={popular_04} title='CS-Gp' category='Battle S' rate='2.5' download='3.2M'/>

       <Card img={popular_05} title='MinCroft' category='legandary' rate='3.2' download='5.2M'/>
       <Card img={popular_06} title='Eagles Fly' category='Matrix' rate='3.8' download='4.1M'/>
       <Card img={popular_07} title='Dota2' category='legandary' rate='4.8' download='1.2M'/>
       <Card img={popular_08} title='CS-Gp' category='Battle S' rate='2.5' download='3.2M'/>
       */
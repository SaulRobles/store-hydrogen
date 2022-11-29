import React, { Key } from 'react';
import { Carousel } from 'antd';
import ReactPlayer from 'react-player';

const App: React.FC = ({data}) => {
  const onChange = (currentSlide: number) => {
    /* console.log(currentSlide); */
  };

  return (
    <Carousel afterChange={onChange} slidesToShow={1} draggable={true} arrows={true}>
      {data.influencer?.gallery?.map((element, index: Key) => {
        return element.type === 'image' ? 
        <div className='Influencer_Slider_Div' key={index}><img className='Influencer_Slider_item' src={element.url}/></div> : 
        <div key={index}><ReactPlayer url={element.url} width="100%" height="40rem" controls={true}/></div>
      })}
    </Carousel>
  );
};

export default App;
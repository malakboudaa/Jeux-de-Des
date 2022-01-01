import React from "react";
import dice1 from './images/1.png';
import dice2 from './images/2.png';
import dice3 from './images/3.png';
import dice4 from './images/4.png';
import dice5 from './images/5.png';
import dice6 from './images/6.png';

class De extends React.Component {
    render() {
        switch (parseInt(this.props.roll)) {
          case 1:   return (<div><img src={dice1} alt="image1"/></div>);
          case 2:   return (<div><img src={dice2} alt="image2"/></div>);
          case 3:   return (<div><img src={dice3} alt="image3"/></div>);
          case 4:   return (<div><img src={dice4} alt="image4"/></div>);
          case 5:   return (<div><img src={dice5} alt="image5"/></div>);
          case 6:   return (<div><img src={dice6} alt="image6"/></div>);
          default:  return (null);
        }
      }

}
export default De;
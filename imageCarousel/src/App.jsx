import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => {
  return (
    <Carousel>
      <div>
         <img src="https://www.google.com/imgres?q=hitler&imgurl=https%3A%2F%2Fassets.editorial.aetnd.com%2Fuploads%2F2009%2F10%2Fadolf-hitler-gettyimages-119505258.jpg&imgrefurl=https%3A%2F%2Fwww.history.com%2Ftopics%2Fworld-war-ii%2Fadolf-hitler-1&docid=qTgFi8HP-OiUlM&tbnid=zEZy2VheacuOCM&vet=12ahUKEwjI_eblxaWKAxWCBNsEHewGHhsQM3oECGUQAA..i&w=1920&h=1080&hcb=2&itg=1&ved=2ahUKEwjI_eblxaWKAxWCBNsEHewGHhsQM3oECGUQAA" />
         <p className="legend">Legend 1</p>
       </div>
       <div>
         <img src="https://www.google.com/imgres?q=hitler&imgurl=https%3A%2F%2Fwww.bbc.co.uk%2Fstaticarchive%2F71b6b5e03f40e4f5466d251fb681630bd5e4e927.jpg&imgrefurl=https%3A%2F%2Fwww.bbc.co.uk%2Fhistory%2Fpeople%2Fadolf_hitler&docid=12YBYh-R5zwvqM&tbnid=lCby1qvQI9vv-M&vet=12ahUKEwjI_eblxaWKAxWCBNsEHewGHhsQM3oECBYQAA..i&w=640&h=360&hcb=2&ved=2ahUKEwjI_eblxaWKAxWCBNsEHewGHhsQM3oECBYQAA" />
         <p className="legend">Legend 2</p>
       </div>
      <div>
      <img src="https://www.google.com/imgres?q=hitler&imgurl=https%3A%2F%2Fcdn.britannica.com%2F57%2F146057-050-697A470D%2FAdolf-Hitler.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Ftopic%2FFuhrer&docid=TEIzk-DPjMIS3M&tbnid=y75MWJ_itNat0M&vet=12ahUKEwjI_eblxaWKAxWCBNsEHewGHhsQM3oECEsQAA..i&w=528&h=800&hcb=2&ved=2ahUKEwjI_eblxaWKAxWCBNsEHewGHhsQM3oECEsQAA" />
      <p className="legend">Legend 3</p>
     </div>
   </Carousel>
  );
};
export default App
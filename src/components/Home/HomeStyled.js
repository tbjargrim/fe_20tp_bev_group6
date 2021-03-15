import styled from "styled-components";
/* import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react"; 

https://hypeserver.github.io/react-date-range/#daterange
*/


const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;  
`;

const TravelSlc = styled.select`
  font-size: 18px;
  border-radius: 30px;
  margin: 20px;
  padding: 10px;
  background: white;
  border: none;
  outline: none;
  box-shadow: 1px 2px 10px gray;

  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #fff;
  -webkit-appearance: none;
  background-position-x: 250px;
`;
const TravelBtn = styled.button`
  display: block;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 5px 30px 5px 30px;
  font-size: 17px;
  margin: 30px;
  box-shadow: 1px 2px 10px gray;
`;
const DateRangeDiv = styled.div`
border: 2px solid red;

`;

function HomeStyled() {
  /*   const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
        color: "#ff0016",
        rangeColors: ["#006400", "#006400", "#006400"]
      },
    ]); */

  return (
    <FlexDiv>

      <TravelSlc placeholder="Vilken medeltemp vill du ha?">
        <option value="volvo">10 C</option>
        <option value="saab">15 C</option>
        <option value="opel">20 C</option>
        <option value="audi">25 C</option>
      </TravelSlc>

      <TravelSlc placeholder="När vill du åka?">
        <option value="week 1">week 1</option>
      </TravelSlc>

      {/*    <DateRangeDiv>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </DateRangeDiv> */}

      <div>
        <TravelBtn type="submit">OK</TravelBtn>
      </div>
    </FlexDiv>
  );
}

export default HomeStyled;

import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { setSliderValue } from '../store/actions/action';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
//import dateFormat from '../common/dateFormat';

const SelectHour = (props) => {


  const [value, setValue] = React.useState(1);
  const dispatch = useDispatch();
  //const sliderValue = useSelector(state => state.slider.value);
  const useSliderValueHandler = (ev) => {
    setValue(ev);
    dispatch(setSliderValue(ev));
  }

  //const dt = dateFormat(props.Steps.list[value-1].dt);

  //props.Steps.list[value-1].dt_txt.split(" ")[0]
  //tooltipLabel={currentValue => props.Steps.list[value-1].dt_txt}
  const date = new Date(props.Steps.list[value - 1].dt_txt).toDateString();

  let marks = {};
  props.Steps.list.forEach((item, index) => {
    marks[index + 1] = { label: item.dt_txt.split(" ")[1].split(":")[0] + ":" + item.dt_txt.split(" ")[1].split(":")[1] };
  });

  return (
    <>
      <h3 style={{textAlign: "right"}}>{date}</h3>
      <Slider step={props.Steps.cnt} defaultValue={[0]} min={1} max={7} marks={marks} onChange={useSliderValueHandler} />
    </>
  )
}

export default memo(SelectHour);

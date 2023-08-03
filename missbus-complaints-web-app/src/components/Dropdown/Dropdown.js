import React, { useRef, useState } from 'react';
import styles from './Dropdown.module.css'
import Text from '../Text';
import useOutsideClick from '../../hooks/useOutsideClick';
import IconLeft from '../../assets/icons/IconLeft';
import Divider from '../Divider';

function Dropdown({ title, items, onClick=(i) => {}, allowToCLick=true, textAddition="" }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(null);
  const toggle = () => setOpen(!open);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
      setOpen(false);
  });
  
  const handleOnClick = (item) => {
    setSelection(item)
    onClick(item)
    setOpen(false)
  }


  return (
    <>
    {
      open && <div style={{"position": "absolute", "height": "100%", "width": "100%","top": "0", "left": "0", "backgroundColor": "rgba(0, 0, 0, 0.64)"}}>

      </div>
    }
      <div className={styles.container} ref={ref} style={{
        "borderRadius": open ? "10px 10px 0px 0px" : "10px", 
        "backgroundColor": open ? 
        "white" : "#DBDBDB",
        "position": open ? "fixed" : null,
        // "top": open ?  "50%" : null,
        // "left": open ? "50%" : null,
        // "transform": open ? "translate(-50%, -50%)" : null,
        "zIndex": open ? "99" : null,
        
        }}>
          
          <div
              className={styles.header}
              onClick={allowToCLick ? () => toggle(!open) : null}
          >
              <IconLeft rotate={open ? -90 : 0} color='#878787'/>
              <Text text={selection !== null ? `${textAddition} ${selection.value}` : title} color={selection !== null ? 'black' : 'darkGray'} />

          </div>
          <div className={styles.list} style={{
            "visibility" : open ? "visible": "hidden" ,
            "opacity" : open ? "1": "0",
            "marginTop": open ? "8px" : "-4px", 
            // "transition": "0.2s",
            "pointerEvents": !open ? "none" : null,
            }}>
            {
            items.map((item, index) => {
                return (
                <div className={styles.button} onClick={() => open ? handleOnClick(item) : {}} key={item.id} style={{"borderRadius": index === items.length-1 ? "0px 0px 10px 10px" : "0px"}} >
                    <div style={{"height": "4px"}}></div>
                    <div style={{"padding": "0px 8px"}}>
                      <Text text={item.value}/>
                    </div>
                    <Divider color="rgba(0,0,0,0.2)"/>
                </div>)
            }
            )}
          </div>
        
      </div>
    </>
  );
}

export default Dropdown;
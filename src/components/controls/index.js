import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({openModal}){
  return (
    <div className='Controls'>
      <button onClick={openModal}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  openModal: PropTypes.func
};

Controls.defaultProps = {
  openModal: () => {}
}

export default React.memo(Controls);

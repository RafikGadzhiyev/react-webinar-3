import React from 'react';
import './style.css'
import PropTypes from "prop-types";

function Modal({isOpened,children, setIsOpened}){
    return isOpened ? (<div className='Modal' onClick={setIsOpened}>
        <div className = 'Modal-wrapper'>
            {
                children
            }
        </div>
    </div>
    ) : <></>
}

Modal.propTypes = {
    isOpened: PropTypes.bool,
    setIsOpened: PropTypes.func
}


export default React.memo(Modal);
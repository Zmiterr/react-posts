import React, {memo} from 'react';
import styles from './Modal.module.css';


const Modal = memo(({children, isModalActive, setIsModalActive, ...props }) => {
    const classes = [styles.Modal]
    // if(isModalActive){
    //     classes.push(styles.active)
    // }

    isModalActive&&classes.push(styles.active)
    return (
        <div className={classes.join(' ')} {...props} onClick={()=>setIsModalActive(false)}>
            <div className={styles.ModalContent} onClick={(event => event.stopPropagation())}>
                {children}
            </div>

        </div>
    );
});

export default Modal;

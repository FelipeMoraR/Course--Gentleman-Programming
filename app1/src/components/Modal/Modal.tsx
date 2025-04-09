import { ReactNode, useRef } from "react"
import { createPortal } from "react-dom";
import { useModalContext } from "./context/ModalContext";
import style from './Modal.module.css';

interface Props {
    children: ReactNode
}

export const Modal = ({children} : Props) => {
    
    const modalRoot = document.getElementById('modalRoot');
    const modalRef = useRef<HTMLDivElement>(null);
    const { isModalOpen, setIsModalOpen } = useModalContext();

    if(!isModalOpen || !modalRoot) return null;

    const closeModal = () => setIsModalOpen(false);

    return createPortal(
        <>
            <div className={style.overlay} onClick={closeModal}></div>
            <div className={style.modal} ref = {modalRef}>
                {children}
                <button className={style.btnCloseModal} onClick={closeModal}>Close</button>
            </div>
        </>
    , modalRoot);
}
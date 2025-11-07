'use client';

import { useEffect } from 'react';
import css from './ModalPreview.module.css';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const ModalPreview = ({ children }: Props) => {
  const router = useRouter();
  
    const close = () => router.back();
    
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
          close();
        }
         };
        
         useEffect(() => {
          const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
              close();
            }
          };
        
             document.addEventListener("keydown", handleKeyDown);
             document.body.style.overflow = "hidden";
        
          return () => {
              document.removeEventListener("keydown", handleKeyDown);
              document.body.style.overflow = "";
          };
        }, [close]);

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        {children}
        <button  className={css.backBtn} onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default ModalPreview;
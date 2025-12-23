/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect } from "react";

const VideoPopup = ({
   isVideoOpen,
   setIsVideoOpen,
   videoId = "eEzD-Y97ges",
}: any) => {
   useEffect(() => {
      if (isVideoOpen) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'unset';
      }
      return () => {
         document.body.style.overflow = 'unset';
      };
   }, [isVideoOpen]);

   if (!isVideoOpen) return null;

   return (
      <div 
         className="video-modal-overlay"
         onClick={() => setIsVideoOpen(false)}
         style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer'
         }}
      >
         <div 
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
               position: 'relative',
               width: '90%',
               maxWidth: '900px',
               paddingTop: '56.25%',
               cursor: 'default'
            }}
         >
            <button
               onClick={() => setIsVideoOpen(false)}
               style={{
                  position: 'absolute',
                  top: '-40px',
                  right: 0,
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '30px',
                  cursor: 'pointer',
                  zIndex: 10000
               }}
            >
               ×
            </button>
            <iframe
               src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
               style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
               }}
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
            />
         </div>
      </div>
   );
};

export default VideoPopup;
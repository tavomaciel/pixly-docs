import React from 'react';

interface GfyCatProps {
    id: string
}

export default function GfyCat(props: GfyCatProps) {
    const finalUrl = `https://gfycat.com/ifr/${props.id}?controls=0&autoplay=1&hd=1`;
    return (
        <div style={{position: 'relative', paddingBottom: '56.25%'}}>
            <iframe src={finalUrl} frameBorder='0' scrolling='no' width='100%' height='100%' style={{position:'absolute', top:0, left:0}} allowFullScreen>
            </iframe>
        </div>
    );
}
import React, { useState } from 'react';

function GaleriaDeImagenes() {  
  /* a esta funcion se la denomina COMPONENTE siempre q devuelva 
  componente html  de lo contrario es una funcion normal*/
  const [imagenes, setImagenes] = useState([
    { src: 'imagenes/img0.jpg', alt: 'Imagen 1', caption: 'Pie de foto Imagen 1' },
    { src: 'imagenes/img1.jpg', alt: 'Imagen 2', caption: 'Pie de foto Imagen 2' },
    { src: 'imagenes/img2.jpg', alt: 'Imagen 3', caption: 'Pie de foto Imagen 3' },
    { src: 'imagenes/img3.jpg', alt: 'Imagen 4', caption: 'Pie de foto Imagen 4' }
  ]);
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');

  const agregarImagen = () => {
    if (url && caption) {
      setImagenes([...imagenes, { src: url, alt: `Imagen ${imagenes.length + 1}`, caption }]);
      setUrl('');
      setCaption('');
    } else {
      alert('Por favor introduce imagen y pie');
    }
    
  };

  // los style dentro de JSX se consideran elementos. van dentro de llaves
  // ejm <h1 style={{ textAlign: 'center' }}>
  // {{}}   las primeras indican codigo JS y las 2das OBJETOS JS
  // los style se consideran objetos en JS
  return (
    <div>
      
      <h1 style={{ textAlign: 'center' }}>Galería de imágenes</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL de la imagen" />
        <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Pie de foto" />
        <button onClick={agregarImagen}>Agregar Imagen</button>
      </div>
      <div className="galeria" style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '0 auto', maxWidth: '80%' }}>
        {imagenes.map((img, index) => (
          <div key={index}>
            <img src={img.src} alt={img.alt} width="300" height="250" />
            <p>{img.caption}</p>
          </div>
        ))}
      </div>
      <button style={{marginTop:"10px", marginLeft:"40px"}}>Imformes</button>
    </div>
  );
}

export default GaleriaDeImagenes;

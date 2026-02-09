// Countdown.jsx
import React, { useEffect, useRef, useState } from 'react';

function Countdown({ duration = 0 }) {
  const [tempo, setTempo] = useState(duration);
  const intervalRef = useRef(null);

  useEffect(() => {
    // (re)inicia o tempo quando a prop duration mudar
    setTempo(duration);

    // limpa intervalo anterior, se houver
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // cria novo intervalo que decrementa a cada 1s
    intervalRef.current = setInterval(() => {
      setTempo(prev => {
        const next = Math.max(0, prev - 1000);
        if (next === 0 && intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return next;
      });
    }, 1000);

    // cleanup quando o componente desmonta ou duration muda
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [duration]);

  // converte ms para horas/minutos/segundos
  const getHMS = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds };
  };

  const pad = (n) => String(n).padStart(2, '0');

  const { hours, minutes, seconds } = getHMS(tempo);

  return (
    <div className='flex space-x-2 items-center justify-center py-4'>
      <div className='flex flex-col items-center'>
        <div className='bg-white/30 px-4 py-2 text-2xl font-bold rounded-lg'>
          {pad(hours)}
        </div>
        <span className='text-sm text-white'>Horas</span>
      </div>

      <span className='text-lg font-bold text-white'>:</span>

      <div className='flex flex-col items-center'>
        <div className='bg-white/30 px-4 py-2 text-2xl font-bold rounded-lg'>
          {pad(minutes)}
        </div>
        <span className='text-sm text-white'>Min</span>
      </div>

      <span className='text-lg font-bold text-white'>:</span>

      <div className='flex flex-col items-center'>
        <div className='bg-white/30 px-4 py-2 text-2xl font-bold rounded-lg'>
          {pad(seconds)}
        </div>
        <span className='text-sm text-white'>Seg</span>
      </div>
    </div>
  );
}

export default Countdown;
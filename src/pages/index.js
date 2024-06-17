import AdviceGen from '@/components/AdviceGen.js';
import AdviceDisplay from '@/components/AdviceDisplay.js';
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';




const Home = () => {
  const [advice, setAdvice] = useState('Click the button to get advice!');

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip.advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    
  
      <div className={styles.container}>
        <h1 className={styles.h1}>advice</h1>
        <AdviceDisplay advice={advice} /> 
        <AdviceGen onClick={fetchAdvice} />
      </div>
      
  
  );
};

export default Home;
    
      
import AdviceGen from '@/components/AdviceGen.js';
import AdviceDisplay from '@/components/AdviceDisplay.js';
import Layout from '@/components/Layout';
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
    <Layout>
      <div className={styles.container}>
        <AdviceDisplay advice={advice} />
        <AdviceGen onClick={fetchAdvice} />
      </div>
    </Layout>
  );
};

export default Home;
    
      
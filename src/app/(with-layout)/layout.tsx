import Footer from '@/components/common/footer/Footer';
import Navbar from '@/components/common/navbar/Navbar';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "E-Shop",
    description: "E-Shop",
  };
  
const WithLayout = ({children}:any) => {
    return (
        <div>
        <Navbar />
        {children}
         <Footer />
        </div>
    );
};

export default WithLayout;
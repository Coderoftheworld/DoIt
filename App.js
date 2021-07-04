// Imports
import React from 'react'
import HomePage from './app/pages/HomePage.js'
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
    return (
        <PaperProvider>
            <HomePage />
        </PaperProvider> 
    )
}
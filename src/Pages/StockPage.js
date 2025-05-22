import React, { use, useEffect, useState } from 'react'
import { getStockHistory, getStocks } from '../Api/StockApi';
import { Box, Button, CircularProgress, Grid, Typography,FormControl,InputLabel,MenuItem,Select } from '@mui/material';

export default function StockPage() {
    const [stocks, setStocks] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null);
    const [interval, setInterval] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [priceHistory, setPriceHistory] = useState([]);

    useEffect(() => {
        getStocks().then(setStocks);
    }, []);
    useEffect(() => {
        if (selectedStock) {
            setIsLoading(true);
            getStockHistory(selectedStock,interval).then(data => {
                setPriceHistory(data);
                setIsLoading(false);
            });
        }
    } , [selectedStock,interval]);
  return (
    <div>
        <h1>Stock Price Aggregation</h1>
        <Box p={3}>
            <Typography variant='h4' gutterBottom></Typography>

        </Box>
    </div>
  )
}

const API_BASE = 'http://20.244.56.144/evaluation-service';

export  async function getStocks() {
    const response = await fetch(`${API_BASE}/stocks`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return Object.entries(data.stocks).map(([name,ticker]) => ({name, ticker}));
}

export async function getStockHistory(ticker,minutes) {
    const response = await fetch(`${API_BASE}/stock/${ticker}?minutes=${minutes}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.stock;
}
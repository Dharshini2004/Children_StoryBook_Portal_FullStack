// src/components/Search.js
import React, { useState } from 'react';
import { InputBase, IconButton, Box, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ data }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value) {
      const filteredResults = data.filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f1f1', padding: '3 px' }}>
        <InputBase
          placeholder="Search…"
          value={query}
          onChange={handleSearch}
          sx={{ flex: 1, paddingLeft: '5px' }}
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
      <List>
        {results.map((result, index) => (
          <ListItem key={index}>
            <ListItemText primary={result} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Search;

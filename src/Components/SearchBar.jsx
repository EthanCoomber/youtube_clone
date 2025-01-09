import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`)

            setSearchTerm("")
        }
    }

    return (
        <Paper 
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                mr: { sm: 5 },
                backgroundColor: '#f8f8f8',
                '&:hover': {
                    backgroundColor: '#f0f0f0',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
                }
            }}>
            <input 
                className='search-bar'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    width: '200px',
                    padding: '8px 8px 8px 8px', // Changed padding to add left padding
                    fontSize: '16px',
                    color: '#333',
                    '::placeholder': {
                        color: '#999',
                        opacity: 1
                    }
                }}
            />
            <IconButton 
                type="submit" 
                sx={{
                    p: "10px",
                    color: "navy",
                    '&:hover': {
                        backgroundColor: 'rgba(0,0,128,0.1)'
                    }
                }}
            >
                <Search />
            </IconButton>
                
        </Paper>
    )
}

export default SearchBar
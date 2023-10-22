import React, { useState,useEffect } from 'react';
import { FormControl, TextField, Button,Select,InputLabel,MenuItem } from '@mui/material';
import axios from 'axios';
import './UploadItems.css'
const UploadItems = () => {

  const [categories, setCategories] = useState([]); // State to hold fetched categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/categories"); // Fetch categories from the API endpoint
        setCategories(response.data); // Update categories state with the fetched data
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories(); // Call fetchCategories when the component mounts
  }, []); // Empty dependency array ensures useEffect runs once when component mounts

  
  const [item, setItem] = useState({
    id: '',
    name: '',
    price: 0,
    price_in_inr: 0,
    description: '',
    rating: 0,
    quantity: 0,
    quantity_unit: '',
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/products", item); // Send a POST request to your API endpoint with the item data
      console.log("Item uploaded successfully:", item);
      // Reset the form after successful submission
      setItem({
        id: '',
        name: '',
        price: 0,
        price_in_inr: 0,
        description: '',
        rating: 0,
        quantity: 0,
        quantity_unit: '',
        category: '',
        image: ''
      });
    } catch (error) {
      console.error("Error uploading item:", error);
    }
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit} className='upload-form'>
      <h4>Upload Items</h4>
        <FormControl fullWidth margin="normal">
          <TextField
            id="id"
            name="id"
            label="ID"
            variant="outlined"
            value={item.id}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            value={item.name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            id="price"
            name="price"
            label="Price"
            variant="outlined"
            type="number"
            value={item.price}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            id="price_in_inr"
            name="price_in_inr"
            label="Price in INR"
            variant="outlined"
            type="number"
            value={item.price_in_inr}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            id="description"
            name="description"
            label="Description"
            variant="outlined"
            value={item.description}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            id="rating"
            name="rating"
            label="Rating"
            variant="outlined"
            type="number"
            value={item.rating}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            id="quantity"
            name="quantity"
            label="Quantity"
            variant="outlined"
            type="number"
            value={item.quantity}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            id="quantity_unit"
            name="quantity_unit"
            label="Quantity Unit"
            variant="outlined"
            value={item.quantity_unit}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            name="category"
            label="Category"
            value={item.category}
            onChange={handleChange}
            required
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            id="image"
            name="image"
            label="Image URL"
            variant="outlined"
            value={item.image}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Upload
        </Button>
      </form>
    </div>
  );
};

export default UploadItems;

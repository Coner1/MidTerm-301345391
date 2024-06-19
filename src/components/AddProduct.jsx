import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Product</h1>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        placeholder="Quantity"
      />
      <input
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <div>
        <button type="submit">Submit</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  );
};

export default AddProduct;

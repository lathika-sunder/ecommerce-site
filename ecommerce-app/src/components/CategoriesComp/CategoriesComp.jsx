import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CategoriesComp.css";
const CategoriesComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/categories"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul className="img-grid">
        {data.map((category, index) => (
          <li className="grid-list" key={index}>
            {" "}
            <img
              className="category-img"
              src={category.image}
              alt={category.name}
            />
            <h3>{category.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesComp;

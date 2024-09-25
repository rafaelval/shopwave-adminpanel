import React from "react";
import { useSelector } from "react-redux";
import styles from './Cards.module.css'

export const Cards = () => {
      const products = useSelector((state) => state.products);
    
      return (
        <div className={styles.contPrinc}>
          {products.map((el) => (
            <div key={el._id}>
              <p>{el.name}</p>
              <img src={el.imgUrl} alt={el.name} />
              <p>{el.description}</p>
              <p>Precio:$ {el.unitaryPrice}</p>
            </div>
          ))}
        </div>
      );
    };

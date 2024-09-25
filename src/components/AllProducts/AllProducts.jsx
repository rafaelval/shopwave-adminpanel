import React, { useEffect, useState } from 'react'
import styles from './AllProducts.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions'
import { Cards } from '../Cards/Cards'

export const AllProducts = () => {
  
  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  const getproducts= async()=>{
    await dispatch(getProducts())
  }

  useEffect(() => {
    getproducts()
  }, [])

  
  return (
    <div className={styles.contPrinc}>
      {products.length ? <Cards/> : <p>aun no hay productos para mostrar</p> }
    </div>
  )
}

import React from 'react'

import { Link } from 'react-router-dom'
import { Col, Button } from 'reactstrap'
import styles from '../Gem/Gem.module.css'
import gemsDefaultData from '../../../blockchain/gemsDefaultData'



const Gem = ({ id }) => {
  const gemInformation = gemsDefaultData.filter(item => item.id === id)[0];

  return (
    <>
    <Col md={2} lg={2} xs={4}>
      <div className={` ${styles.imageContainer} `}>
        <img className={styles.customGemImage} src={gemInformation.imageUrl} alt="gem" />
        <div className={styles.overlayImage}>
          <p className={styles.gem}>{gemInformation.salePrice} ETH</p>
          <h5 className="mt-3">{gemInformation.gameAssetDesc}</h5>
        </div>
      </div>
      <h4 className={`font-weight-bold ${styles.marginTop}`}>{gemInformation.name}</h4>
   
      {
        <Button className={styles.btnCustom}>

         Buy Now
        </Button>
      }
  
    </Col>
   
    </>
  )
}

export default Gem;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Col } from "reactstrap";
import styles from "./Footer.module.css";

const AlertComponent = () => {
    return (
      <Col className={styles.marginTop}>
        <Card className={styles.footerStyle}>
          <CardBody className={styles.bgblack}>
            <div className="text-white w-100">
              &copy; 2021 <strong className="text-danger"><a className="text-danger" href="https://www.supraorbs.com/" _blank>Supraorbs</a></strong>.
              All Rights Reserved.
            </div>
          </CardBody>
        </Card>
      </Col>
    );
};



export default AlertComponent;


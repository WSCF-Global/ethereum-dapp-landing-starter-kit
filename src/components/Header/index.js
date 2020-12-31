import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Drawer, Modal } from "antd";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

import { Web3Enabled } from "../../web3Enabled";
import { getNetworkExplorer, shortenAddress } from "../../helpers";

import SvgIcon from "../../common/SvgIcon";
import Button from "../../common/Button";

import * as S from "./styles";

const Header = () => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);
  const [wallet, setWallet] = useState('');
  const { t } = useTranslation();
  const web3 = new Web3Enabled();

  useEffect(() => {
    connectWallet();
  }, []);

  const showWeb3ErrorModal = () => {
    // Show error if wallet connection not happened
    // It can show modal, or just nothing

    // Modal.error({
    //   title: 'This is an error message',
    //   content: 'Please connect your Wallet',
    // });
  };

  const connectWallet = () => {
    web3.connect(fetchWeb3Data, showWeb3ErrorModal, false);
  }

  const fetchWeb3Data = () => {
    const { address } = web3.state;
    setWallet(address);

    // Fetch data from smart contract ...
  }

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    return (
      <Fragment>
        <S.CustomNavLinkSmall>
          <Link to="/">{t("About")}</Link>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <Link to="/">{t("Mission")}</Link>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <Link to="/">{t("Product")}</Link>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall style={{ width: "160px" }}>
          {
            wallet ?
              <S.WalletContainer>
                <Jazzicon diameter={34} seed={jsNumberForAddress(wallet)} />
                <a href={`${getNetworkExplorer()}/address/${wallet}`} target="_blank">
                  {shortenAddress(wallet)}
                </a>
              </S.WalletContainer>
              :
              <Link to="/">
                <Button onClick={connectWallet}>{t("Connect wallet")}</Button>
              </Link>
          }
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <Col>
            <S.LogoContainer to="/">
              <SvgIcon src="logo.svg" />
            </S.LogoContainer>
          </Col>
          <S.NotHidden>
            <Col style={{ display: "flex", alignItems: "center", marginTop: "0.625rem" }}>
              <MenuItem />
            </Col>
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default Header;

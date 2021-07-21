import React from "react";

import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";

import {
  Row,
  Col,
  CardBody,
  Card,
} from 'reactstrap'

import './Dashboard.css'
import styles from '../Home/Youtube.module.css'
import { ReactVideo } from 'reactjs-media'
import Video from '../Home/img/video.mp4'
import Poster from '../Home/img/poster.png'

import Gem from './Gem/Gem'

// import ContactFrom from "../../components/ContactForm";
// import ContentBlock from "../../components/ContentBlock";
// import MiddleBlock from "../../components/MiddleBlock";
// import Introduction from "../../content/introduction.json";
// import FirstBlock from "../../content/firstBlock.json";
// import SecondBlock from "../../content/secondBlock.json";
// import ThirdBlock from "../../content/thirdBlock.json";
// import FourthBlock from "../../content/fourthBlock.json";
// import ContactBlock from "../../content/contactBlock.json";

const Home = () => {
  return (
    <Container>
      <ScrollToTop />

      <Row className="mb-3 justify-content-center">
          <Col md={6} sm={6}>
            <h2 className="text-center mt-3 mb-2">
              Welcome To
              <strong className="custom-text-color">&nbsp;Supraorbs</strong>
            </h2>
            <h4 className="text-white mt-1 mb-3 text-center">
              Unlock Available Casino Games With Gems, Get Supra Chips And Start
              Playing.
            </h4>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10} sm={12}>
            <Card>
              <CardBody className="p-0">
                <ReactVideo
                  src={Video}
                  poster={Poster}
                  primaryColor="red"
                  className={styles.customVideo}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Container>
          <h3 className="  mt-5 mb-5 text-center">
            Buy Your Gem To Unlock The Game
          </h3>
          <Row className="text-center centerRow">
            <Gem id={1} />
            <Gem id={2} />
            <Gem id={3} />

            <Gem id={4} />
            <Gem id={5} />
            <Gem id={6} />
          </Row>
        </Container>




      {/* <ContentBlock
        type="right"
        first="true"
        title={Introduction.title}
        content={Introduction.text}
        button={Introduction.button}
        icon="developer.svg"
      /> */}
      {/* <MiddleBlock
        title={FirstBlock.title}
        content={FirstBlock.text}
        button={FirstBlock.button}
      />
      <ContentBlock
        type="left"
        title={SecondBlock.title}
        content={SecondBlock.text}
        section={SecondBlock.section}
        icon="graphs.svg"
      />
      <ContentBlock
        type="right"
        title={ThirdBlock.title}
        content={ThirdBlock.text}
        icon="product-launch.svg"
      /> */}

      {/* <ContentBlock
        type="left"
        title={FourthBlock.title}
        content={FourthBlock.text}
        icon="waving.svg"
      />
      <ContactFrom title={ContactBlock.title} content={ContactBlock.text} /> */}
    </Container>
  );
};

export default Home;


// import React, { useState, useEffect } from 'react'
// import { withRouter } from 'react-router'
// import {
//   Container,
//   Row,
//   Col,
//   CardBody,
//   Card,
//   Spinner,
//   Modal,
//   ModalBody,
//   ModalFooter,
// } from 'reactstrap'
// import { connect } from 'react-redux'

// import Footer from '../../components/Footer/Footer'

// import './Dashboard.css'

// import styles from '../Dashboard/Youtube.module.css'
// import { YoutubePlayer } from 'reactjs-media'
// import { ReactVideo } from 'reactjs-media'
// import Video from '../Dashboard/img/video.mp4'
// import Poster from '../Dashboard/img/poster.png'
// import {
//   ThemeProps,
//   RTLProps,
//   WalletProps,
// } from '../../../shared/prop-types/ReducerProps'
// import NotificationPopUp from '../../components/NotificationPopUp'
// import { GLOBALS } from '../../utils/globals'
// import Gem from './Gem/Gem'
// import {
//   fetchUserGemsSuccess,
//   fetchUserGemsRequest,
//   fetchUserGemsError,
// } from '../../../redux/actions/userGemAction'
// import { Helpers } from '../../utils/helpers'

// const DashBoard = ({ theme, rtl, walletState, dispatch }) => {
//   const [isShowNotification, setIsShowNotification] = useState(false)
//   const [isWelcome, setIsWelcome] = useState(false)
//   const [notificationDetails, setNotificationDetails] = useState({
//     title: '',
//     message: '',
//     color: '',
//   })
//   const [isLoading, setIsLoading] = useState(false)
//   const [loadingProgress, setLoadingProgress] = useState('')

//   if (isShowNotification) {
//     NotificationPopUp(
//       theme,
//       rtl,
//       setIsShowNotification,
//       notificationDetails.title,
//       notificationDetails.message,
//       notificationDetails.color,
//     )
//   }

//   useEffect(async () => {
//     try {
//       dispatch(fetchUserGemsRequest())
//       const payload = await Helpers.userAllGemsDetails(
//         walletState.connectedAddress,
//       )
//       console.log('test2', payload)
//       dispatch(fetchUserGemsSuccess(payload))
//     } catch (err) {
//       dispatch(fetchUserGemsError(err))
//     }
//   }, [dispatch])

//   const toggle = () => setIsLoading(!isLoading)

//   const notifyUser = (status, type, message) => {
//     const color = status
//     const data = GLOBALS.NOTIFICATION_DETAILS.filter(
//       (item) => item.id === type,
//     )[0]
//     const title = data.title
//     if (message === '') message = data.message
//     setNotificationDetails({ title, message, color })
//     setIsShowNotification(true)
//   }

//   if (walletState.isAllReady && !isWelcome) {
//     const type = 'welcome'
//     notifyUser('success', type, '')
//     setIsWelcome(true)
//   }

//   return (
//     <>
//       <Container>
//         {/* Modal Started */}
//         <Modal isOpen={isLoading} toggle={toggle}>
//           <Spinner
//             style={{ width: '3rem', height: '3rem', margin: '0 auto' }}
//           />
//           <ModalBody>
//             <p>{loadingProgress}</p>
//           </ModalBody>
//           <ModalFooter></ModalFooter>
//         </Modal>
//         {/* Modal Ended */}

//         <Row className="mb-3 justify-content-center">
//           <Col md={6} sm={6}>
//             <h2 className="text-center mt-3 mb-2">
//               Welcome To
//               <strong className="custom-text-color">&nbsp;Supraorbs</strong>
//             </h2>
//             <h4 className="text-white mt-1 mb-3 text-center">
//               Unlock Available Casino Games With Gems, Get Supra Chips And Start
//               Playing.
//             </h4>
//           </Col>
//         </Row>

//         <Row className="justify-content-center">
//           <Col md={10} sm={12}>
//             <Card>
//               <CardBody className="p-0">
//                 <ReactVideo
//                   src={Video}
//                   poster={Poster}
//                   primaryColor="red"
//                   className={styles.customVideo}
//                 />
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>

//         <Container>
//           <h3 className="  mt-5 mb-5 text-center">
//             Buy Your Gem To Unlock The Game
//           </h3>
//           <Row className="text-center centerRow">
//             <Gem id={1} />
//             <Gem id={2} />
//             <Gem id={3} />

//             <Gem id={4} />
//             <Gem id={5} />
//             <Gem id={6} />
//           </Row>
//         </Container>
//       </Container>
//       <Footer />
//     </>
//   )
// }

// DashBoard.propTypes = {
//   theme: ThemeProps.isRequired,
//   rtl: RTLProps.isRequired,
//   walletState: WalletProps.isRequired,
// }

// export default withRouter(
//   connect((state) => ({
//     theme: state.theme,
//     rtl: state.rtl,
//     walletState: state.walletState,
//   }))(DashBoard),
// )

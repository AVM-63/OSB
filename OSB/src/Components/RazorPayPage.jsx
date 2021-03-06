import React, { useEffect, useState } from 'react';
import shopBook from '../images/vectorImages/shopBook.svg';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === 'localhost';

if (document.domain === 'localhost') {
  // dev
} else {
  // prod
}

const RazorPayPage = (props) => {
  const bookPriceFinal = props.location.bookState.bookprice4;
  console.log('FINAL:', bookPriceFinal);
  // Getting Data from Login Page
  const [localArray, setLocalArray] = useState([]);
  useEffect(() => {
    let temp = localStorage.getItem('account');
    if (temp) {
      setLocalArray(JSON.parse(temp));
    }
  }, []);
  // Ova

  async function displayRazorPay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );
    if (!res) {
      alert('RZP Failed');
      return;
    }
    // fbjdsghjsdfghjsd

    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ bookPriceFinal2: bookPriceFinal }),
    // };

    // jkhsdkjsdkj

    const data = await fetch(
      'http://localhost:2000/razorpay/?amount=' + bookPriceFinal,
      { method: 'POST' }
      // requestOptions
    ).then((t) => t.json());

    console.log(data);

    const options = {
      key: __DEV__ ? 'rzp_test_3UnSD7fr6Qmqm0' : 'PRODUCTION_KEY',
      currency: data.currency,
      // amount: bookPriceFinal,
      amount: data.amount.toString(),
      order_id: data.id,
      name: 'OneStoreBooks',
      description: 'Thanks for choosing OSB',
      image: 'https://i.postimg.cc/GH6GYzMK/logo1.png',
      handler: function (response) {
        // alert('Done!');
        NotificationManager.success('Payment Sucessful', 'Congratulations!');
        setTimeout(() => {
          props.history.push('/categories/all-books');
        }, 2000);
      },
      prefill: {
        name: localArray.data[0].fullname,
        contact: localArray.data[0].number,
        email: localArray.data[0].email,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <>
      <NotificationContainer />
      <section id="header2" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="highlightAbout">OneStoreBooks</h1>
                  <p className="mb-2 ">Proceed with the payment</p>
                  <div className="mt-4">
                    <button onClick={displayRazorPay} className="btn buyButton">
                      Continue
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={shopBook}
                    className="img-fluid animated aboutImg"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RazorPayPage;

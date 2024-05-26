import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loader from "../assets/animations/loader.gif"

const OtpBox = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const form = document.getElementById('otp-form');
    const inputs = [...form.querySelectorAll('input[type=text]')];
    const submit = form.querySelector('button[type=submit]');

    const handleKeyDown = (e) => {
      if (
        !/^[0-9]{1}$/.test(e.key) &&
        e.key !== 'Backspace' &&
        e.key !== 'Delete' &&
        e.key !== 'Tab' &&
        !e.metaKey
      ) {
        e.preventDefault();
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        const index = inputs.indexOf(e.target);
        if (index > 0) {
          inputs[index - 1].value = '';
          inputs[index - 1].focus();
        }
      }
    };

    const handleInput = (e) => {
      const { target } = e;
      const index = inputs.indexOf(target);
      if (target.value) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        } else {
          submit.focus();
        }
      }
    };

    const handleFocus = (e) => {
      e.target.select();
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData('text');
      if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
        return;
      }
      const digits = text.split('');
      inputs.forEach((input, index) => (input.value = digits[index]));
      submit.focus();
    };

    inputs.forEach((input) => {
      input.addEventListener('input', handleInput);
      input.addEventListener('keydown', handleKeyDown);
      input.addEventListener('focus', handleFocus);
      input.addEventListener('paste', handlePaste);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('input', handleInput);
        input.removeEventListener('keydown', handleKeyDown);
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('paste', handlePaste);
      });
    };
  }, []);

  const verifyOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000); // Simulate a network request
  };

  return (
    <div>
      <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-5 rounded-xl shadow">
        <header className="mb-8">
          <h1 className="text-xl font-bold mb-1">{type} Verification</h1>
          <p className="text-[15px] text-slate-500">Enter the 4-digit OTP</p>
        </header>
        <div id="otp-form">
          {loading ? (
            <div className="flex items-center justify-center py-4">
              <img src={loader} width={40} alt="" />
            </div>
          ) : success ? (
            <div className="text-green-500 text-lg">Verification Successful!</div>
          ) : (
            <>
              <div className="flex items-center justify-center gap-3">
                <input
                  type="text"
                  className="w-10 text-md h-10 text-center text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  pattern="\d*"
                  maxLength="1"
                />
                <input
                  type="text"
                  className="w-10 text-md h-10 text-center text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  maxLength="1"
                />
                <input
                  type="text"
                  className="w-10 text-md h-10 text-center text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  maxLength="1"
                />
                <input
                  type="text"
                  className="w-10 text-md h-10 text-center text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                  maxLength="1"
                />
              </div>
              <div className="max-w-[260px] mx-auto mt-4">
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-lime-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-lime-950/10 hover:bg-lime-600 focus:outline-none focus:ring focus:ring-lime-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-lime-300 transition-colors duration-150"
                >
                  Verify Account
                </button>
              </div>
              <div className="text-sm text-slate-500 mt-4">
          Didn't receive code?{' '}
          <Link className="font-medium text-lime-500 hover:text-lime-600" to="">
            Resend
          </Link>
        </div>
            </>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default OtpBox;

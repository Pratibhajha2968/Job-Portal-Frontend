// src/pages/PaymentPage.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Payment.css";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get course info from Courses page
  const courseName = location.state?.name;
  const coursePrice = location.state?.price;

  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState(coursePrice || "");
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  // Redirect if no course selected
  useEffect(() => {
    if (!courseName || !coursePrice) {
      navigate("/courses");
    }
  }, [courseName, coursePrice, navigate]);

  // Generate unique Order ID
  useEffect(() => {
    const uniqueId = "ORD" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(uniqueId);
  }, []);

  // Handle payment request
  const handlePayment = () => {
    if (!upiId || !amount) {
      alert("Please enter UPI ID and Amount");
      return;
    }
    // Show payment request status
    setStatus(`✅ Payment request of ₹${amount} sent to ${upiId}.`);
  };

  if (!courseName || !coursePrice) return null;

  return (
    <div className="payment-container">
      {/* Header */}
      <h1 className="payment-title">Enroll & Pay</h1>

      {/* Order Summary */}
      <div className="order-summary">
        <h2>Order Details</h2>
        <p><strong>Course:</strong> {courseName}</p>
        <p><strong>Order ID:</strong> {orderId}</p>
        <p><strong>Amount:</strong> ₹{amount}</p>
        <p className="course-short-details">Gain practical skills and projects in this course.</p>
      </div>

      {/* Payment Form */}
      <div className="payment-form">
        <input
          type="text"
          placeholder="Enter your UPI ID (example@upi)"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handlePayment}>Send Payment Request</button>
      </div>

      {/* Status */}
      {status && <div className="payment-status">{status}</div>}
    </div>
  );
};

export default PaymentPage;

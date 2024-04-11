import React from "react";

const CustomerDetails = ({ customerName, setCustomerName, mobileNumber, setMobileNumber, billNo }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col mb-4 md:mb-0">
        <label htmlFor="customerName" className="mb-2">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border px-2 py-1 rounded focus:outline-none"
        />
      </div>
      <div className="flex flex-col mb-4 md:mb-0 md:ml-4">
        <label htmlFor="mobileNumber" className="mb-2">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value.trim())}
          className="border px-2 py-1 rounded focus:outline-none"
        />
      </div>
      <div className="flex flex-col mb-4 md:mb-0 md:ml-4">
        <label htmlFor="billNo" className="mb-2">Bill No:</label>
        <input type="text" id="billNo" value={billNo} disabled className="border px-2 py-1 rounded focus:outline-none" />
      </div>
    </div>
  );
};

export default CustomerDetails;
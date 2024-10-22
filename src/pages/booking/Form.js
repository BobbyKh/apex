import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [pubgId, setPubgId] = useState("");
  const [mobile, setMobile] = useState("");
  const [price, setPrice] = useState(30);
  const [qrCode, setQrCode] = useState("");
  const [receipt, setReceipt] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !pubgId || !mobile) {
      setError(true);
      return;
    }

    const data = {
      name,
      pubgId,
      mobile,
      price,
    };

    // call api to generate qr code and receipt
    // for now, just set the state
    setQrCode("https://example.com/qr-code");
    setReceipt("https://example.com/receipt");

    // reset the form
    setName("");
    setPubgId("");
    setMobile("");
  };

  return (
    <div className=" max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mt-3 ">
      <h1 className="text-3xl font-bold text-center">Pubg Tournament</h1>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            {error && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-pubg-id"
            >
              Pubg Id
            </label>
            <input
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Enter your pubg id"
              value={pubgId}
              onChange={(e) => setPubgId(e.target.value)}
              required
            />

            {error && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-mobile"
            >
              Mobile
            </label>
            <input
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />

            {error && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-price"
            >
              Price
            </label>
            <input
              type="number"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Enter the price"
              value={price}
              onChange={(e) => setPrice(e.target.valueAsNumber)}
              required
              readOnly
            />

            {error && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-qr"
            >
              QR Code
            </label>
            <img
              src={qrCode}
              alt="QR Code for payment"
              className="w-full"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-receipt"
            >
              Receipt
            </label>
            <input
              type="file"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Upload your receipt"
              required
              onChange={(e) => setReceipt(e.target
                .files[0])}
            />

            {error && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>
        </div>
        <button
          type="submit"
          className="appearance-none bg-blue-500 text-white font-bold py-3 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;


import React from "react";
import ether1 from "../images/ether1.jpg";
import bitcoin from '../images/bitcoin.jpg';
import ether3 from '../images/ether3.jpg';


const TransactionsCard = ({addressFrom, addressTo, message, time, amount, coin, picture}) => {
    
    return (
      <div className="bg-[#181918] m-4 flex flex-1
        2xl:min-w-[450px]
        2xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        min-w-full
        flex-col p-3 rounded-md hover:shadow-2xl"
      >
        <div className="flex flex-col items-center w-full mt-3">
          <div className="display-flex justify-start w-full mb-6 p-2">
            <p className="text-white text-base">From: {addressFrom}</p>
            <p className="text-white text-base">To: {addressTo}</p>
            <p className="text-white text-base">Amount: {amount} {coin}</p>
            <div>
                <br />
                <p className="text-white text-base">Message: {message}</p>
            </div>
          </div>
          <img
            // src={gifUrl || url}
            src={picture}
            alt="nature"
            // className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
            className=""
          />
          <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
            <p className="text-[#37c7da] font-bold">{time}</p>
          </div>
        </div>
      </div>
    );
  };

const Transactions = () => {
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
          <div className="flex flex-wrap justify-center items-center mt-10">
            <TransactionsCard 
                addressFrom="0xeaa...eb246" 
                addressTo="0xcf8...a6a90" 
                amount={0.01}
                coin={"Ethereum"}
                message="Test" time="8/01/2022 - 7:00 a.m."
                picture={ether3}
            />
            <TransactionsCard 
                addressFrom="0xcf8...a6a90" 
                addressTo="0xcf8...a6a90" 
                amount={"0.0011729"}
                coin={"Ethereum"}
                message="Test" time="7/01/2022 - 8:58 p.m."
                picture={ether3}
            />
            <TransactionsCard 
                addressFrom="0xcf...a6a90" 
                addressTo="0x8aa...cfdbe" 
                amount={"0.00003288438"}
                coin={"Bitcoin"}
                message="Test" time="7/01/2022 - 1:19 p.m."
                picture={bitcoin}
            />
            <TransactionsCard 
                addressFrom="de" 
                addressTo="para" 
                message="Test" time="6/01/2022 - 4:09 p.m."
            />
            <TransactionsCard 
                addressFrom="de" 
                addressTo="para" 
                message="Test" time="6/01/2022 - 9:43 a.m."
            />
            <TransactionsCard 
                addressFrom="de" 
                addressTo="para" 
                message="Test" time="5/01/2022 - 11:34 a.m."
            />
            </div>
      </div>
    </div>
    
  );
};

export default Transactions;

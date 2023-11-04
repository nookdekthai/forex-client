import { styles } from "@/app/styles/style";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { useCreateOrderEbookMutation, useCreateOrderMutation } from "@/redux/features/orders/ordersApi";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import socketIO from "socket.io-client";
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

type Props = {
  setOpen: any;
  setOpenModalDownLoad?: any;
  setLoadingBackDrop?: any;
  data: any;
  user:any;
  refetch:any;
  payForm: string;
};

const CheckOutForm = ({ setLoadingBackDrop, setOpenModalDownLoad, setOpen, data,user,refetch, payForm = 'course' }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<any>("");
  const [createOrder, { data: orderData, error }] = useCreateOrderMutation();
  const [createOrderEbook, { data: orderDataEbook, error: errorEbook }] = useCreateOrderEbookMutation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    setLoadingBackDrop(true)
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (error) {
      setMessage(error.message);
      setIsLoading(false);
      setLoadingBackDrop(false)
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setIsLoading(false);
      if(payForm === 'course'){
        setLoadingBackDrop(false)
        createOrder({ courseId: data._id, payment_info: paymentIntent  });
      }else{
        createOrderEbook({ ebookId: data._id, payment_info: paymentIntent });
      }
    }
  };

  useEffect(() => {
   if(orderData){
    refetch();
    socketId.emit("notification", {
       title: "New Order",
       message: `You have a new order from ${data.name}`,
       userId: user._id,
    });
   }
   if(error){
    if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
   }
  }, [orderData,error])

  useEffect(() => {
   if(orderDataEbook){
    refetch();
    socketId.emit("notification", {
       title: "New Order",
       message: `You have a new order from ${data.name}`,
       userId: user._id,
    });
    setOpen(false)
    setOpenModalDownLoad(true)
   }
   if(errorEbook){
    if ("data" in errorEbook) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
   }
  }, [orderDataEbook,errorEbook])
  

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement id="link-authentication-element" />
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text" className={`${styles.button} mt-2 !h-[35px]`}>
          {isLoading ? "Paying..." : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div id="payment-message" className="text-[red] font-Poppins pt-2">
          {message}
        </div>
      )}
    </form>
  );
};

export default CheckOutForm;

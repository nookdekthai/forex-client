import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        Who is <span className="text-gradient">Aj.Net</span>
      </h1>
      
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          อาจารย์เน็ทผู้มีประสบการณ์ในตลาด Forex ยาวนานถึง 7 ปี 
          ไม่อยากให้มือใหม่่เสียเงินไปกับคำว่าไม่รู้จนถึงขั้นเลิกเทรด
          เราคำนึงถึงความไม่รู้ว่าเป็นปัจจัยที่สามารถเเก้ไขได้
          เพียงคุณลงทุนใน "ตัวเอง" ให้เพียงพอ ก่อนจะเทรดจริง
          <br />
          <br />
          เหตุนี้ทางอาจารย์เน็ทก็ได้คิดจะช่วยเหลือมือใหม่ เพื่อให้ไม่ต้องเสียค่าครูเป็นจำนวนเงินเยอะ
          จึงเกิดคอร์สสอนเทรดที่สามารถนำไปใช้ได้โดยไม่ต้องเสียเงินลองผิดลองถูก
          โดยคอร์สมีทั้งกลยุทธิ์เทรดข่าว กลยุทธิ์เทรดโดยดูเเท่งเทียน รวนถึงเทรดเทคนิค
          
          <br />
         
          <br />
          สุดท้ายเเล้ว ครูเน็ทอยากจะบอกทุกคนที่เข้ามาอ่านหรือมาเรียน ให้คำนึงถึงความเสี่ยง
          ก่อนที่จะเทรดจริงทุกครั้ง เพราะไม่อยากให้ใคร .. ต้องมาเเล้วก็หายไปในตลาด
          <br />
          <br />
    
        </p>
        <br />
        <span className="text-[22px]">Shahriarsajeeb&apos;s</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of 
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;

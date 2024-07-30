import React from "react";

function NewsLetters() {
  return (
    <div
      className="mt-5 p-2"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="p-4 rounded-2xl relative section_news_letters w-full">
        <div className="text-white flex flex-col items-center  justify-center gap-2 md:gap-7 rounded-md w-full h-full">
          <h5 className="font-bold mb-3 text-3xl md:text-4xl 2xl:text-4xl">
            عضویت در خبرنامه
          </h5>
          <p className="text-center font-bold md:text-2xl 2xl:text-3xl">
            به جامعه Art Token بپیوندید تا در جریان آخرین اخبار، ویژگی‌ها و نکات
            مربوط به این بازار قرار بگیرید.
          </p>
          <form action="" className="mt-8">
            <div className="w-full flex">
              <input
                type="text"
                placeholder="ایمیل خود را وارد کنید"
                className="rounded-s-full w-full py-4  md:text-2xl lg:text-2xl hover:outline-none text-center text-gray-900 2xl:text-2xl"
              />
              <button className="bg-black px-10 py-4 rounded-e-full text-white border-0 md:text-2xl lg:text-xl 2xl:text-2xl">
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsLetters;

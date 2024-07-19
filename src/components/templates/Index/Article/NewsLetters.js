import React from "react";

function NewsLetters() {
  return (
    <div class="mt-5 p-2 ">
      <div class="p-4 rounded-2xl relative section_news_letters w-full">
        <div class="text-white flex flex-col items-center  justify-center gap-2 md:gap-7 rounded-md w-full h-full">
          <h5 class="font-bold mb-3 text-3xl md:text-4xl 2xl:text-6xl">عضویت در خبرنامه</h5>
          <p class="text-center font-bold md:text-2xl 2xl:text-4xl">
            به جامعه Art Token بپیوندید تا در جریان آخرین اخبار، ویژگی‌ها و نکات
            مربوط به این بازار قرار بگیرید.
          </p>
          <form action="" class="mt-8">
            <div class="w-full flex">
              <input
                type="text"
                placeholder="ایمیل خود را وارد کنید"
                class="rounded-s-full w-full py-4  md:text-2xl lg:text-2xl hover:outline-none text-center text-gray-900 2xl:text-4xl"
              />
              <button class="bg-black px-10 py-4 rounded-e-full text-white border-0 md:text-2xl lg:text-2xl 2xl:text-4xl">
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

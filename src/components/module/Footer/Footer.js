import React from "react";

function Footer() {
  return (
    <footer className="p-2 lg:p-5 footer py-10">
      <div className="relative ">
        <div className="flex relative flex-col p-4 gap-5 md:flex-row md:items-start">
          <div className="w-full md:w-2/3">
            <ul className="">
              <li>
                <h4 className="text-white text-center md:text-start lg:text-start font-bold mb-8 text-2xl md:text-xl 2xl:text-3xl">
                  Iran NFT
                </h4>
              </li>
              <li>
                <p className="text-white md:text-start 2xl:text-xl">
                  بازار دیجیتال جهانی برای خرید و فروش کلکسیون ها و توکن های
                  غیرقابل تعویض (NFT) و کشف اقلام دیجیتال منحصر به فرد
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/4">
            <ul className="my-5 md:my-0 flex flex-col gap-10">
              <li>
                <h4 className="text-white text-center lg:text-start font-bold mb-4 md:text-xl 2xl:text-2xl">
                  به ما بپیوندید
                </h4>
              </li>
              <li className="flex gap-3 justify-center lg:justify-start md:items-start">
                <a
                  href=""
                  className="text-white icon_footer_link rounded-xl flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.64654 23.3668C9.71815 23.3907 9.79179 23.408 9.86654 23.4185C10.3381 24.5296 10.807 25.6418 11.2732 26.7551C12.1115 28.7585 12.9565 30.8218 13.1415 31.4151C13.3732 32.1451 13.6165 32.6418 13.8832 32.9818C14.0215 33.1551 14.1799 33.3085 14.3665 33.4251C14.4638 33.486 14.5678 33.5352 14.6765 33.5718C15.2099 33.7718 15.6965 33.6885 16.0015 33.5868C16.1805 33.5257 16.3508 33.4417 16.5082 33.3368L16.5165 33.3335L21.2265 30.3968L26.6682 34.5668C26.7482 34.6285 26.8349 34.6801 26.9282 34.7218C27.5815 35.0051 28.2149 35.1051 28.8115 35.0251C29.4049 34.9418 29.8765 34.6935 30.2282 34.4118C30.632 34.0863 30.9539 33.6708 31.1682 33.1985L31.1832 33.1618L31.1882 33.1485L31.1915 33.1418V33.1385L31.1932 33.1368C31.2222 33.0651 31.2445 32.9909 31.2599 32.9151L36.2265 7.87347C36.2422 7.79332 36.25 7.71182 36.2499 7.63014C36.2499 6.89681 35.9732 6.19847 35.3249 5.77681C34.7682 5.41514 34.1499 5.39847 33.7582 5.42847C33.3382 5.46181 32.9482 5.56514 32.6865 5.64847C32.5401 5.6949 32.3955 5.74716 32.2532 5.80514L32.2349 5.81347L4.37821 16.7401L4.37487 16.7418C4.28062 16.7765 4.18777 16.8148 4.09654 16.8568C3.87564 16.9561 3.66374 17.0743 3.46321 17.2101C3.08487 17.4685 2.21321 18.1785 2.36154 19.3518C2.47821 20.2851 3.11821 20.8601 3.50987 21.1368C3.72321 21.2885 3.92654 21.3968 4.07654 21.4685C4.14321 21.5018 4.28654 21.5585 4.34821 21.5851L4.36487 21.5901L9.64654 23.3668ZM33.2099 8.11347H33.2065C33.1922 8.11984 33.1778 8.12596 33.1632 8.13181L5.27321 19.0735C5.25886 19.0793 5.24441 19.0848 5.22987 19.0901L5.21321 19.0951C5.16226 19.1152 5.11221 19.1374 5.06321 19.1618C5.1096 19.1884 5.15745 19.2123 5.20654 19.2335L10.4432 20.9968C10.5368 21.0283 10.6263 21.0709 10.7099 21.1235L28.0049 10.9985L28.0215 10.9901C28.0887 10.9493 28.1577 10.9115 28.2282 10.8768C28.3482 10.8151 28.5399 10.7251 28.7565 10.6585C28.9065 10.6118 29.3515 10.4801 29.8315 10.6351C30.0861 10.7154 30.313 10.8656 30.4863 11.0687C30.6596 11.2717 30.7723 11.5194 30.8115 11.7835C30.8736 12.0147 30.8753 12.258 30.8165 12.4901C30.6999 12.9485 30.3799 13.3051 30.0865 13.5785C29.8365 13.8118 26.5949 16.9385 23.3965 20.0251L19.0415 24.2251L18.2665 24.9751L28.0532 32.4785C28.1853 32.5339 28.3288 32.5568 28.4715 32.5451C28.5435 32.5354 28.6111 32.5053 28.6665 32.4585C28.7341 32.4014 28.7921 32.3339 28.8382 32.2585L28.8415 32.2568L33.6582 7.96847C33.5065 8.00497 33.3577 8.05288 33.2132 8.11181L33.2099 8.11347ZM19.1082 28.7701L17.1549 27.2735L16.6815 30.2818L19.1082 28.7701ZM15.3632 24.3035L17.3049 22.4285L21.6599 18.2251L23.2815 16.6618L12.4149 23.0235L12.4732 23.1601C13.1585 24.7792 13.8363 26.4014 14.5065 28.0268L14.9782 25.0268C15.0209 24.7486 15.1566 24.4947 15.3632 24.3035Z"
                      fill="white"
                      fillOpacity="0.5"
                    />
                  </svg>
                </a>
                <a
                  href=""
                  className="text-white fw-white   icon_footer_link rounded-xl flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M25.5835 9.25003C24.3171 9.24981 23.1011 9.74666 22.1972 10.6337C21.2934 11.5208 20.7737 12.7271 20.7502 13.9934L20.7035 16.6184C20.701 16.7594 20.6687 16.8984 20.6086 17.0261C20.5486 17.1538 20.4622 17.2673 20.3552 17.3593C20.2481 17.4512 20.1228 17.5194 19.9875 17.5595C19.8522 17.5996 19.71 17.6105 19.5702 17.5917L16.9668 17.2367C13.5452 16.77 10.2652 15.195 7.11682 12.5734C6.12182 18.09 8.06682 21.9117 12.7552 24.86L15.6668 26.69C15.8049 26.7769 15.9197 26.8962 16.0011 27.0376C16.0825 27.179 16.128 27.3382 16.1338 27.5012C16.1395 27.6643 16.1053 27.8263 16.0341 27.9731C15.9629 28.1199 15.8568 28.247 15.7252 28.3434L13.0718 30.2834C14.6502 30.3834 16.1485 30.3134 17.3918 30.0667C25.2552 28.4967 30.4835 22.58 30.4835 12.82C30.4835 12.0234 28.7952 9.25003 25.5835 9.25003ZM17.4168 13.9334C17.4459 12.3268 17.9483 10.7645 18.8611 9.44206C19.7739 8.11965 21.0565 7.09589 22.5483 6.49897C24.0402 5.90205 25.675 5.75849 27.2481 6.08627C28.8211 6.41405 30.2625 7.1986 31.3918 8.34169C32.5768 8.33336 33.5852 8.63336 35.8385 7.26503C35.2818 9.99836 35.0052 11.1867 33.8168 12.8184C33.8168 25.5534 25.9885 31.7484 18.0435 33.3334C12.5985 34.42 4.67682 32.635 2.41016 30.2634C3.56516 30.175 8.26516 29.67 10.9818 27.68C8.68182 26.1634 -0.464844 20.78 5.54682 6.31003C8.36849 9.60503 11.2302 11.8467 14.1302 13.0384C16.0585 13.83 16.5335 13.8134 17.4185 13.935L17.4168 13.9334Z"
                      fill="white"
                      fillOpacity="0.5"
                    />
                  </svg>
                </a>
                <a
                  href=""
                  className="text-white fw-white icon_footer_instagram icon_footer_link rounded-xl flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M32.1165 8.88325C29.8999 7.84991 27.4999 7.09991 24.9999 6.66658C24.978 6.66588 24.9561 6.66999 24.936 6.67863C24.9158 6.68727 24.8978 6.70022 24.8832 6.71658C24.5832 7.26658 24.2332 7.98325 23.9999 8.53325C21.3482 8.13325 18.6515 8.13325 15.9999 8.53325C15.7665 7.96658 15.4165 7.26658 15.0999 6.71658C15.0832 6.68325 15.0332 6.66658 14.9832 6.66658C12.4832 7.09991 10.0999 7.84991 7.86654 8.88325C7.84987 8.88325 7.8332 8.89991 7.81654 8.91658C3.2832 15.6999 2.0332 22.2999 2.64987 28.8332C2.64987 28.8666 2.66654 28.8999 2.69987 28.9166C5.69987 31.1166 8.5832 32.4499 11.4332 33.3332C11.4832 33.3499 11.5332 33.3332 11.5499 33.2999C12.2165 32.3832 12.8165 31.4166 13.3332 30.3999C13.3665 30.3332 13.3332 30.2666 13.2665 30.2499C12.3165 29.8832 11.4165 29.4499 10.5332 28.9499C10.4665 28.9166 10.4665 28.8166 10.5165 28.7666C10.6999 28.6332 10.8832 28.4832 11.0665 28.3499C11.0999 28.3166 11.1499 28.3166 11.1832 28.3332C16.9165 30.9499 23.0999 30.9499 28.7665 28.3332C28.7999 28.3166 28.8499 28.3166 28.8832 28.3499C29.0665 28.4999 29.2499 28.6332 29.4332 28.7832C29.4999 28.8332 29.4999 28.9332 29.4165 28.9666C28.5499 29.4832 27.6332 29.8999 26.6832 30.2666C26.6165 30.2832 26.5999 30.3666 26.6165 30.4166C27.1499 31.4332 27.7499 32.3999 28.3999 33.3166C28.4499 33.3332 28.4999 33.3499 28.5499 33.3332C31.4165 32.4499 34.2999 31.1166 37.2999 28.9166C37.3332 28.8999 37.3499 28.8666 37.3499 28.8332C38.0832 21.2832 36.1332 14.7332 32.1832 8.91658C32.1665 8.89991 32.1499 8.88325 32.1165 8.88325ZM14.1999 24.8499C12.4832 24.8499 11.0499 23.2666 11.0499 21.3166C11.0499 19.3666 12.4499 17.7832 14.1999 17.7832C15.9665 17.7832 17.3665 19.3832 17.3499 21.3166C17.3499 23.2666 15.9499 24.8499 14.1999 24.8499ZM25.8165 24.8499C24.0999 24.8499 22.6665 23.2666 22.6665 21.3166C22.6665 19.3666 24.0665 17.7832 25.8165 17.7832C27.5832 17.7832 28.9832 19.3832 28.9665 21.3166C28.9665 23.2666 27.5832 24.8499 25.8165 24.8499Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href=""
                  className="text-white fw-white icon_footer_link rounded-xl flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M28.9002 9.10016C28.5046 9.10016 28.1179 9.21746 27.789 9.43722C27.4601 9.65699 27.2038 9.96934 27.0524 10.3348C26.901 10.7002 26.8614 11.1024 26.9386 11.4903C27.0158 11.8783 27.2062 12.2347 27.4859 12.5144C27.7657 12.7941 28.122 12.9846 28.51 13.0617C28.8979 13.1389 29.3001 13.0993 29.6655 12.9479C30.031 12.7965 30.3433 12.5402 30.5631 12.2113C30.7829 11.8824 30.9002 11.4957 30.9002 11.1002C30.9002 10.5697 30.6894 10.061 30.3144 9.68595C29.9393 9.31088 29.4306 9.10016 28.9002 9.10016ZM36.5668 13.1335C36.5344 11.7507 36.2754 10.3825 35.8002 9.0835C35.3764 7.97205 34.7168 6.96563 33.8668 6.1335C33.0415 5.27921 32.0328 4.62379 30.9168 4.21683C29.6213 3.7271 28.2516 3.46218 26.8668 3.4335C25.1002 3.3335 24.5335 3.3335 20.0002 3.3335C15.4668 3.3335 14.9002 3.3335 13.1335 3.4335C11.7487 3.46218 10.3791 3.7271 9.0835 4.21683C7.96962 4.62791 6.96172 5.28276 6.1335 6.1335C5.27921 6.95879 4.62379 7.96756 4.21683 9.0835C3.7271 10.3791 3.46218 11.7487 3.4335 13.1335C3.3335 14.9002 3.3335 15.4668 3.3335 20.0002C3.3335 24.5335 3.3335 25.1002 3.4335 26.8668C3.46218 28.2516 3.7271 29.6213 4.21683 30.9168C4.62379 32.0328 5.27921 33.0415 6.1335 33.8668C6.96172 34.7176 7.96962 35.3724 9.0835 35.7835C10.3791 36.2732 11.7487 36.5381 13.1335 36.5668C14.9002 36.6668 15.4668 36.6668 20.0002 36.6668C24.5335 36.6668 25.1002 36.6668 26.8668 36.5668C28.2516 36.5381 29.6213 36.2732 30.9168 35.7835C32.0328 35.3765 33.0415 34.7211 33.8668 33.8668C34.7206 33.0378 35.3807 32.0305 35.8002 30.9168C36.2754 29.6178 36.5344 28.2497 36.5668 26.8668C36.5668 25.1002 36.6668 24.5335 36.6668 20.0002C36.6668 15.4668 36.6668 14.9002 36.5668 13.1335ZM33.5668 26.6668C33.5547 27.7248 33.3631 28.773 33.0002 29.7668C32.7341 30.4922 32.3066 31.1475 31.7502 31.6835C31.2096 32.2343 30.5555 32.6609 29.8335 32.9335C28.8397 33.2964 27.7914 33.488 26.7335 33.5002C25.0668 33.5835 24.4502 33.6002 20.0668 33.6002C15.6835 33.6002 15.0668 33.6002 13.4002 33.5002C12.3016 33.5207 11.2078 33.3516 10.1668 33.0002C9.47647 32.7136 8.85242 32.2881 8.3335 31.7502C7.78031 31.2147 7.35823 30.5588 7.10016 29.8335C6.69326 28.8254 6.46757 27.7534 6.4335 26.6668C6.4335 25.0002 6.3335 24.3835 6.3335 20.0002C6.3335 15.6168 6.3335 15.0002 6.4335 13.3335C6.44097 12.2519 6.63841 11.1801 7.01683 10.1668C7.31024 9.46335 7.7606 8.83626 8.3335 8.3335C8.83985 7.76044 9.46564 7.30532 10.1668 7.00016C11.1827 6.63357 12.2535 6.44196 13.3335 6.4335C15.0002 6.4335 15.6168 6.3335 20.0002 6.3335C24.3835 6.3335 25.0002 6.3335 26.6668 6.4335C27.7248 6.44563 28.773 6.63724 29.7668 7.00016C30.5242 7.28125 31.204 7.73824 31.7502 8.3335C32.2963 8.84546 32.7231 9.47138 33.0002 10.1668C33.3706 11.1817 33.5623 12.2531 33.5668 13.3335C33.6502 15.0002 33.6668 15.6168 33.6668 20.0002C33.6668 24.3835 33.6502 25.0002 33.5668 26.6668ZM20.0002 11.4502C18.3098 11.4535 16.6584 11.9577 15.2546 12.8992C13.8507 13.8407 12.7575 15.1772 12.1129 16.7398C11.4683 18.3023 11.3014 20.0209 11.6332 21.6784C11.9649 23.3358 12.7806 24.8577 13.977 26.0518C15.1734 27.2459 16.6968 28.0585 18.3549 28.3871C20.013 28.7156 21.7313 28.5453 23.2926 27.8977C24.8539 27.2501 26.1883 26.1542 27.127 24.7486C28.0658 23.3429 28.5668 21.6905 28.5668 20.0002C28.569 18.8753 28.3488 17.7612 27.9189 16.7218C27.489 15.6823 26.8578 14.7382 26.0616 13.9436C25.2655 13.149 24.3201 12.5196 23.2798 12.0917C22.2396 11.6638 21.125 11.4458 20.0002 11.4502ZM20.0002 25.5502C18.9025 25.5502 17.8294 25.2247 16.9167 24.6148C16.0041 24.005 15.2927 23.1382 14.8726 22.1241C14.4526 21.1099 14.3427 19.994 14.5568 18.9174C14.771 17.8408 15.2995 16.8519 16.0757 16.0757C16.8519 15.2995 17.8408 14.771 18.9174 14.5568C19.994 14.3427 21.1099 14.4526 22.1241 14.8726C23.1382 15.2927 24.005 16.0041 24.6148 16.9167C25.2247 17.8294 25.5502 18.9025 25.5502 20.0002C25.5502 20.729 25.4066 21.4507 25.1277 22.1241C24.8488 22.7974 24.44 23.4092 23.9246 23.9246C23.4092 24.44 22.7974 24.8488 22.1241 25.1277C21.4507 25.4066 20.729 25.5502 20.0002 25.5502Z"
                      fill="white"
                      fillOpacity="0.5"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full flex justify-between 2xl:justify-evenly items-center gap-4 md:items-start md:gap-6">
            <div className="w-1/2 flex flex-col items-center">
              <ul className="flex flex-col">
                <li>
                  <h4 className="text-white font-bold mb-4 md:text-xl md:text-nowrap 2xl:text-2xl 2xl:mb-10">
                    دسترسی سریع
                  </h4>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white fw-medium mb-3 block 2xl:text-xl"
                  >
                    شرایط استفاده از خدمات
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white fw-medium mb-3 block 2xl:text-xl"
                  >
                    سوالات متداول
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white fw-medium mb-3 block 2xl:text-xl"
                  >
                    درباره ما
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 flex flex-col items-center">
              <ul className="">
                <li>
                  <h4 className="text-white font-bold fs-4 mb-4 md:text-xl text-nowrap 2xl:text-2xl 2xl:mb-10">
                    حساب من
                  </h4>
                </li>
                <li>
                  <a
                    href="/my-account"
                    className="text-white fw-medium mb-3 block 2xl:text-xl"
                  >
                    پروفایل
                  </a>
                </li>
                <li>
                  <a
                    href="/my-account/orders"
                    className="text-white fw-medium mb-3 block 2xl:text-xl 2xl:text-nowrap"
                  >
                    ان اف تی های شما
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white fw-medium mb-3 block 2xl:text-xl"
                  >
                    علاقه مندی ها
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Ellipse_4 rounded-circle z-1 absolute"></div>
      </div>
    </footer>
  );
}

export default Footer;

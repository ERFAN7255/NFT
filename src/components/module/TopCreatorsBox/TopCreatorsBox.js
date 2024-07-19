import React from "react";

function TopCreatorsBox() {
  return (
    <>
      <div class="w-full sm:w-1/2 md:w-1/3 md:p-2 lg:p-4">
        <div
          class="flex items-center justify-center gap-3 p-3  
        border-1 lg:px-4 2xl:px-8
        bg-gray-custom rounded-xl h-48"
        >
          <div class="text-end w-full text-white flex flex-col items-end  p-1 h-28 justify-around">
            <h5 class="fw-bold fs-4 m-0 2xl:text-2xl">Negar77</h5>
            <div class="my-2 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g clip-path="url(#clip0_723_29)">
                  <path
                    d="M12.5281 15.9905C12.1543 15.9905 11.6746 15.8706 11.0751 15.5179L8.96607 14.2695C8.7474 14.1425 8.32419 14.1425 8.11258 14.2695L5.99651 15.5179C4.74803 16.2586 4.01446 15.9623 3.68294 15.7225C3.35848 15.4827 2.85062 14.869 3.18214 13.4583L3.68294 11.2928C3.73937 11.0671 3.62651 10.6792 3.45723 10.5099L1.70794 8.76062C0.833297 7.88597 0.903833 7.1383 1.02374 6.77151C1.14365 6.40472 1.52455 5.7558 2.73776 5.55124L4.98785 5.1774C5.19946 5.14213 5.50276 4.91642 5.59446 4.72597L6.84294 2.23606C7.40723 1.10044 8.14785 0.931152 8.5358 0.931152C8.92374 0.931152 9.66437 1.10044 10.2287 2.23606L11.4701 4.71892C11.5688 4.90937 11.8721 5.13508 12.0837 5.17035L14.3338 5.54419C15.5541 5.74874 15.935 6.39767 16.0479 6.76446C16.1607 7.13124 16.2312 7.87892 15.3637 8.75356L13.6144 10.5099C13.4451 10.6792 13.3393 11.0601 13.3887 11.2928L13.8895 13.4583C14.2139 14.869 13.7131 15.4827 13.3887 15.7225C13.2123 15.8495 12.9302 15.9905 12.5281 15.9905ZM8.5358 13.1127C8.88142 13.1127 9.22705 13.1973 9.50214 13.3595L11.6112 14.608C12.2248 14.9748 12.6128 14.9748 12.7609 14.869C12.909 14.7632 13.0148 14.3894 12.8596 13.6981L12.3588 11.5327C12.2248 10.9472 12.4435 10.1925 12.8667 9.76223L14.616 8.01294C14.9616 7.66731 15.1168 7.32874 15.0462 7.09597C14.9687 6.86321 14.6442 6.67276 14.1645 6.59517L11.9145 6.22133C11.3713 6.12963 10.7788 5.69231 10.532 5.19856L9.29053 2.71571C9.06482 2.26428 8.78267 1.99624 8.5358 1.99624C8.28892 1.99624 8.00678 2.26428 7.78812 2.71571L6.53964 5.19856C6.29276 5.69231 5.70026 6.12963 5.15714 6.22133L2.9141 6.59517C2.43446 6.67276 2.10999 6.86321 2.0324 7.09597C1.95482 7.32874 2.11705 7.67437 2.46267 8.01294L4.21196 9.76223C4.63517 10.1854 4.85383 10.9472 4.71982 11.5327L4.21901 13.6981C4.05678 14.3964 4.16964 14.7632 4.31776 14.869C4.46589 14.9748 4.84678 14.9678 5.46749 14.608L7.57651 13.3595C7.84455 13.1973 8.19017 13.1127 8.5358 13.1127Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_723_29">
                    <rect
                      width="16.9286"
                      height="16.9286"
                      fill="white"
                      transform="translate(0.0712891)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M4.04885 11.2856C4.12644 10.94 3.98536 10.4463 3.73849 10.1994L2.02447 8.48538C1.4884 7.94931 1.27679 7.37797 1.43197 6.88422C1.5942 6.39047 2.09501 6.05189 2.84269 5.92493L5.0434 5.55815C5.36081 5.50172 5.74876 5.21957 5.89688 4.93038L7.1101 2.49689C7.46278 1.79859 7.94242 1.41064 8.46438 1.41064C8.98635 1.41064 9.46599 1.79859 9.81867 2.49689L11.0319 4.93038C11.1236 5.11377 11.314 5.29011 11.5186 5.41002L3.92188 13.0067C3.82313 13.1055 3.65385 13.0138 3.68206 12.8727L4.04885 11.2856ZM13.1903 10.2008C12.9363 10.4547 12.7953 10.9414 12.8799 11.2871L13.3666 13.4102C13.5712 14.2919 13.4442 14.9549 13.0069 15.2723C12.8211 15.4022 12.5986 15.4689 12.3721 15.4628C12.0123 15.4628 11.5891 15.3288 11.1236 15.0537L9.05688 13.8263C8.73242 13.6359 8.19635 13.6359 7.87188 13.8263L5.80519 15.0537C5.02224 15.5121 4.35215 15.5897 3.92188 15.2723C3.75965 15.1524 3.63974 14.9902 3.56215 14.7786L12.1393 6.20143C12.4638 5.87697 12.9222 5.72884 13.3666 5.80643L14.079 5.92634C14.8267 6.05331 15.3275 6.39188 15.4897 6.88563C15.6449 7.37938 15.4333 7.95072 14.8972 8.48679L13.1903 10.2008Z"
                  fill="#FFE600"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M4.04885 11.2856C4.12644 10.94 3.98536 10.4463 3.73849 10.1994L2.02447 8.48538C1.4884 7.94931 1.27679 7.37797 1.43197 6.88422C1.5942 6.39047 2.09501 6.05189 2.84269 5.92493L5.0434 5.55815C5.36081 5.50172 5.74876 5.21957 5.89688 4.93038L7.1101 2.49689C7.46278 1.79859 7.94242 1.41064 8.46438 1.41064C8.98635 1.41064 9.46599 1.79859 9.81867 2.49689L11.0319 4.93038C11.1236 5.11377 11.314 5.29011 11.5186 5.41002L3.92188 13.0067C3.82313 13.1055 3.65385 13.0138 3.68206 12.8727L4.04885 11.2856ZM13.1903 10.2008C12.9363 10.4547 12.7953 10.9414 12.8799 11.2871L13.3666 13.4102C13.5712 14.2919 13.4442 14.9549 13.0069 15.2723C12.8211 15.4022 12.5986 15.4689 12.3721 15.4628C12.0123 15.4628 11.5891 15.3288 11.1236 15.0537L9.05688 13.8263C8.73242 13.6359 8.19635 13.6359 7.87188 13.8263L5.80519 15.0537C5.02224 15.5121 4.35215 15.5897 3.92188 15.2723C3.75965 15.1524 3.63974 14.9902 3.56215 14.7786L12.1393 6.20143C12.4638 5.87697 12.9222 5.72884 13.3666 5.80643L14.079 5.92634C14.8267 6.05331 15.3275 6.39188 15.4897 6.88563C15.6449 7.37938 15.4333 7.95072 14.8972 8.48679L13.1903 10.2008Z"
                  fill="#FFE600"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M4.04885 11.2856C4.12644 10.94 3.98536 10.4463 3.73849 10.1994L2.02447 8.48538C1.4884 7.94931 1.27679 7.37797 1.43197 6.88422C1.5942 6.39047 2.09501 6.05189 2.84269 5.92493L5.0434 5.55815C5.36081 5.50172 5.74876 5.21957 5.89688 4.93038L7.1101 2.49689C7.46278 1.79859 7.94242 1.41064 8.46438 1.41064C8.98635 1.41064 9.46599 1.79859 9.81867 2.49689L11.0319 4.93038C11.1236 5.11377 11.314 5.29011 11.5186 5.41002L3.92188 13.0067C3.82313 13.1055 3.65385 13.0138 3.68206 12.8727L4.04885 11.2856ZM13.1903 10.2008C12.9363 10.4547 12.7953 10.9414 12.8799 11.2871L13.3666 13.4102C13.5712 14.2919 13.4442 14.9549 13.0069 15.2723C12.8211 15.4022 12.5986 15.4689 12.3721 15.4628C12.0123 15.4628 11.5891 15.3288 11.1236 15.0537L9.05688 13.8263C8.73242 13.6359 8.19635 13.6359 7.87188 13.8263L5.80519 15.0537C5.02224 15.5121 4.35215 15.5897 3.92188 15.2723C3.75965 15.1524 3.63974 14.9902 3.56215 14.7786L12.1393 6.20143C12.4638 5.87697 12.9222 5.72884 13.3666 5.80643L14.079 5.92634C14.8267 6.05331 15.3275 6.39188 15.4897 6.88563C15.6449 7.37938 15.4333 7.95072 14.8972 8.48679L13.1903 10.2008Z"
                  fill="#FFE600"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M4.04885 11.2856C4.12644 10.94 3.98536 10.4463 3.73849 10.1994L2.02447 8.48538C1.4884 7.94931 1.27679 7.37797 1.43197 6.88422C1.5942 6.39047 2.09501 6.05189 2.84269 5.92493L5.0434 5.55815C5.36081 5.50172 5.74876 5.21957 5.89688 4.93038L7.1101 2.49689C7.46278 1.79859 7.94242 1.41064 8.46438 1.41064C8.98635 1.41064 9.46599 1.79859 9.81867 2.49689L11.0319 4.93038C11.1236 5.11377 11.314 5.29011 11.5186 5.41002L3.92188 13.0067C3.82313 13.1055 3.65385 13.0138 3.68206 12.8727L4.04885 11.2856ZM13.1903 10.2008C12.9363 10.4547 12.7953 10.9414 12.8799 11.2871L13.3666 13.4102C13.5712 14.2919 13.4442 14.9549 13.0069 15.2723C12.8211 15.4022 12.5986 15.4689 12.3721 15.4628C12.0123 15.4628 11.5891 15.3288 11.1236 15.0537L9.05688 13.8263C8.73242 13.6359 8.19635 13.6359 7.87188 13.8263L5.80519 15.0537C5.02224 15.5121 4.35215 15.5897 3.92188 15.2723C3.75965 15.1524 3.63974 14.9902 3.56215 14.7786L12.1393 6.20143C12.4638 5.87697 12.9222 5.72884 13.3666 5.80643L14.079 5.92634C14.8267 6.05331 15.3275 6.39188 15.4897 6.88563C15.6449 7.37938 15.4333 7.95072 14.8972 8.48679L13.1903 10.2008Z"
                  fill="#FFE600"
                />
              </svg>
            </div>
            <div class="flex justify-between items-center w-full xl:text-xl">
              <span>فروش کل:</span>
              <span>56.32 ETH</span>
            </div>
          </div>

          <div class="img_top_creators">
            <img src="img/Ellipse 10.png" width="100%" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopCreatorsBox;

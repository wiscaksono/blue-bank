import Svg, { SvgProps, Path, Ellipse, Circle } from "react-native-svg";

export const BlueBankSM = (props: SvgProps) => {
  return (
    <Svg width="138" height="35" viewBox="0 0 138 35" {...props}>
      <Path
        d="M0 2.59843C0 2.59843 0 0 2.59843 0C5.19685 0 4.96063 2.59843 4.96063 2.59843V8.50394L2.12714 12.2835C2.12714 12.2835 5.66929 8.0315 11.5748 8.0315C17.4803 8.0315 22.2047 13.937 22.2047 19.1339C22.2047 24.3307 16.2992 30 12.9921 30H0L3.07087 26.6929C3.07087 26.6929 -0.00107241 22.4409 0 21.0236C0.001073 19.6063 0 2.59843 0 2.59843Z"
        fill="#0055F9"
      />
      <Ellipse
        cx="10.8677"
        cy="18.8977"
        rx="5.90551"
        ry="5.90551"
        fill="white"
      />
      <Path
        d="M30.7216 27V9.54545H37.4034C38.6648 9.54545 39.7131 9.74432 40.5483 10.142C41.3892 10.5341 42.017 11.071 42.4318 11.7528C42.8523 12.4347 43.0625 13.2074 43.0625 14.071C43.0625 14.7812 42.9261 15.3892 42.6534 15.8949C42.3807 16.3949 42.0142 16.8011 41.554 17.1136C41.0938 17.4261 40.5795 17.6506 40.0114 17.7869V17.9574C40.6307 17.9915 41.2244 18.1818 41.7926 18.5284C42.3665 18.8693 42.8352 19.3523 43.1989 19.9773C43.5625 20.6023 43.7443 21.358 43.7443 22.2443C43.7443 23.1477 43.5256 23.9602 43.0881 24.6818C42.6506 25.3977 41.9915 25.9631 41.1108 26.3778C40.2301 26.7926 39.1222 27 37.7869 27H30.7216ZM33.8835 24.358H37.2841C38.4318 24.358 39.2585 24.1392 39.7642 23.7017C40.2756 23.2585 40.5312 22.6903 40.5312 21.9972C40.5312 21.4801 40.4034 21.0142 40.1477 20.5994C39.892 20.179 39.5284 19.8494 39.0568 19.6108C38.5852 19.3665 38.0227 19.2443 37.3693 19.2443H33.8835V24.358ZM33.8835 16.9688H37.0114C37.5568 16.9688 38.0483 16.8693 38.4858 16.6705C38.9233 16.4659 39.267 16.179 39.517 15.8097C39.7727 15.4347 39.9006 14.9915 39.9006 14.4801C39.9006 13.804 39.6619 13.2472 39.1847 12.8097C38.7131 12.3722 38.0114 12.1534 37.0795 12.1534H33.8835V16.9688ZM49.4439 9.54545V27H46.3587V9.54545H49.4439ZM60.9602 21.4943V13.9091H64.0455V27H61.054V24.6733H60.9176C60.6222 25.4062 60.1364 26.0057 59.4602 26.4716C58.7898 26.9375 57.9631 27.1705 56.9801 27.1705C56.1222 27.1705 55.3636 26.9801 54.7045 26.5994C54.0511 26.2131 53.5398 25.6534 53.1705 24.9205C52.8011 24.1818 52.6165 23.2898 52.6165 22.2443V13.9091H55.7017V21.767C55.7017 22.5966 55.929 23.2557 56.3835 23.7443C56.8381 24.233 57.4347 24.4773 58.1733 24.4773C58.6278 24.4773 59.0682 24.3665 59.4943 24.1449C59.9205 23.9233 60.2699 23.5938 60.5426 23.1562C60.821 22.7131 60.9602 22.1591 60.9602 21.4943ZM73.0135 27.2557C71.701 27.2557 70.5675 26.983 69.6129 26.4375C68.6641 25.8864 67.9339 25.108 67.4226 24.1023C66.9112 23.0909 66.6555 21.9006 66.6555 20.5312C66.6555 19.1847 66.9112 18.0028 67.4226 16.9858C67.9396 15.9631 68.6612 15.1676 69.5874 14.5994C70.5135 14.0256 71.6016 13.7386 72.8516 13.7386C73.6584 13.7386 74.4197 13.8693 75.1357 14.1307C75.8572 14.3864 76.4936 14.7841 77.0447 15.3239C77.6016 15.8636 78.0391 16.5511 78.3572 17.3864C78.6754 18.2159 78.8345 19.2045 78.8345 20.3523V21.2983H68.1044V19.2188H75.8771C75.8714 18.6278 75.7436 18.1023 75.4936 17.642C75.2436 17.1761 74.8942 16.8097 74.4453 16.5426C74.0021 16.2756 73.4851 16.142 72.8942 16.142C72.2635 16.142 71.7095 16.2955 71.2322 16.6023C70.755 16.9034 70.3828 17.3011 70.1158 17.7955C69.8544 18.2841 69.7209 18.821 69.7152 19.4062V21.2216C69.7152 21.983 69.8544 22.6364 70.1328 23.1818C70.4112 23.7216 70.8004 24.1364 71.3004 24.4261C71.8004 24.7102 72.3857 24.8523 73.0561 24.8523C73.505 24.8523 73.9112 24.7898 74.2749 24.6648C74.6385 24.5341 74.9538 24.3438 75.2209 24.0938C75.4879 23.8438 75.6896 23.5341 75.826 23.1648L78.7067 23.4886C78.5249 24.25 78.1783 24.9148 77.6669 25.483C77.1612 26.0455 76.5135 26.483 75.7237 26.7955C74.9339 27.1023 74.0305 27.2557 73.0135 27.2557ZM81.581 27V9.54545H84.6662V16.0739H84.794C84.9531 15.7557 85.1776 15.4176 85.4673 15.0597C85.7571 14.696 86.1491 14.3864 86.6435 14.1307C87.1378 13.8693 87.7685 13.7386 88.5355 13.7386C89.5469 13.7386 90.4588 13.9972 91.2713 14.5142C92.0895 15.0256 92.7372 15.7841 93.2145 16.7898C93.6974 17.7898 93.9389 19.017 93.9389 20.4716C93.9389 21.9091 93.7031 23.1307 93.2315 24.1364C92.7599 25.142 92.1179 25.9091 91.3054 26.4375C90.4929 26.9659 89.5724 27.2301 88.544 27.2301C87.794 27.2301 87.1719 27.1051 86.6776 26.8551C86.1832 26.6051 85.7855 26.304 85.4844 25.9517C85.1889 25.5937 84.9588 25.2557 84.794 24.9375H84.6151V27H81.581ZM84.6065 20.4545C84.6065 21.3011 84.7259 22.0426 84.9645 22.679C85.2088 23.3153 85.5582 23.8125 86.0128 24.1705C86.473 24.5227 87.0298 24.6989 87.6832 24.6989C88.3651 24.6989 88.9361 24.517 89.3963 24.1534C89.8565 23.7841 90.2031 23.2812 90.4361 22.6449C90.6747 22.0028 90.794 21.2727 90.794 20.4545C90.794 19.642 90.6776 18.9205 90.4446 18.2898C90.2116 17.6591 89.8651 17.1648 89.4048 16.8068C88.9446 16.4489 88.3707 16.2699 87.6832 16.2699C87.0241 16.2699 86.4645 16.4432 86.0043 16.7898C85.544 17.1364 85.1946 17.6222 84.956 18.2472C84.723 18.8722 84.6065 19.608 84.6065 20.4545ZM100.329 27.2642C99.4993 27.2642 98.7521 27.1165 98.0874 26.821C97.4283 26.5199 96.9055 26.0767 96.5192 25.4915C96.1385 24.9062 95.9482 24.1847 95.9482 23.3267C95.9482 22.5881 96.0845 21.9773 96.3572 21.4943C96.63 21.0114 97.0021 20.625 97.4737 20.3352C97.9453 20.0455 98.4766 19.8267 99.0675 19.679C99.6641 19.5256 100.281 19.4148 100.917 19.3466C101.684 19.267 102.306 19.196 102.783 19.1335C103.261 19.0653 103.607 18.9631 103.823 18.8267C104.045 18.6847 104.156 18.4659 104.156 18.1705V18.1193C104.156 17.4773 103.965 16.9801 103.585 16.6278C103.204 16.2756 102.656 16.0994 101.94 16.0994C101.184 16.0994 100.585 16.2642 100.141 16.5938C99.7038 16.9233 99.4084 17.3125 99.255 17.7614L96.3743 17.3523C96.6016 16.5568 96.9766 15.892 97.4993 15.358C98.022 14.8182 98.6612 14.4148 99.4169 14.1477C100.173 13.875 101.008 13.7386 101.923 13.7386C102.553 13.7386 103.181 13.8125 103.806 13.9602C104.431 14.108 105.002 14.3523 105.519 14.6932C106.036 15.0284 106.451 15.4858 106.763 16.0653C107.082 16.6449 107.241 17.3693 107.241 18.2386V27H104.275V25.2017H104.173C103.985 25.5653 103.721 25.9062 103.38 26.2244C103.045 26.5369 102.621 26.7898 102.11 26.983C101.604 27.1705 101.011 27.2642 100.329 27.2642ZM101.13 24.9972C101.749 24.9972 102.286 24.875 102.741 24.6307C103.195 24.3807 103.545 24.0511 103.789 23.642C104.039 23.233 104.164 22.7869 104.164 22.304V20.7614C104.067 20.8409 103.903 20.9148 103.67 20.983C103.442 21.0511 103.187 21.1108 102.903 21.1619C102.619 21.2131 102.337 21.2585 102.059 21.2983C101.781 21.3381 101.539 21.3722 101.335 21.4006C100.874 21.4631 100.462 21.5653 100.099 21.7074C99.7351 21.8494 99.4482 22.0483 99.2379 22.304C99.0277 22.554 98.9226 22.8778 98.9226 23.2756C98.9226 23.8438 99.13 24.2727 99.5447 24.5625C99.9595 24.8523 100.488 24.9972 101.13 24.9972ZM113.428 19.3295V27H110.343V13.9091H113.292V16.1335H113.445C113.746 15.4006 114.227 14.8182 114.886 14.3864C115.55 13.9545 116.371 13.7386 117.349 13.7386C118.252 13.7386 119.039 13.9318 119.71 14.3182C120.386 14.7045 120.908 15.2642 121.278 15.9972C121.653 16.7301 121.837 17.6193 121.832 18.6648V27H118.746V19.142C118.746 18.267 118.519 17.5824 118.065 17.0881C117.616 16.5937 116.994 16.3466 116.198 16.3466C115.658 16.3466 115.178 16.4659 114.758 16.7045C114.343 16.9375 114.016 17.2756 113.778 17.7188C113.545 18.1619 113.428 18.6989 113.428 19.3295ZM127.781 22.892L127.772 19.1676H128.266L132.971 13.9091H136.576L130.789 20.3523H130.15L127.781 22.892ZM124.968 27V9.54545H128.053V27H124.968ZM133.184 27L128.923 21.0426L131.002 18.8693L136.874 27H133.184Z"
        fill="#0055F9"
      />
    </Svg>
  );
};

export const BlueBankLG = (props: SvgProps) => {
  return (
    <Svg width="183" height="45" viewBox="0 0 183 45" fill="none" {...props}>
      <Path
        d="M0 3.46457C0 3.46457 0 0 3.46457 0C6.92914 0 6.61417 3.46457 6.61417 3.46457V11.3386L2.83618 16.378C2.83618 16.378 7.55906 10.7087 15.4331 10.7087C23.3071 10.7087 29.6063 18.5827 29.6063 25.5118C29.6063 32.4409 21.7323 40 17.3228 40H0L4.09449 35.5905C4.09449 35.5905 -0.00142988 29.9213 0 28.0315C0.00143066 26.1417 0 3.46457 0 3.46457Z"
        fill="#0055F9"
      />
      <Circle cx="14.4902" cy="25.1969" r="7.87402" fill="white" />
      <Path
        d="M40.2955 35V11.7273H49.2045C50.8864 11.7273 52.2841 11.9924 53.3977 12.5227C54.5189 13.0455 55.3561 13.7614 55.9091 14.6705C56.4697 15.5795 56.75 16.6098 56.75 17.7614C56.75 18.7083 56.5682 19.5189 56.2045 20.1932C55.8409 20.8598 55.3523 21.4015 54.7386 21.8182C54.125 22.2348 53.4394 22.5341 52.6818 22.7159V22.9432C53.5076 22.9886 54.2992 23.2424 55.0568 23.7045C55.822 24.1591 56.447 24.803 56.9318 25.6364C57.4167 26.4697 57.6591 27.4773 57.6591 28.6591C57.6591 29.8636 57.3674 30.947 56.7841 31.9091C56.2008 32.8636 55.322 33.6174 54.1477 34.1705C52.9735 34.7235 51.4962 35 49.7159 35H40.2955ZM44.5114 31.4773H49.0455C50.5758 31.4773 51.678 31.1856 52.3523 30.6023C53.0341 30.0114 53.375 29.2538 53.375 28.3295C53.375 27.6402 53.2045 27.0189 52.8636 26.4659C52.5227 25.9053 52.0379 25.4659 51.4091 25.1477C50.7803 24.822 50.0303 24.6591 49.1591 24.6591H44.5114V31.4773ZM44.5114 21.625H48.6818C49.4091 21.625 50.0644 21.4924 50.6477 21.2273C51.2311 20.9545 51.6894 20.572 52.0227 20.0795C52.3636 19.5795 52.5341 18.9886 52.5341 18.3068C52.5341 17.4053 52.2159 16.6629 51.5795 16.0795C50.9508 15.4962 50.0152 15.2045 48.7727 15.2045H44.5114V21.625ZM65.2585 11.7273V35H61.1449V11.7273H65.2585ZM80.6136 27.6591V17.5455H84.7273V35H80.7386V31.8977H80.5568C80.1629 32.875 79.5152 33.6742 78.6136 34.2955C77.7197 34.9167 76.6174 35.2273 75.3068 35.2273C74.1629 35.2273 73.1515 34.9735 72.2727 34.4659C71.4015 33.9508 70.7197 33.2045 70.2273 32.2273C69.7348 31.2424 69.4886 30.053 69.4886 28.6591V17.5455H73.6023V28.0227C73.6023 29.1288 73.9053 30.0076 74.5114 30.6591C75.1174 31.3106 75.9129 31.6364 76.8977 31.6364C77.5038 31.6364 78.0909 31.4886 78.6591 31.1932C79.2273 30.8977 79.6932 30.4583 80.0568 29.875C80.428 29.2841 80.6136 28.5455 80.6136 27.6591ZM96.6847 35.3409C94.9347 35.3409 93.4233 34.9773 92.1506 34.25C90.8854 33.5152 89.9119 32.4773 89.2301 31.1364C88.5483 29.7879 88.2074 28.2008 88.2074 26.375C88.2074 24.5795 88.5483 23.0038 89.2301 21.6477C89.9195 20.2841 90.8816 19.2235 92.1165 18.4659C93.3513 17.7008 94.8021 17.3182 96.4688 17.3182C97.5445 17.3182 98.5597 17.4924 99.5142 17.8409C100.476 18.1818 101.325 18.7121 102.06 19.4318C102.802 20.1515 103.385 21.0682 103.81 22.1818C104.234 23.2879 104.446 24.6061 104.446 26.1364V27.3977H90.1392V24.625H100.503C100.495 23.8371 100.325 23.1364 99.9915 22.5227C99.6581 21.9015 99.1922 21.4129 98.5938 21.0568C98.0028 20.7008 97.3134 20.5227 96.5256 20.5227C95.6847 20.5227 94.946 20.7273 94.3097 21.1364C93.6733 21.5379 93.1771 22.0682 92.821 22.7273C92.4725 23.3788 92.2945 24.0947 92.2869 24.875V27.2955C92.2869 28.3106 92.4725 29.1818 92.8438 29.9091C93.215 30.6288 93.7339 31.1818 94.4006 31.5682C95.0672 31.947 95.8475 32.1364 96.7415 32.1364C97.34 32.1364 97.8816 32.053 98.3665 31.8864C98.8513 31.7121 99.2718 31.4583 99.6278 31.125C99.9839 30.7917 100.253 30.3788 100.435 29.8864L104.276 30.3182C104.033 31.3333 103.571 32.2197 102.889 32.9773C102.215 33.7273 101.351 34.3106 100.298 34.7273C99.2453 35.1364 98.0407 35.3409 96.6847 35.3409ZM108.108 35V11.7273H112.222V20.4318H112.392C112.604 20.0076 112.903 19.5568 113.29 19.0795C113.676 18.5947 114.199 18.1818 114.858 17.8409C115.517 17.4924 116.358 17.3182 117.381 17.3182C118.729 17.3182 119.945 17.6629 121.028 18.3523C122.119 19.0341 122.983 20.0455 123.619 21.3864C124.263 22.7197 124.585 24.3561 124.585 26.2955C124.585 28.2121 124.271 29.8409 123.642 31.1818C123.013 32.5227 122.157 33.5455 121.074 34.25C119.991 34.9545 118.763 35.3068 117.392 35.3068C116.392 35.3068 115.563 35.1402 114.903 34.8068C114.244 34.4735 113.714 34.072 113.312 33.6023C112.919 33.125 112.612 32.6742 112.392 32.25H112.153V35H108.108ZM112.142 26.2727C112.142 27.4015 112.301 28.3902 112.619 29.2386C112.945 30.0871 113.411 30.75 114.017 31.2273C114.631 31.697 115.373 31.9318 116.244 31.9318C117.153 31.9318 117.915 31.6894 118.528 31.2045C119.142 30.7121 119.604 30.0417 119.915 29.1932C120.233 28.3371 120.392 27.3636 120.392 26.2727C120.392 25.1894 120.237 24.2273 119.926 23.3864C119.616 22.5455 119.153 21.8864 118.54 21.4091C117.926 20.9318 117.161 20.6932 116.244 20.6932C115.366 20.6932 114.619 20.9242 114.006 21.3864C113.392 21.8485 112.926 22.4962 112.608 23.3295C112.297 24.1629 112.142 25.1439 112.142 26.2727ZM133.105 35.3523C131.999 35.3523 131.003 35.1553 130.116 34.7614C129.238 34.3598 128.541 33.7689 128.026 32.9886C127.518 32.2083 127.264 31.2462 127.264 30.1023C127.264 29.1174 127.446 28.303 127.81 27.6591C128.173 27.0152 128.67 26.5 129.298 26.1136C129.927 25.7273 130.635 25.4356 131.423 25.2386C132.219 25.0341 133.041 24.8864 133.889 24.7955C134.912 24.6894 135.741 24.5947 136.378 24.5114C137.014 24.4205 137.476 24.2841 137.764 24.1023C138.06 23.9129 138.207 23.6212 138.207 23.2273V23.1591C138.207 22.303 137.954 21.6402 137.446 21.1705C136.938 20.7008 136.207 20.4659 135.253 20.4659C134.245 20.4659 133.446 20.6856 132.855 21.125C132.272 21.5644 131.878 22.0833 131.673 22.6818L127.832 22.1364C128.135 21.0758 128.635 20.1894 129.332 19.4773C130.029 18.7576 130.882 18.2197 131.889 17.8636C132.897 17.5 134.01 17.3182 135.23 17.3182C136.071 17.3182 136.908 17.4167 137.741 17.6136C138.575 17.8106 139.336 18.1364 140.026 18.5909C140.715 19.0379 141.268 19.6477 141.685 20.4205C142.109 21.1932 142.321 22.1591 142.321 23.3182V35H138.366V32.6023H138.23C137.98 33.0871 137.628 33.5417 137.173 33.9659C136.726 34.3826 136.162 34.7197 135.48 34.9773C134.806 35.2273 134.014 35.3523 133.105 35.3523ZM134.173 32.3295C134.999 32.3295 135.715 32.1667 136.321 31.8409C136.927 31.5076 137.393 31.0682 137.719 30.5227C138.052 29.9773 138.219 29.3826 138.219 28.7386V26.6818C138.09 26.7879 137.87 26.8864 137.56 26.9773C137.257 27.0682 136.916 27.1477 136.537 27.2159C136.158 27.2841 135.783 27.3447 135.412 27.3977C135.041 27.4508 134.719 27.4962 134.446 27.5341C133.832 27.6174 133.283 27.7538 132.798 27.9432C132.313 28.1326 131.931 28.3977 131.651 28.7386C131.37 29.072 131.23 29.5038 131.23 30.0341C131.23 30.7917 131.507 31.3636 132.06 31.75C132.613 32.1364 133.317 32.3295 134.173 32.3295ZM150.571 24.7727V35H146.457V17.5455H150.389V20.5114H150.594C150.995 19.5341 151.635 18.7576 152.514 18.1818C153.401 17.6061 154.495 17.3182 155.798 17.3182C157.003 17.3182 158.052 17.5758 158.946 18.0909C159.848 18.6061 160.545 19.3523 161.037 20.3295C161.537 21.3068 161.783 22.4924 161.776 23.8864V35H157.662V24.5227C157.662 23.3561 157.359 22.4432 156.753 21.7841C156.154 21.125 155.325 20.7955 154.264 20.7955C153.545 20.7955 152.904 20.9545 152.344 21.2727C151.791 21.5833 151.355 22.0341 151.037 22.625C150.726 23.2159 150.571 23.9318 150.571 24.7727ZM169.707 29.5227L169.696 24.5568H170.355L176.628 17.5455H181.435L173.719 26.1364H172.866L169.707 29.5227ZM165.957 35V11.7273H170.071V35H165.957ZM176.912 35L171.23 27.0568L174.003 24.1591L181.832 35H176.912Z"
        fill="#0055F9"
      />
    </Svg>
  );
};

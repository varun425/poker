import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const WatermarkTextWrapper = styled.div`
  position: fixed;
  left: 40vw;
  top: 10vh;
  z-index: -99;
  overflow-x: hidden;
`;

const WatermarkText = () => (
  <WatermarkTextWrapper>
    <svg
      width="1328"
      height="647"
      viewBox="0 0 1328 647"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '80vw', height: '80vh' }}
    >
      <path
        opacity="0.15"
        d="M167.623 60.8613C171.44 60.8613 173.349 62.863 173.349 66.8662C173.349 68.9144 172.697 71.2884 171.394 73.9883C170.183 76.5951 169.206 78.7363 168.461 80.4121L92.6318 267.681L0.743164 62.3975H76.9912L121.399 166.854L152.541 88.9307C155.893 80.5518 158.08 74.5003 159.104 70.7764C160.129 67.0524 161.246 64.4922 162.456 63.0957C163.666 61.6061 165.389 60.8613 167.623 60.8613ZM200.301 62.3975H271.521V260H200.301V62.3975ZM331.151 240.03L331.57 253.995C331.57 256.416 330.919 258.278 329.615 259.581C328.312 260.884 326.729 261.536 324.867 261.536C323.098 261.536 321.609 260.931 320.398 259.721C319.188 258.51 318.583 257.207 318.583 255.811C318.583 254.321 318.676 252.971 318.862 251.761C319.142 250.457 319.374 249.014 319.561 247.432C320.026 244.732 320.259 237.982 320.259 227.183V53.46L472.057 173.837V90.6064C472.057 84.2757 471.87 79.7604 471.498 77.0605C471.033 72.6849 470.8 69.6126 470.8 67.8438C470.8 63.1888 472.801 60.8613 476.805 60.8613C478.387 60.8613 479.877 61.4199 481.273 62.5371C482.763 63.6543 483.508 65.2835 483.508 67.4248V72.3125L482.949 92.5615V267.681L331.151 148.561V240.03ZM676.502 66.0283C676.502 70.3109 671.987 72.4521 662.956 72.4521H630.558V260H559.058V72.4521H538.11C530.942 72.4521 526.007 72.778 523.308 73.4297C519.77 74.1745 517.21 74.5469 515.627 74.5469C510.879 74.5469 508.505 72.6849 508.505 68.9609C508.505 64.5853 513.113 62.3975 522.33 62.3975H646.896C653.32 62.3975 658.068 62.1182 661.141 61.5596C664.865 60.9079 667.658 60.582 669.52 60.582C674.174 60.582 676.502 62.3975 676.502 66.0283ZM741.159 235.143C724.122 235.143 712.485 235.003 706.247 234.724L702.197 244.359C700.987 247.059 699.87 249.899 698.846 252.878C696.704 258.65 693.725 261.536 689.908 261.536C688.139 261.536 686.696 260.978 685.579 259.86C684.462 258.743 683.903 257.579 683.903 256.369C683.903 254.321 684.788 252.04 686.557 249.526C689.35 245.616 692.096 240.496 694.796 234.165C686.789 233.42 682.786 231.093 682.786 227.183C682.786 223.272 685.067 221.317 689.629 221.317C692.422 221.317 695.68 221.783 699.404 222.714L769.089 53.46L864.608 260H791.852L780.261 235.143H741.159ZM710.716 223.831C719.653 224.576 727.66 224.948 734.735 224.948H775.652L740.74 149.678L710.716 223.831ZM1061.37 249.806L1061.65 240.17V218.105C1048.53 239.984 1029.16 253.902 1003.56 259.86C995.459 261.722 986.009 262.653 975.21 262.653C964.504 262.653 953.378 260.419 941.834 255.95C930.383 251.481 920.328 245.011 911.67 236.539C892.678 218.105 883.182 193.853 883.182 163.782C883.182 135.015 893.236 110.669 913.346 90.7461C934.293 70.1712 960.593 59.8838 992.247 59.8838C1008.26 59.8838 1022.74 62.863 1035.68 68.8213C1043.59 72.359 1049.18 75.6641 1052.44 78.7363C1055.69 81.7155 1057.32 84.1361 1057.32 85.998C1057.32 87.7669 1056.76 89.3031 1055.65 90.6064C1054.53 91.9098 1052.95 92.5615 1050.9 92.5615C1048.94 92.5615 1046.76 91.4909 1044.34 89.3496C1037.17 83.0189 1030.84 78.876 1025.34 76.9209C1019.94 74.9658 1015.61 73.5693 1012.36 72.7314C1009.1 71.8936 1006.17 71.2884 1003.56 70.916C999.555 70.3574 994.807 70.0781 989.314 70.0781C983.822 70.0781 978.748 70.5436 974.093 71.4746V252.18C975.117 252.273 976.141 252.319 977.165 252.319H979.958C1007.61 252.319 1030 241.846 1047.13 220.898C1052.99 213.73 1057.84 205.258 1061.65 195.482V182.076C1061.65 182.076 1061.42 177.887 1060.95 169.508C1060.95 164.574 1062.91 162.106 1066.82 162.106C1068.87 162.106 1070.45 162.805 1071.57 164.201C1072.68 165.505 1073.24 167.134 1073.24 169.089L1072.41 180.68V232.629L1073.24 254.274C1073.24 256.509 1072.59 258.278 1071.29 259.581C1070.08 260.884 1068.63 261.536 1066.96 261.536C1062.86 261.536 1060.81 259.395 1060.81 255.112C1060.81 253.995 1061 252.226 1061.37 249.806ZM1244.31 247.99C1249.06 247.99 1251.43 249.852 1251.43 253.576C1251.43 255.252 1250.41 256.742 1248.36 258.045C1246.31 259.348 1242.78 260 1237.75 260H1119.47V62.3975C1156.15 62.3975 1192.83 62.3975 1229.51 62.3975L1240.96 61.9785C1247.94 61.9785 1251.43 64.0267 1251.43 68.123C1251.43 69.7057 1250.83 71.1953 1249.62 72.5918C1248.5 73.8952 1247.2 74.5469 1245.71 74.5469C1243.29 74.5469 1240.73 74.2676 1238.03 73.709C1234.03 72.8711 1228.53 72.4521 1221.55 72.4521H1190.69V115.045H1216.1C1216.1 115.045 1221.83 114.812 1233.28 114.347C1235.33 114.347 1237.05 114.859 1238.45 115.883C1239.94 116.814 1240.68 118.164 1240.68 119.933C1240.68 123.843 1238.07 125.798 1232.86 125.798L1226.86 125.658C1223.78 125.379 1221.22 125.239 1219.18 125.239H1190.69V249.806H1221.55C1228.44 249.806 1233.33 249.526 1236.21 248.968C1239.66 248.316 1242.36 247.99 1244.31 247.99ZM119.165 550.046L131.594 550.604C149.655 550.604 164.551 544.646 176.281 532.729C188.198 520.72 194.436 505.172 194.994 486.087C196.018 456.668 181.867 436.791 152.541 426.457C141.555 422.547 127.265 420.592 109.669 420.592H97.9385V608H26.7178V410.397H80.2031C109.064 410.397 126.473 410.816 132.432 411.654C138.39 412.492 144.581 413.563 151.005 414.866C157.522 416.17 164.504 419.009 171.952 423.385C179.493 427.76 185.87 432.974 191.084 439.025C201.604 451.314 206.678 465.745 206.306 482.316C205.747 503.45 199.556 521.046 187.732 535.104C175.723 549.255 159.151 558.006 138.018 561.357C131.873 562.195 127.032 562.614 123.494 562.614C115.115 562.614 110.926 560.333 110.926 555.771C110.926 554.096 111.671 552.746 113.16 551.722C114.65 550.604 116.651 550.046 119.165 550.046ZM259.372 582.863C250.155 573.833 242.8 562.94 237.308 550.186C231.908 537.338 229.208 523.373 229.208 508.291C229.208 493.116 231.768 479.523 236.889 467.514C242.102 455.411 249.271 444.937 258.395 436.093C277.945 417.287 302.477 407.884 331.989 407.884C361.315 407.884 385.335 417.147 404.048 435.674C423.04 454.48 432.536 478.872 432.536 508.85C432.536 538.734 422.807 563.312 403.35 582.584C391.154 594.501 376.165 602.74 358.383 607.302C349.538 609.536 339.251 610.653 327.521 610.653C315.883 610.653 303.92 608.279 291.631 603.531C279.342 598.69 268.589 591.801 259.372 582.863ZM331.85 418.078C326.729 418.078 321.935 418.451 317.466 419.195V599.342C321.748 600.087 326.543 600.459 331.85 600.459C356.707 600.459 377.654 592.173 394.691 575.602C412.473 558.378 421.364 536.128 421.364 508.85C421.364 482.875 413.032 461.276 396.367 444.053C379.516 426.736 358.01 418.078 331.85 418.078ZM472.476 410.397H543.696V468.212L593.411 430.646C600.394 425.34 605.467 421.011 608.633 417.659C611.798 414.308 613.753 412.306 614.498 411.654C615.336 410.91 616.081 410.351 616.732 409.979C617.85 409.234 619.246 408.861 620.922 408.861C622.691 408.861 624.087 409.373 625.111 410.397C626.135 411.328 626.647 412.399 626.647 413.609C626.647 414.727 626.508 415.704 626.229 416.542C625.949 417.287 625.391 418.171 624.553 419.195C622.691 421.43 619.153 424.549 613.939 428.552L582.658 452.292L635.026 580.35C636.05 582.77 637.028 584.911 637.959 586.773L640.193 591.801L642.707 596.549C643.359 597.852 643.917 599.109 644.383 600.319C644.848 601.53 645.035 602.693 644.941 603.811C644.848 604.928 644.522 605.952 643.964 606.883C642.66 608.931 641.078 609.955 639.216 609.955C636.609 609.955 634.654 609.21 633.351 607.721C631.675 605.673 630.418 603.392 629.58 600.878L627.066 593.058C626.229 590.451 625.111 587.332 623.715 583.701L573.022 459.554L543.696 481.758V608H472.476V410.397ZM797.996 595.99C802.744 595.99 805.118 597.852 805.118 601.576C805.118 603.252 804.094 604.742 802.046 606.045C799.998 607.348 796.46 608 791.433 608H673.15V410.397C709.831 410.397 746.512 410.397 783.193 410.397L794.645 409.979C801.627 409.979 805.118 412.027 805.118 416.123C805.118 417.706 804.513 419.195 803.303 420.592C802.186 421.895 800.882 422.547 799.393 422.547C796.972 422.547 794.412 422.268 791.712 421.709C787.709 420.871 782.216 420.452 775.233 420.452H744.371V463.045H769.787C769.787 463.045 775.513 462.812 786.964 462.347C789.012 462.347 790.734 462.859 792.131 463.883C793.62 464.814 794.365 466.164 794.365 467.933C794.365 471.843 791.758 473.798 786.545 473.798L780.54 473.658C777.468 473.379 774.908 473.239 772.859 473.239H744.371V597.806H775.233C782.123 597.806 787.01 597.526 789.896 596.968C793.341 596.316 796.041 595.99 797.996 595.99ZM936.667 540.271L948.118 541.108C964.504 541.108 978.422 535.383 989.873 523.932C1001.32 512.48 1007.05 498.236 1007.05 481.199C1007.05 458.855 997.228 442.284 977.584 431.484C966.785 425.526 955.24 422.081 942.951 421.15C937.738 420.685 932.896 420.452 928.428 420.452H918.932C916.977 420.452 915.254 420.499 913.765 420.592V608H842.544V410.397C864.329 410.397 881.971 410.397 895.471 410.397C908.97 410.397 917.768 410.444 921.864 410.537C925.961 410.63 929.591 410.77 932.757 410.956C936.015 411.049 939.041 411.189 941.834 411.375C945.93 411.747 951.702 412.632 959.15 414.028C966.691 415.425 974.139 418.078 981.494 421.988C988.849 425.898 995.18 430.74 1000.49 436.512C1011.94 448.801 1017.66 463.417 1017.66 480.361C1017.66 497.119 1012.36 511.922 1001.74 524.77C990.851 537.896 976.327 546.368 958.173 550.186C966.831 576.998 977.863 593.011 991.27 598.225C995.366 599.807 999.462 600.599 1003.56 600.599L1014.59 597.945C1018.04 597.945 1019.76 599.714 1019.76 603.252C1019.76 608.186 1013.99 610.653 1002.44 610.653C994.062 610.653 986.382 608.326 979.399 603.671C968.507 597.154 959.243 584.493 951.609 565.687L947.56 555.771C946.908 554.189 946.303 553.211 945.744 552.839C945.279 552.466 944.394 552.28 943.091 552.28C941.881 552.28 940.81 552.373 939.879 552.56L936.527 552.699C932.803 552.699 930.243 552.001 928.847 550.604C927.543 549.208 926.892 547.765 926.892 546.275C926.892 542.272 930.15 540.271 936.667 540.271Z"
        fill={theme.colors.secondaryCta}
      />
    </svg>
  </WatermarkTextWrapper>
);

export default WatermarkText;

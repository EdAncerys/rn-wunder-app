const IconEuro = ({size = 3}) => {
  return (
    <svg
      className={`fill-current`}
      id="Euro"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 384 384">
      <path
        d="M256,330.667c-53.44,0-99.84-30.293-122.987-74.667H256v-42.667H119.147c-1.067-6.933-1.813-14.08-1.813-21.333
         s0.747-14.4,1.813-21.333H256V128H133.013C156.16,83.627,202.453,53.333,256,53.333c34.453,0,65.92,12.587,90.133,33.387
         L384,49.067C350.08,18.667,305.173,0,256,0C172.48,0,101.547,53.44,75.2,128H0v42.667h65.28C64.427,177.707,64,184.747,64,192
         s0.427,14.293,1.28,21.333H0V256h75.2c26.347,74.56,97.28,128,180.8,128c49.173,0,94.08-18.667,128-49.067l-37.867-37.76
         C321.92,317.973,290.453,330.667,256,330.667z"
      />
    </svg>
  );
};

const Icons = {
  IconEuro: IconEuro,
};

export default Icons;

import style from "./SceneEditor.module.scss";

interface HelpersButtonProps {
  handlerSwitch: () => void;
}

const HelpersButton = ({ handlerSwitch }: HelpersButtonProps) => {
  return (
    <button
      className={`${style.helpersButton} ${style.button} ${style.hover}`}
      onClick={handlerSwitch}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="white"
          d="m12 2l4 4h-3v7.85l6.53 3.76L21 15.03l1.5 5.47l-5.5 1.46l1.53-2.61L12 15.58l-6.53 3.77L7 21.96L1.5 20.5L3 15.03l1.47 2.58L11 13.85V6H8zm9 3h-2V3h2zm1 5v2h-4v-2h1V8h-1V6h3v4z"
        />
      </svg>
    </button>
  );
};

export default HelpersButton;

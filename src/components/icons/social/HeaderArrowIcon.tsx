type HeaderArrowIconProps = {
   className?: string;
};

function HeaderArrowIcon({ className }: HeaderArrowIconProps) {
   return (
      <svg
         className={className}
         xmlns="http://www.w3.org/2000/svg"
         width="12"
         height="12"
         viewBox="0 0 12 12"
         fill="none"
      >
         <path
            d="M6 7.68789L3 4.68789L3.5375 4.15039L6 6.62539L8.4625 4.16289L9 4.70039L6 7.68789Z"
            fill="white"
         />
      </svg>
   );
}

export default HeaderArrowIcon;

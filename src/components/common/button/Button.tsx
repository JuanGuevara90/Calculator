import React from "react";

interface ButtonProps {
	style?: string;
	label: string;
	onClick?: () => void;
}

const Button = ({ style, label, ...props }: ButtonProps) => {
	return (
		<button className={style} {...props}>
			{label}
		</button>
	);
};

export default Button;

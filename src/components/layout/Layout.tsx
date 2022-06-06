import React from "react";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
			<div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
				children
			</div>
		</div>
	);
};

export default Layout;

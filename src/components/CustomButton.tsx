interface CustomButtonProps {
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
	size?: "small" | "medium" | "large";
	rounded?: "none" | "small" | "medium" | "large" | "xl" | "full";
	loading?: boolean;
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
}

function CustomButton(props: CustomButtonProps) {

	const { children, variant, size, rounded, loading, disabled, className, onClick } = props;

	const getVariant = () => {
		switch (variant) {
			case "primary":
				return "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600";
			case "secondary":
				return "bg-gray-600 hover:bg-gray-700 text-white dark:bg-gray-500 dark:hover:bg-gray-600";
			case "success":
				return "bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600";
			case "danger":
				return "bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600";
			case "warning":
				return "bg-yellow-600 hover:bg-yellow-700 text-white dark:bg-yellow-500 dark:hover:bg-yellow-600";
			case "info":
				return "bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-500 dark:hover:bg-teal-600";
			case "light":
				return "bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-800";
			case "dark":
				return "bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-700 dark:hover:bg-gray-800";
			default:
				return "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600";
		}
	};


	const getSize = () => {
		switch (size) {
			case "small":
				return "px-4 py-1 text-sm";
			case "medium":
				return "px-4 py-2 text-base";
			case "large":
				return "px-4 py-3 text-lg";
			default:
				return "px-4 py-2 text-base";
		}
	};

	const getRounded = () => {
		switch (rounded) {
			case "none":
				return "";
			case "small":
				return "rounded-sm";
			case "medium":
				return "rounded-md";
			case "large":
				return "rounded-lg";
			case "xl":
				return "rounded-xl";
			case "full":
				return "rounded-full";
			default:
				return "rounded-md";
		}
	};

	return (
		<button
			className={`w-full flex flex-row items-center justify-center space-x-2
			${getVariant()} 
			${getSize()} 
			${getRounded()} 
			${loading ? "opacity-50 cursor-not-allowed" : ""}
			${className ? className : ""}
			disabled:opacity-50 disabled:cursor-not-allowed`}
			disabled={loading || disabled}
			onClick={onClick}
		>
			{loading ? "" : children}
			{loading && (
				<svg
					className="animate-spin h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			)}
		</button>
	);

}


export default CustomButton;
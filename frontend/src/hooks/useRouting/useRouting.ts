import { useNavigate } from "react-router-dom";

export function useRouting() {
	const navigate = useNavigate();

	const handleToHome = () => navigate("/");
	const handleToUserDetail = (id: number) => navigate(`/user/${id}`);
	const handleToLogin = () => navigate("/signin");
	const handleToRegister = () => navigate("/signup");
	const handleToNewTicket = () => navigate("ticket/new");

	return {
		handleToHome,
		handleToUserDetail,
		handleToLogin,
		handleToRegister,
		handleToNewTicket
	};
}

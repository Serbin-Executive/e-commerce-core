import { useNavigate } from "react-router";

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return <button onClick={goBack}>BACK</button>;
};

export default BackButton;

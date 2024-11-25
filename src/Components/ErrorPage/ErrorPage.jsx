import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h2>Opps!!!</h2>
            <p>{error.statusText || error.messeage}</p>
            {
                error.status === 404 && <div>
                    <h3>Pge not found</h3>
                    <p>Go back where you from </p>
                  <Link to="/"><button>Home Page</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
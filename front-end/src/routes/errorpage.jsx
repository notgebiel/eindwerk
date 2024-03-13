import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div id="errorpage">
                <p>test error page</p>
                <i>{error.statusText || error.message}</i>
            </div>
        </>
    )
}
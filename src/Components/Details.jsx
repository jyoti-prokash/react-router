import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const user = useLoaderData();
    console.log(user);
    const {name}= user;
    return (
        <div>
                <h1>address: {name} </h1>
        </div>
    );
};

export default Details;
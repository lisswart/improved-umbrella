import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Bookshelf: Track the Books You've Read</h1>
            <p>Add a Book to Your Bookshelf</p>
            <p>Filter Your Bookshelf by tags and by read status</p>
            <p>Editing Your Bookshelf Records is a Breeze!</p>
            
            <p>Want to Start Your Bookshelf?</p>
            <Link to="/signup"><button>Create a Free Account!</button></Link>
            <br />
        </>
    );
};

export default Home;
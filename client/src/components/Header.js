import { Link, useHistory } from "react-router-dom";

function Header({ user, onLogout }) {
    const history = useHistory();

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        })
            .then(() => {
                onLogout()
                history.push("/login")
            });
    };

    return (
        <nav role="navigation">
            <Link className="logo" to="/"><button>Start a Bookshelf</button></Link>
            <div className="logo">
                {user ?
                    <div style={ {margin: 10, display: "flex", flexDirection: "column"} }>
                        <span>Welcome, {user.username}!</span>
                        <Link to="/books" style={{marginTop: 10}}><button>Books</button></Link>
                        <button onClick={handleLogout} style={{marginTop: 10, paddingTop: 10, paddingBottom: 10}}>Logout</button>
                    </div>
                    :
                    <>
                        <Link to="/login"><button>Login</button></Link>
                        <Link to="/signup"><button>Signup</button></Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;
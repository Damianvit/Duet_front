import { useState, React } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdHome, MdSearch, MdAccountCircle } from "react-icons/md"; // Import icons from Material Design

// Create custom styled components with CSS properties
const StyledAppBar = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
`;

const StyledToolbar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
`;

const StyledButton = styled.button`
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    color: ${(props) => (props.active ? "green" : "black")};
    padding: 5%;
`;

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledIcon = styled.div`
    font-size: 2rem;
`;

const StyledText = styled.p`
    margin: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 0.75rem;
`;

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // This should be replaced with real authentication logic

    return (
        <StyledAppBar>
            <StyledToolbar>
                <StyledButton
                    as={NavLink}
                    to="/"
                    active={
                        window.location.pathname === "/" ? "true" : undefined
                    }
                >
                    <StyledBox>
                        <StyledIcon>
                            <MdHome />
                        </StyledIcon>
                        <StyledText>Home</StyledText>
                    </StyledBox>
                </StyledButton>
                <StyledButton
                    as={NavLink}
                    to="/search"
                    active={
                        window.location.pathname === "/search"
                            ? "true"
                            : undefined
                    }
                >
                    <StyledBox>
                        <StyledIcon>
                            <MdSearch />
                        </StyledIcon>
                        <StyledText>Search</StyledText>
                    </StyledBox>
                </StyledButton>
                {!isLoggedIn ? (
                    <StyledButton
                        as={NavLink}
                        to="/login"
                        active={
                            window.location.pathname === "/login"
                                ? "true"
                                : undefined
                        }
                    >
                        <StyledBox>
                            <StyledIcon>
                                <MdAccountCircle />
                            </StyledIcon>
                            <StyledText>Sign In</StyledText>
                        </StyledBox>
                    </StyledButton>
                ) : (
                    <StyledButton
                        as={NavLink}
                        to="/profile"
                        active={
                            window.location.pathname === "/profile"
                                ? "true"
                                : undefined
                        }
                    >
                        <StyledBox>
                            <StyledIcon>
                                <MdAccountCircle />
                            </StyledIcon>
                            <StyledText>Profile</StyledText>
                        </StyledBox>
                    </StyledButton>
                )}
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default NavBar;

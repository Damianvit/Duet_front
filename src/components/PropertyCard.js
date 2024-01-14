import React from "react";
import styled from "styled-components";
import { StyleSheetManager } from "styled-components";

// Create custom styled components with CSS properties
const StyledCard = styled.div`
    margin: 10px;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const StyledCardActionArea = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledCardMedia = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; /* Center the content within the square area */
    border-radius: 18px;
`;

const StyledCardContent = styled.div`
    padding: 16px;
`;

const StyledTypography = styled.p`
    margin: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    color: ${(props) =>
        props.color === "text.secondary" ? "#757575" : "#212121"};
    font-size: ${(props) =>
        props.variant === "h5"
            ? "24px"
            : props.variant === "body2"
            ? "14px"
            : "16px"};
    font-weight: ${(props) => (props.variant === "h5" ? "400" : "300")};
`;

const PropertyCard = ({ property, onClick }) => {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "variant"}>
            <StyledCard onClick={onClick}>
                <StyledCardActionArea>
                    <StyledCardMedia
                        alt={property.title}
                        src={property.image}
                        title={property.title}
                    />
                    <StyledCardContent>
                        <StyledTypography variant="h5">
                            {property.title}
                        </StyledTypography>
                        <StyledTypography
                            variant="body2"
                            color="text.secondary"
                        >
                            {property.location}
                        </StyledTypography>
                        <StyledTypography
                            variant="body2"
                            color="text.secondary"
                        >
                            {property.price}
                        </StyledTypography>
                    </StyledCardContent>
                </StyledCardActionArea>
            </StyledCard>
        </StyleSheetManager>
    );
};

export default PropertyCard;

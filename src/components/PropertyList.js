import React from "react";
import styled from "styled-components";
import PropertyCard from "../components/PropertyCard";

// Create custom styled components with CSS properties
const StyledGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    justify-content: center;
    align-items: center;
`;

const StyledGridItem = styled.div`
    flex: 0 0 90%; /* Default to full width for smaller screens */

    @media (min-width: 550px) {
        flex: 0 0 50%;
    }

    @media (min-width: 600px) {
        flex: 0 0 50%;
    }

    @media (min-width: 960px) {
        flex: 0 0 33.3333%;
    }

    @media (min-width: 1280px) {
        flex: 0 0 25%;
    }

    padding: 10px;
`;

const PropertyList = ({ properties }) => {
    return (
        <StyledGrid>
            {properties.map((property) => (
                <StyledGridItem key={property.id}>
                    <PropertyCard property={property} />
                </StyledGridItem>
            ))}
        </StyledGrid>
    );
};

export default PropertyList;

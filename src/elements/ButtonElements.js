import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const ButtonWrapper = styled(props => <Link {...props} />)`
  padding: 0.5rem 0.75rem;
  background-color: ${props => props.theme.colors.main1};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.light1};
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
  transition: filter 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  &:hover,
  &:focus {
    filter: brightness(110%);
  }
`

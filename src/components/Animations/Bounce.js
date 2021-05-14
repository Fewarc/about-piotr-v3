import React from 'react';
import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations'

const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`} infinite`;

export default Bounce;
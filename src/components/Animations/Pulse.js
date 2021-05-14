import React from 'react';
import styled, { keyframes } from 'styled-components'
import { pulse } from 'react-animations'

const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;

export default Pulse;
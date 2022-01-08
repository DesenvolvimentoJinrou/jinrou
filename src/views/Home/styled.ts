import styled from "styled-components/native"
import cores from "../../configs/style/colors"

export const Container = styled.ImageBackground`
flex: 1;
justify-content: center;
/* align-items: center; */
`;
export const Content = styled.View`
flex: 0.85;
justify-content: space-between;
align-items: center;
`;

export const Image = styled.Image`
width: 80px;
height: 60px;
border-radius: 10px;
background-color: transparent;
justify-content: center;
align-items: center;
`;




export const ButtonYellow = styled.TouchableOpacity`
width: 80%;
height:40px;
background-color: ${cores.yellow};
border-radius: 25px;
justify-content: center;
align-items: center;
`;


export const ButtonTransparent = styled.TouchableOpacity`
width: 80%;
height:40px;
background-color: transparent;
border: 1px solid ${cores.yellow};
border-radius: 25px;
justify-content: center;
align-items: center;
margin-bottom: 5px;
`;

export const TextoYellow = styled.Text`
font-size: 18px;
color: ${cores.red};
font-weight: bold;
`;
export const TextoTransparent = styled.Text`
font-size: 18px;
color: ${cores.yellow};
font-weight: bold;
`;
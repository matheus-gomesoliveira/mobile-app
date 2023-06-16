import { Image } from 'react-native'
import { Container, Title } from './styles'; 

const Success = () => {
    return(
        <Container>
            <Image 
                source={require('../../../assets/success.png')}
                style={{
                    height: 80,
                    width: 80,
                }}
            />
            <Title>Alterações realizadas</Title>
        </Container>
      )

};

export default Success;

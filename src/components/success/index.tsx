import { Image, Modal, View } from 'react-native'
import { Container, Subtitle, Title } from './styles'; 
import { ReactNode, SetStateAction } from 'react';

interface props{
    title: string | null;
    firstSubtitle: string | null;
    secondSubtitle: string | null;
    children: ReactNode | null;
    isVisible: boolean;
    setIsVisible: React.Dispatch<SetStateAction<boolean>>;}

const Success:React.FC<props> = (props) => {
      if (!props.isVisible) {
        return null;
      }
    
    return(
        <Modal>
            <Container>
                <View
                    style={{
                        alignItems:"center"
                    }}
                >
                    <Image 
                        source={require('../../../assets/success.png')}
                        style={{
                            height: 80,
                            width: 80,
                        }}
                    />
                    <Title>{props.title}</Title>
                    <Subtitle>{props.firstSubtitle}</Subtitle>
                    <Subtitle>{props.secondSubtitle}</Subtitle>
                </View>
                <View
                    style={{
                        width:"90%",
                    }}
                >{props.children}</View>
            </Container>
        </Modal>
      )

};

export default Success;

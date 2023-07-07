import {Image} from "react-native"
import { Content, Piggy, Title } from "./styles"

const ExtractOut = ()=>{
    return(
        <Content>
          <Piggy>
            <Image source={require('../../../../assets/piggy-bank.png')} />
            <Title>Você ainda não possui lançamentos.</Title>
          </Piggy>
        </Content>
    )
}

export default ExtractOut
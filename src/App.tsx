import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

import './styles/theme.css'
import './styles/global.css'
import { DefaultInput } from './components/DefaultInput';

export function App() {
    return  (
        <> { /* --> react fragment */ }
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form' action="">
                    <div className="formRow">
                        <DefaultInput id='meuInput' type='text' />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <p>Ciclos</p>
                        <p>0 0 0 0 0 0 0</p>
                    </div>

                    <div className="formRow">
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>

            <Container>
                <Heading>FOOTER</Heading>
            </Container>
        </>
    );
}